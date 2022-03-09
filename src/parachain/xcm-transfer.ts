import { ApiPromise } from "@polkadot/api";
import { Currency, MonetaryAmount } from "@interlay/monetary-js";

import { newCurrencyId } from "../utils";
import { CurrencyUnit, tickerToCurrencyIdLiteral } from "../types";
import { TransactionAPI } from "./transaction";

/**
 * @category BTC Bridge
 */
export interface XCMTransferAPI {
    /**
    * @param accountId An account ID string
    * @param amount The amount to transfer, as a `Monetary.js` object
    */
    transfer<U extends CurrencyUnit>(accountId: string, amount: MonetaryAmount<Currency<U>, U>): Promise<void>;
}

export class DefaultXCMTransferAPI implements XCMTransferAPI {
    constructor(private api: ApiPromise, private transactionAPI: TransactionAPI) {}

    async transfer<U extends CurrencyUnit>(accountId: string, amount: MonetaryAmount<Currency<U>, U>): Promise<void> {
        const amountAtomicUnit = this.api.createType("Balance", amount.toString());
        const currencyIdLiteral = tickerToCurrencyIdLiteral(amount.currency.ticker);

        // TODO: fix this nesting        
        const dest = this.api.createType("XcmVersionedMultiLocation", {
            v1: this.api.createType("XcmV1MultiLocation", {
                parents: 1,
                interior: this.api.createType("XcmV1MultilocationJunctions", {
                    x2: [
                        this.api.createType("XcmV1Junction", { 
                            parachain: 3000 
                        }), this.api.createType("XcmV1Junction", { 
                            accountId32: {
                                network: this.api.createType("XcmV0JunctionNetworkId", { any: true }),
                                id: accountId
                            }
                        })]
                })
            })
        });

        const transferTransaction = this.api.tx.xTokens.transfer(
            dest,
            newCurrencyId(this.api, currencyIdLiteral),
            amountAtomicUnit
        );

        await this.transactionAPI.sendLogged(transferTransaction, this.api.events.xTokens.Transfer, true);
    }
}