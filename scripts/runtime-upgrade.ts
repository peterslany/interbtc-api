/* eslint @typescript-eslint/no-var-requires: "off" */
import { createSubstrateAPI } from "../src/factory";
import { ApiPromise } from "@polkadot/api";
import { cryptoWaitReady, blake2AsHex, sha256AsU8a } from "@polkadot/util-crypto";
import { SubmittableExtrinsic } from "@polkadot/api/types";

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const args = yargs(hideBin(process.argv))
    .option("clients-version", {
        description: "The version of the clients",
        type: "string",
        demandOption: true,
    })
    .option("parachain-endpoint", {
        description: "The wss url of the parachain",
        type: "string",
    })
    .option("parachain-version", {
        description: "The version of the parachain",
        type: "string",
        demandOption: true,
    })
    .option("runtime-name", {
        description: "The name of the runtime",
        type: "string",
    })
    .option("with-defaults-of", {
        description: "Which default values to use",
        choices: ['kintsugi', 'interlay'],
    })
    .argv;

main().catch((err) => {
    console.log("Error thrown by script:");
    console.log(err);
});

function toUrl(extrinsic: SubmittableExtrinsic<"promise">, endpoint: string) {
    return "https://polkadot.js.org/apps/?rpc=" +
        encodeURIComponent(endpoint) +
        "#/extrinsics/decode/" +
        extrinsic.method.toHex();
}

function constructProposal(api: ApiPromise, extrinsic: SubmittableExtrinsic<"promise">) {
    const deposit = api.consts.democracy.minimumDeposit.toNumber();
    const preImageSubmission = api.tx.democracy.notePreimage(extrinsic.method.toHex());
    const proposal = api.tx.democracy.propose(extrinsic.method.hash.toHex(), deposit);
    const batched = api.tx.utility.batchAll([preImageSubmission, proposal]);
    return batched
}

async function printDiscordProposal(
    description: string,
    extrinsic: SubmittableExtrinsic<"promise">,
    endpoint: string,
    api: ApiPromise,
) {
    const proposal = constructProposal(api, extrinsic);
    const invocation = process.argv.map(function (x) { return x.substring(x.lastIndexOf('/') + 1) }).join(" ");

    console.log("");
    console.log("");
    console.log("**" + description + "**");
    console.log("");
    console.log("**Extrinsic:**", toUrl(extrinsic, endpoint));
    console.log("");
    console.log("**Proposal:**", toUrl(proposal, endpoint));
    console.log("");
    console.log("_Generated with_: `" + invocation + "`");
    console.log("");
    console.log("");
}

async function main(): Promise<void> {
    await cryptoWaitReady();

    switch (args['with-defaults-of']) {
        case 'interlay':
            if (args['parachain-endpoint'] === undefined) {
                args['parachain-endpoint'] = "wss://api.interlay.io/parachain";
            }
            if (args['runtime-name'] === undefined) {
                args['runtime-name'] = "interlay";
            }
            break;
        case 'kintsugi':
            if (args['parachain-endpoint'] === undefined) {
                args['parachain-endpoint'] = "wss://api-kusama.interlay.io/parachain";
            }
            if (args['runtime-name'] === undefined) {
                args['runtime-name'] = "kintsugi";
            }
            break;
    }
    if (args['parachain-endpoint'] === undefined
        || args['runtime-name'] === undefined) {
        console.log("Not all required arguments supplied");
        return;
    }

    const parachainRepo = "https://github.com/interlay/interbtc";
    const parachainVersion = args['parachain-version'];
    console.log(`Downloading parachain runtime (${parachainVersion})...`);
    const runtimeFileName = `${args['runtime-name']}_runtime_parachain.compact.compressed.wasm`;
    // NOTE: fetch flagged as experimental, not sure if there is a better alternative
    const wasmRuntime = await fetch(`${parachainRepo}/releases/download/${parachainVersion}/${runtimeFileName}`);
    const wasmRuntimeRaw = await wasmRuntime.arrayBuffer();
    const codeHash = blake2AsHex(Buffer.from(wasmRuntimeRaw));
    console.log(`Blake2-256 hash: ${codeHash}`);

    const clientsRepo = "https://github.com/interlay/interbtc-clients";
    const clientsVersion = args['clients-version'];
    console.log(`Downloading vault binary (${clientsVersion})...`);
    const vaultFileName = `vault-parachain-metadata-${args['runtime-name']}`;
    const vaultBinaryUri = `${clientsRepo}/releases/download/${clientsVersion}/${vaultFileName}`;
    const vaultBinary = await fetch(vaultBinaryUri);
    const vaultBinaryRaw = await vaultBinary.arrayBuffer();
    const vaultChecksum = sha256AsU8a(Buffer.from(vaultBinaryRaw));
    const vaultRelease = { uri: vaultBinaryUri, checksum: vaultChecksum };

    const paraApi = await createSubstrateAPI(args['parachain-endpoint']);

    const batched = paraApi.tx.utility.batchAll([
        paraApi.tx.parachainSystem.authorizeUpgrade(codeHash),
        paraApi.tx.clientsInfo.setPendingClientRelease("vault", vaultRelease),
    ]);

    const title = `Runtime Upgrade ${parachainVersion}`;
    printDiscordProposal(title, batched, args["parachain-endpoint"], paraApi);

    await paraApi.disconnect();
}
