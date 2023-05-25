import * as bitcoinjs from "bitcoinjs-lib";
export { bitcoinjs as bitcoin };

import { H160 } from "@polkadot/types/interfaces";
import { BitcoinAddress } from "@polkadot/types/lookup";
import { TypeRegistry, Bytes } from "@polkadot/types";

import { ElectrsAPI } from "../external";
import { BTCRelayAPI } from "../parachain";
import { sleep, addHexPrefix, reverseEndiannessHex, SLEEP_TIME_MS, BitcoinCoreClient } from "../utils";
import { Transaction, MerkleProof, BlockHeader } from "../types";

export function encodeBtcAddress(address: BitcoinAddress, network: bitcoinjs.Network): string {
    let btcAddress: string | undefined;
    try {
        if (address.isP2pkh) {
            const result = bitcoinjs.payments.p2pkh({
                hash: Buffer.from(address.asP2pkh.buffer),
                network,
            });
            btcAddress = result.address;
        } else if (address.isP2sh) {
            const result = bitcoinjs.payments.p2sh({
                hash: Buffer.from(address.asP2sh.buffer),
                network,
            });
            btcAddress = result.address;
        } else if (address.isP2wsHv0) {
            const result = bitcoinjs.payments.p2wsh({
                hash: Buffer.from(address.asP2wsHv0.buffer),
                network,
            });
            btcAddress = result.address;
        } else if (address.isP2wpkHv0) {
            const result = bitcoinjs.payments.p2wpkh({
                hash: Buffer.from(address.asP2wpkHv0.buffer),
                network,
            });
            btcAddress = result.address;
        } else {
            throw new Error("Invalid address format");
        }
    } catch (err) {
        throw new Error(`Error encoding BTC address ${address}: ${err}`);
    }

    if (btcAddress) return btcAddress;
    throw new Error("Unable to encode address");
}

interface Payable {
    hash?: Buffer;
    address?: string;
}

function decode<P extends Payable, O>(p: P, f: (payment: P, options?: O) => P): string | undefined {
    try {
        const pay = f(p);
        return pay.hash ? "0x" + pay.hash.toString("hex") : "";
    } catch (err) {
        return undefined;
    }
}

export function btcAddressFromParams(
    registry: TypeRegistry,
    params: { p2pkh: H160 | string } | { p2sh: H160 | string } | { p2wpkhv0: H160 | string }
): BitcoinAddress {
    registry.register;
    return registry.createType<BitcoinAddress>("BitcoinAddress", {
        ...params,
    });
}

export function decodeBtcAddress(
    address: string,
    network: bitcoinjs.Network
): { p2pkh: string } | { p2sh: string } | { p2wpkhv0: string } | { p2wshv0: string } {
    const p2pkh = decode({ address, network }, bitcoinjs.payments.p2pkh);
    if (p2pkh) return { p2pkh };

    const p2sh = decode({ address, network }, bitcoinjs.payments.p2sh);
    if (p2sh) return { p2sh };

    const p2wpkhv0 = decode({ address, network }, bitcoinjs.payments.p2wpkh);
    if (p2wpkhv0) return { p2wpkhv0 };

    const p2wshv0 = decode({ address, network }, bitcoinjs.payments.p2wsh);
    if (p2wshv0) return { p2wshv0 };

    throw new Error("Unable to decode address");
}
export function qwe() {
    console.log("qwe");
}

export async function getTxProof(
    electrsAPI: ElectrsAPI,
    btcTxId: string
): Promise<{
    merkleProof: MerkleProof;
    transaction: Transaction;
    lengthBound: number;
}> {
    const [proof, tx] = await electrsAPI.getParsedExecutionParameters(btcTxId);
    console.log(proof.blockHeader.toString());
    console.log(JSON.stringify(proof.blockHeader));
    return {
        merkleProof: {
            blockHeader: {
                merkleRoot: proof.blockHeader.merkleRoot!,
                target: bitcoinjs.Block.calculateTarget(proof.blockHeader.bits),
                timestamp: proof.blockHeader.timestamp,
                version: proof.blockHeader.version,
                hash_: proof.blockHeader.getHash(),
                hashPrevBlock: proof.blockHeader.prevHash!,
                nonce: proof.blockHeader.nonce,
            },
            flagBits: proof.flagBits,
            transactionsCount: proof.transactionsCount,
            hashes: proof.hashes,
        },
        transaction: {
            version: tx.version,
            inputs: tx.ins.map(txIn => {
                return {
                    source: 'Coinbase',
                    script: txIn.script,
                    sequence: txIn.sequence,
                    witness: txIn.witness,
                };
            }),
            outputs: tx.outs.map(txOut => {
                return {
                    value: txOut.value,
                    script: {
                        bytes: txOut.script,
                    }
                };
            }),
            lockAt: 'BlockHeight',
        },
        lengthBound: tx.byteLength(),
    };
}

export async function waitForBlockRelaying(
    btcRelayAPI: BTCRelayAPI,
    blockHash: string,
    sleepMs = SLEEP_TIME_MS
): Promise<void> {
    while (!(await btcRelayAPI.isBlockInRelay(blockHash))) {
        console.log(`Blockhash ${blockHash} not yet relayed...`);
        await sleep(sleepMs);
    }
}

export async function waitForBlockFinalization(
    bitcoinCoreClient: BitcoinCoreClient,
    btcRelayAPI: BTCRelayAPI
): Promise<void> {
    const bestBlockHash = addHexPrefix(reverseEndiannessHex(await bitcoinCoreClient.getBestBlockHash()));
    // wait for block to be relayed
    await waitForBlockRelaying(btcRelayAPI, bestBlockHash);
}
