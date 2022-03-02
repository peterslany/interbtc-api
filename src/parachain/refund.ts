import { ApiPromise } from "@polkadot/api";
import { H256 } from "@polkadot/types/interfaces";
import { Network } from "bitcoinjs-lib";

import { ensureHashEncoded, getTxProof, parseRefundRequest } from "../utils";
import { ElectrsAPI } from "../external";
import { TransactionAPI } from "./transaction";
import { RefundRequestExt, WrappedCurrency } from "../types";

/**
 * @category BTC Bridge
 */
export interface RefundAPI {
    /**
     * Execute a refund request
     * @remarks If `txId` is not set, the `merkleProof` and `rawTx` must both be set.
     *
     * @param requestId The ID generated by the refund request transaction
     * @param btcTxId Bitcoin transaction ID
     */
    execute(requestId: string, btcTxId: string): Promise<void>;
    /**
     * @returns An array containing the refund requests
     */
    list(): Promise<RefundRequestExt[]>;
    /**
     * @param issueId The ID of the refund to fetch
     * @returns A refund object
     */
    getRequestById(refundId: H256): Promise<RefundRequestExt>;
    /**
     * @param issueId The ID of the refund request to fetch
     * @returns A refund request object
     */
    getRequestByIssueId(issueId: string): Promise<RefundRequestExt>;
}

export class DefaultRefundAPI implements RefundAPI {
    constructor(
        private api: ApiPromise,
        private btcNetwork: Network,
        private electrsAPI: ElectrsAPI,
        private wrappedCurrency: WrappedCurrency,
        private transactionAPI: TransactionAPI
    ) {}

    async execute(requestId: string, btcTxId: string): Promise<void> {
        const parsedRequestId = ensureHashEncoded(this.api, requestId);
        const txInclusionDetails = await getTxProof(this.electrsAPI, btcTxId);
        const requestTx = this.api.tx.refund.executeRefund(parsedRequestId, txInclusionDetails.merkleProof, txInclusionDetails.rawTx);
        await this.transactionAPI.sendLogged(requestTx, this.api.events.refund.ExecuteRefund);
    }

    async list(): Promise<RefundRequestExt[]> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const refundRequests = await this.api.query.refund.refundRequests.entriesAt(head);
        return refundRequests
            .filter(([_, req]) => req.isSome.valueOf)
            .map((v) => parseRefundRequest(v[1].unwrap(), this.btcNetwork, this.wrappedCurrency));
    }

    async getRequestById(refundId: H256): Promise<RefundRequestExt> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        try {
            return parseRefundRequest(
                (await this.api.query.refund.refundRequests.at(head, refundId)).unwrap(),
                this.btcNetwork,
                this.wrappedCurrency
            );
        } catch (error) {
            return Promise.reject(new Error(`Error fetching refund request by issue id: ${error}`));
        }
    }

    async getRequestByIssueId(issueId: string): Promise<RefundRequestExt> {
        const list = await this.list();
        const request = list.find((request) => request.issueId === issueId);
        if (!request) {
            return Promise.reject(new Error(`No refund request fund for issue ID ${issueId}`));
        }
        return request;
    }
}
