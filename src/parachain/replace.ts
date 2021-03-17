import { ApiPromise } from "@polkadot/api";
import { PolkaBTC, ReplaceRequest } from "../interfaces/default";
import { BlockNumber } from "@polkadot/types/interfaces/runtime";
import { Hash } from "@polkadot/types/interfaces";
import { StorageKey } from "@polkadot/types/primitive/StorageKey";
import { Network } from "bitcoinjs-lib";
import { ACCOUNT_NOT_SET_ERROR_MESSAGE, encodeBtcAddress, Transaction } from "../utils";
import { H256 } from "@polkadot/types/interfaces";
import { AddressOrPair } from "@polkadot/api/submittable/types";
import { DefaultFeeAPI, FeeAPI } from "./fee";
import Big from "big.js";
import { EventRecord } from "@polkadot/types/interfaces/system";

export interface ReplaceRequestExt extends Omit<ReplaceRequest, "btc_address" | "new_vault"> {
    // network encoded btc address
    btc_address: string;
    new_vault: string;
}

export function encodeReplaceRequest(req: ReplaceRequest, network: Network): ReplaceRequestExt {
    let displayedBtcAddress = "Pending...";
    let displayedNewVaultAddress = "Pending...";
    if (req.btc_address.isSome) {
        displayedBtcAddress = encodeBtcAddress(req.btc_address.unwrap(), network);
    }
    if (req.new_vault.isSome) {
        displayedNewVaultAddress = req.new_vault.unwrap().toHuman();
    }
    return ({
        ...req,
        btc_address: displayedBtcAddress,
        new_vault: displayedNewVaultAddress,
    } as unknown) as ReplaceRequestExt;
}

/**
 * @category PolkaBTC Bridge
 */
export interface ReplaceAPI {
    /**
     * @returns The minimum amount of btc that is accepted for replace requests; any lower values would
     * risk the bitcoin client to reject the payment
     */
    getBtcDustValue(): Promise<PolkaBTC>;
    /**
     * @returns The time difference in number of blocks between when a replace request is created
     * and required completion time by a vault. The replace period has an upper limit
     * to prevent griefing of vault collateral.
     */
    getReplacePeriod(): Promise<BlockNumber>;
    /**
     * @returns An array containing the replace requests
     */
    list(): Promise<ReplaceRequestExt[]>;
    /**
     * @returns A mapping from the replace request ID to the replace request object
     */
    map(): Promise<Map<H256, ReplaceRequestExt>>;
    /**
     * @param amountSat Amount issued, in Satoshi, to have replaced by another vault
     * @returns The request id
     */
     request(amountSat: PolkaBTC): Promise<string>;
    /**
     * Set an account to use when sending transactions from this API
     * @param account Keyring account
     */
    setAccount(account: AddressOrPair): void;
    /**
     * Wihdraw a replace request
     * @param requestId The id of the replace request to withdraw (cancel)
     */
    withdraw(requestId: string): Promise<void>;
}

export class DefaultReplaceAPI implements ReplaceAPI {
    private btcNetwork: Network;
    private feeAPI: FeeAPI;
    transaction: Transaction;

    constructor(private api: ApiPromise, btcNetwork: Network, private account?: AddressOrPair) {
        this.btcNetwork = btcNetwork;
        this.feeAPI = new DefaultFeeAPI(api);
        this.transaction = new Transaction(api);
    }

    /**
     * @param events The EventRecord array returned after sending a replace request transaction
     * @returns The id associated with the replace request. If the EventRecord array does not
     * contain replace request events, the function throws an error.
     */
    private getRequestIdFromEvents(events: EventRecord[]): Hash {
        for (const { event } of events) {
            if (this.api.events.replace.RequestReplace.is(event)) {
                const hash = this.api.createType("Hash", event.data[0]);
                return hash;
            }
        }
        throw new Error("Request transaction failed");
    }

    async request(amountSat: PolkaBTC): Promise<string> {
        if (!this.account) {
            return Promise.reject(ACCOUNT_NOT_SET_ERROR_MESSAGE);
        }

        const griefingCollateralPlanck = await this.getGriefingCollateralInPlanck(amountSat);
        const requestTx = this.api.tx.replace.requestReplace(amountSat, griefingCollateralPlanck.toString());
        const result = await this.transaction.sendLogged(requestTx, this.account, this.api.events.replace.RequestReplace);
        try {
            return this.getRequestIdFromEvents(result.events).toString();
        } catch (e) {
            return Promise.reject(e.message);
        }
    }

    async withdraw(requestId: string): Promise<void> {
        if (!this.account) {
            return Promise.reject(ACCOUNT_NOT_SET_ERROR_MESSAGE);
        }

        const requestTx = this.api.tx.replace.withdrawReplace(requestId);
        await this.transaction.sendLogged(requestTx, this.account, this.api.events.replace.WithdrawReplace);
    }

    async getBtcDustValue(): Promise<PolkaBTC> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        return await this.api.query.replace.replaceBtcDustValue.at(head);
    }

    async getGriefingCollateralInPlanck(amountSat: PolkaBTC): Promise<Big> {
        const griefingCollateralRate = await this.feeAPI.getReplaceGriefingCollateralRate();
        return await this.feeAPI.getGriefingCollateralInPlanck(amountSat, griefingCollateralRate);
    }

    async getReplacePeriod(): Promise<BlockNumber> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        return await this.api.query.replace.replacePeriod.at(head);
    }

    async list(): Promise<ReplaceRequestExt[]> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const replaceRequests = await this.api.query.replace.replaceRequests.entriesAt(head);
        return replaceRequests
            .filter((v) => v[1].isSome)
            .map((v) => v[1].unwrap())
            .map((req: ReplaceRequest) => encodeReplaceRequest(req, this.btcNetwork));
    }

    private storageKeyToIdString(s: StorageKey<[H256]>): H256 {
        return s.args[0];
    }

    async map(): Promise<Map<H256, ReplaceRequestExt>> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const redeemRequests = await this.api.query.replace.replaceRequests.entriesAt(head);
        const redeemRequestMap = new Map<H256, ReplaceRequestExt>();
        redeemRequests
            .filter((v) => v[1].isSome)
            .map((v) => {
                return { id: v[0], req: v[1].unwrap() };
            })
            .forEach(({ id, req }) => {
                redeemRequestMap.set(this.storageKeyToIdString(id), encodeReplaceRequest(req, this.btcNetwork));
            });
        return redeemRequestMap;
    }

    setAccount(account: AddressOrPair): void {
        this.account = account;
    }
}