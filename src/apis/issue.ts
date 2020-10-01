import { DOT, Issue as IssueRequest, PolkaBTC, Vault, H256Le } from "../interfaces/default";
import { ApiPromise } from "@polkadot/api";
import { AddressOrPair } from "@polkadot/api/submittable/types";
import { AccountId, Hash, H256 } from "@polkadot/types/interfaces";
import { Bytes, u32 } from "@polkadot/types/primitive";
import { VaultsAPI, DefaultVaultsAPI } from "./vaults";
import { ISubmittableResult } from "@polkadot/types/types";
import { EventRecord } from "@polkadot/types/interfaces/system";
// import { SubmittableResultSubscription } from "@polkadot/api/submittable/types";
import { ApiTypes } from "@polkadot/api/types/base";
import { Observable } from "rxjs";

export declare type SubmittableResultSubscription<ApiType extends ApiTypes> =
    ApiType extends "rxjs" ? Observable<ISubmittableResult> : Promise<() => void>;

export type RequestResult = { hash: Hash; vault: Vault };

export interface IssueAPI {
    request(amount: PolkaBTC, vaultId?: AccountId, griefingCollateral?: DOT): Promise<RequestResult>;
    execute(issueId: H256, txId: H256Le, txBlockHeight: u32, merkleProof: Bytes, rawTx: Bytes): Promise<void>;
    cancel(issueId: H256): Promise<void>;
    setAccount(account?: AddressOrPair): void;
    getGriefingCollateral(): Promise<DOT>;
    list(): Promise<IssueRequest[]>;
}

export class DefaultIssueAPI implements IssueAPI {
    private vaults: VaultsAPI;
    requestHash: Hash = this.api.createType("Hash");
    events: EventRecord[] = [];

    constructor(private api: ApiPromise, private account?: AddressOrPair) {
        this.vaults = new DefaultVaultsAPI(api);
    }

    // using type `any` because `SubmittableResultSubscription<ApiType extends ApiTypes>`
    // isn't recognized by type checker
    private txCallback(unsubscribe: any, result: ISubmittableResult) {
        if (result.status.isFinalized) {
            console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
            this.requestHash = result.status.asFinalized;
            this.events = result.events;
            unsubscribe();
        }
    }

    private getIssueIdFromEvents(events: EventRecord[]): Hash {
        return this.api.createType("Hash", events[2].event.data[0]);
    }

    async request(amount: PolkaBTC, vaultId?: AccountId, griefingCollateral?: DOT): Promise<RequestResult> {
        if (!this.account) {
            throw new Error("cannot request without setting account");
        }

        let vault: Vault;
        if (vaultId) {
            vault = await this.vaults.get(vaultId);
        } else {
            vaultId = await this.vaults.selectRandomVaultIssue(amount);
            vault = await this.vaults.get(vaultId);
        }

        if (!griefingCollateral) {
            griefingCollateral = await this.getGriefingCollateral();
        }
        // When passing { nonce: -1 } to signAndSend the API will use system.accountNextIndex to determine the nonce
        const unsubscribe: any = await this.api.tx.issue
            .requestIssue(amount, vault.id, griefingCollateral)
            .signAndSend(this.account, { nonce: -1 }, (result) => this.txCallback(unsubscribe, result));
        await delay(delayMs);

        if (this.events.length == 4) {
            const hash = this.getIssueIdFromEvents(this.events);
            return { hash, vault };
        }

        throw new Error("Request transaction failed");
    }

    async execute(issueId: H256, txId: H256Le, txBlockHeight: u32, merkleProof: Bytes, rawTx: Bytes): Promise<void> {
        if (!this.account) {
            throw new Error("cannot request without setting account");
        }
        const unsubscribe: any = await this.api.tx.issue
            .executeIssue(issueId, txId, txBlockHeight, merkleProof, rawTx)
            .signAndSend(this.account, { nonce: -1 }, (result) => this.txCallback(unsubscribe, result));
        await delay(delayMs);
    }

    async cancel(issueId: H256): Promise<void> {
        if (!this.account) {
            throw new Error("cannot request without setting account");
        }
        const unsubscribe: any = await this.api.tx.issue
            .cancelIssue(issueId)
            .signAndSend(this.account, { nonce: -1 }, (result) => this.txCallback(unsubscribe, result));
        await delay(delayMs);
    }

    async list(): Promise<IssueRequest[]> {
        const issueRequests = await this.api.query.issue.issueRequests.entries();
        return issueRequests.map((v) => v[1]);
    }

    async getGriefingCollateral(): Promise<DOT> {
        return this.api.query.issue.issueGriefingCollateral();
    }

    setAccount(account?: AddressOrPair): void {
        this.account = account;
    }
}

const delayMs = 25000;

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
