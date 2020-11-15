import { PolkaBTC, RedeemRequest, Vault, DOT, H256Le } from "../../interfaces/default";
import { AddressOrPair } from "@polkadot/api/submittable/types";
import { AccountId, Hash, BlockNumber, H160, H256 } from "@polkadot/types/interfaces";
import { GenericAccountId } from "@polkadot/types/generic";
import { Bytes, TypeRegistry, u32 } from "@polkadot/types";
import BN from "bn.js";
import { U8aFixed } from "@polkadot/types/codec";
import { RedeemAPI } from "../../apis/redeem";

export type RequestResult = { hash: Hash; vault: Vault };

export class MockRedeemAPI implements RedeemAPI {
    execute(_redeemId: H256, _txId: H256Le, _txBlockHeight: u32, _merkleProof: Bytes, _rawTx: Bytes): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    cancel(_redeemId: H256, _reimburse?: boolean): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async request(_amount: PolkaBTC, _btcAddress: string, _vaultId?: AccountId): Promise<RequestResult> {
        return Promise.resolve({ hash: <Hash>{}, vault: <Vault>{} });
    }

    async list(): Promise<RedeemRequest[]> {
        const registry = new TypeRegistry();
        const decodedAccountId = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d";

        return Promise.resolve([
            <RedeemRequest>{
                vault: new GenericAccountId(registry, decodedAccountId),
                opentime: new BN(10908) as BlockNumber,
                amount_polka_btc: new BN(4141) as PolkaBTC,
                amount_btc: new BN(4141) as PolkaBTC,
                amount_dot: new BN(7090) as DOT,
                premium_dot: new BN(140) as DOT,
                redeemer: new GenericAccountId(registry, decodedAccountId),
                btc_address: new U8aFixed(registry, "343242ddsadsadsa") as H160,
            },
            <RedeemRequest>{
                vault: new GenericAccountId(registry, decodedAccountId),
                opentime: new BN(11208) as BlockNumber,
                amount_polka_btc: new BN(400) as PolkaBTC,
                amount_btc: new BN(411) as PolkaBTC,
                amount_dot: new BN(709) as DOT,
                premium_dot: new BN(10) as DOT,
                redeemer: new GenericAccountId(registry, decodedAccountId),
                btc_address: new U8aFixed(registry, "321321321321321") as H160,
            },
        ]);
    }

    async mapForUser(_account: AccountId): Promise<Map<H256, RedeemRequest>> {
        return Promise.resolve(new Map<H256, RedeemRequest>());
    }

    getPagedIterator(_perPage: number): AsyncGenerator<RedeemRequest[]> {
        return {} as AsyncGenerator<RedeemRequest[]>;
    }

    async getRequestById(_redeemId: string | Uint8Array | H256): Promise<RedeemRequest> {
        const registry = new TypeRegistry();
        const decodedAccountId = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d";

        return <RedeemRequest>{
            vault: new GenericAccountId(registry, decodedAccountId),
            opentime: new BN(11208) as BlockNumber,
            amount_polka_btc: new BN(400) as PolkaBTC,
            amount_btc: new BN(411) as PolkaBTC,
            amount_dot: new BN(709) as DOT,
            premium_dot: new BN(10) as DOT,
            redeemer: new GenericAccountId(registry, decodedAccountId),
            btc_address: new U8aFixed(registry, "321321321321321") as H160,
        };
    }

    setAccount(_account?: AddressOrPair): void {
        return;
    }

    subscribeToRedeemExpiry(_callback: (requestRedeemId: string) => void): Promise<() => void> {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return Promise.resolve(() => {});
    }
}
