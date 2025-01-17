import { MonetaryAmount } from "@interlay/monetary-js";
import { ApiPromise } from "@polkadot/api";
import { AccountId } from "@polkadot/types/interfaces";
import BN from "bn.js";
import Big from "big.js";

import { decodeFixedPointType, newCurrencyId, newMonetaryAmount, toVoting, ATOMIC_UNIT } from "../utils";
import { GovernanceCurrency, parseEscrowLockedBalance, StakedBalance, VotingCurrency } from "../types";
import { SystemAPI } from "./system";
import { TransactionAPI } from ".";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";

/**
 * @category BTC Bridge
 */
export interface EscrowAPI {
    /**
     * @param accountId Account whose voting balance to fetch
     * @param blockNumber The number of block to query state at
     * @returns The voting balance
     * @remarks Logic is duplicated from Escrow pallet in the parachain
     */
    votingBalance(accountId: AccountId, blockNumber?: number): Promise<MonetaryAmount<GovernanceCurrency>>;
    /**
     * @param blockNumber The number of block to query state at
     * @returns The voting balance
     * @remarks
     * - Expect poor performance from this function as more blocks are appended to the parachain.
     * It is not recommended to call this directly, but rather to query through the indexer (currently `interbtc-index`).
     * - Logic is duplicated from Escrow pallet in the parachain
     */
    totalVotingSupply(blockNumber?: number): Promise<MonetaryAmount<GovernanceCurrency>>;
    /**
     * Build a create lock extrinsic without sending it.
     *
     * @param amount Governance token amount to lock (e.g. KINT or INTR)
     * @param unlockHeight Block number to lock until
     * @returns A create lock submittable extrinsic.
     */
    buildCreateLockExtrinsic(
        amount: MonetaryAmount<GovernanceCurrency>,
        unlockHeight: number
    ): SubmittableExtrinsic<"promise", ISubmittableResult>;
    /**
     * @param amount Governance token amount to lock (e.g. KINT or INTR)
     * @param unlockHeight Block number to lock until
     * @remarks The amount can't be less than the max period (`getMaxPeriod` getter) to prevent rounding errors
     */
    createLock(amount: MonetaryAmount<GovernanceCurrency>, unlockHeight: number): Promise<void>;
    /**
     * @param accountId ID of the user whose stake to fetch
     * @returns The staked amount and end block
     */
    getStakedBalance(accountId: AccountId): Promise<StakedBalance>;
    /**
     * @returns The total amount of locked governance tokens
     * @remarks
     * - Expect poor performance from this function as more blocks are appended to the parachain.
     * It is not recommended to call this directly, but rather to query through interbtc-squid once implemented.
     */
    getTotalStakedBalance(): Promise<MonetaryAmount<GovernanceCurrency>>;
    /**
     * Build a withdraw extrinsic without sending it.
     *
     * @remarks Withdraws all locked governance currency
     * @returns A withdraw submittable extrinsic.
     */
    buildWithdrawExtrinsic(): SubmittableExtrinsic<"promise", ISubmittableResult>;
    /**
     * @remarks Withdraws all locked governance currency
     */
    withdraw(): Promise<void>;
    /**
     * @returns All future times are rounded by this.
     */
    getSpan(): Promise<BN>;
    /**
     * @returns The maximum time for locks.
     */
    getMaxPeriod(): Promise<BN>;
    /**
     * Build a withdraw rewards extrinsic without sending it.
     *
     * @remarks Withdraws stake-to-vote rewards
     * @returns A withdraw rewards submittable extrinsic.
     */
    buildWithdrawRewardsExtrinsic(): SubmittableExtrinsic<"promise", ISubmittableResult>;
    /**
     * @remarks Withdraws stake-to-vote rewards
     */
    withdrawRewards(): Promise<void>;
    /**
     * Build an increase amount extrinsic without sending it.
     *
     * @param amount Governance token amount to lock (e.g. KINT or INTR)
     * @returns An increase amount submittable extrinsic.
     */
    buildIncreaseAmountExtrinsic(
        amount: MonetaryAmount<GovernanceCurrency>
    ): SubmittableExtrinsic<"promise", ISubmittableResult>;
    /**
     * @param amount Governance token amount to lock (e.g. KINT or INTR)
     */
    increaseAmount(amount: MonetaryAmount<GovernanceCurrency>): Promise<void>;
    /**
     * Build an increase unlock height extrinsic without sending it.
     *
     * @param unlockHeight The unlock height to increase by.
     * @returns An increase unlock height submittable extrinsic.
     */
    buildIncreaseUnlockHeightExtrinsic(unlockHeight: number): SubmittableExtrinsic<"promise", ISubmittableResult>;
    /**
     * @param unlockHeight The unlock height to increase by.
     */
    increaseUnlockHeight(unlockHeight: number): Promise<void>;
    /**
     * @param accountId User account ID
     * @returns The rewards that can be withdrawn by the account
     * @remarks Implements https://spec.interlay.io/spec/reward.html#computereward
     */
    getRewards(accountId: AccountId): Promise<MonetaryAmount<GovernanceCurrency>>;
    /**
     * @param accountId User account ID
     * @param amountToLock New amount to add to the current stake
     * @param blockLockTimeExtension Amount of blocks the stake will be locked for
     * @returns The estimated reward, as amount and percentage (APY)
     */
    getRewardEstimate(
        accountId: AccountId,
        amountToLock?: MonetaryAmount<GovernanceCurrency>,
        blockLockTimeExtension?: number
    ): Promise<{
        amount: MonetaryAmount<GovernanceCurrency>;
        apy: Big;
    }>;
}

export class DefaultEscrowAPI implements EscrowAPI {
    constructor(
        private api: ApiPromise,
        private governanceCurrency: GovernanceCurrency,
        private systemAPI: SystemAPI,
        private transactionAPI: TransactionAPI
    ) {}

    buildCreateLockExtrinsic(
        amount: MonetaryAmount<GovernanceCurrency>,
        unlockHeight: number
    ): SubmittableExtrinsic<"promise", ISubmittableResult> {
        return this.api.tx.escrow.createLock(amount.toString(true), unlockHeight);
    }

    async createLock(amount: MonetaryAmount<GovernanceCurrency>, unlockHeight: number): Promise<void> {
        const tx = this.buildCreateLockExtrinsic(amount, unlockHeight);
        await this.transactionAPI.sendLogged(tx, this.api.events.escrow.Deposit, true);
    }

    buildWithdrawExtrinsic(): SubmittableExtrinsic<"promise", ISubmittableResult> {
        return this.api.tx.escrow.withdraw();
    }

    async withdraw(): Promise<void> {
        const tx = this.buildWithdrawExtrinsic();
        await this.transactionAPI.sendLogged(tx, this.api.events.escrow.Withdraw, true);
    }

    buildWithdrawRewardsExtrinsic(): SubmittableExtrinsic<"promise", ISubmittableResult> {
        return this.api.tx.escrowAnnuity.withdrawRewards();
    }

    async withdrawRewards(): Promise<void> {
        const tx = this.buildWithdrawRewardsExtrinsic();
        await this.transactionAPI.sendLogged(tx, this.api.events.escrowRewards.WithdrawReward, true);
    }

    buildIncreaseAmountExtrinsic(
        amount: MonetaryAmount<GovernanceCurrency>
    ): SubmittableExtrinsic<"promise", ISubmittableResult> {
        return this.api.tx.escrow.increaseAmount(amount.toString(true));
    }

    async increaseAmount(amount: MonetaryAmount<GovernanceCurrency>): Promise<void> {
        const tx = this.buildIncreaseAmountExtrinsic(amount);
        await this.transactionAPI.sendLogged(tx, this.api.events.escrow.Deposit, true);
    }

    buildIncreaseUnlockHeightExtrinsic(unlockHeight: number): SubmittableExtrinsic<"promise", ISubmittableResult> {
        return this.api.tx.escrow.increaseUnlockHeight(unlockHeight);
    }

    async increaseUnlockHeight(unlockHeight: number): Promise<void> {
        const tx = this.buildIncreaseUnlockHeightExtrinsic(unlockHeight);
        await this.transactionAPI.sendLogged(tx, this.api.events.escrow.Deposit, true);
    }

    async getRewards(accountId: AccountId): Promise<MonetaryAmount<GovernanceCurrency>> {
        const reward = await this.api.rpc.reward.computeEscrowReward(
            accountId,
            newCurrencyId(this.api, this.governanceCurrency)
        );
        return newMonetaryAmount(reward.amount.toString(), this.governanceCurrency);
    }

    async getRewardEstimate(
        accountId: AccountId,
        amountToLock?: MonetaryAmount<GovernanceCurrency>,
        blockLockTimeExtension?: number
    ): Promise<{
        amount: MonetaryAmount<GovernanceCurrency>;
        apy: Big;
    }> {
        const stakedBalance = await this.getStakedBalance(accountId);

        let atomicStakedAmount: Big = stakedBalance.amount.toBig(ATOMIC_UNIT);

        let nullableAmountToCheck: bigint | null = null;
        if (amountToLock && !amountToLock.isZero()) {
            atomicStakedAmount = atomicStakedAmount.add(amountToLock.toBig(ATOMIC_UNIT));
            // get atomic amount to lock as bigint for the rpc api
            nullableAmountToCheck = BigInt(amountToLock.toBig(ATOMIC_UNIT).toString());
        }

        let nullableBlockToEnd: bigint | null = null;
        if (blockLockTimeExtension) {
            nullableBlockToEnd = BigInt(blockLockTimeExtension);
        }

        // if there is no staked amount and no added amount to be checked, return 0
        if (atomicStakedAmount.eq(Big(0))) {
            return {
                amount: newMonetaryAmount(0, this.governanceCurrency),
                apy: Big(0),
            };
        }

        const rawRewardRate = await this.api.rpc.reward.estimateEscrowRewardRate(
            accountId,
            nullableAmountToCheck,
            nullableBlockToEnd
        );

        // annual reward rate
        const rewardRate = decodeFixedPointType(rawRewardRate);
        // reward amount
        const rewardAmount = newMonetaryAmount(atomicStakedAmount, this.governanceCurrency).mul(rewardRate);

        return {
            amount: rewardAmount,
            apy: rewardRate.mul(100),
        };
    }

    async getEscrowStake(accountId: AccountId): Promise<Big> {
        const rawStake = await this.api.query.escrowRewards.stake([null, accountId]);
        return decodeFixedPointType(rawStake);
    }

    async getEscrowTotalStake(): Promise<Big> {
        const rawTotalStake = await this.api.query.escrowRewards.totalStake(null);
        return decodeFixedPointType(rawTotalStake);
    }

    async getRewardTally(accountId: AccountId): Promise<Big> {
        const governanceCurrencyId = newCurrencyId(this.api, this.governanceCurrency);
        const rawRewardTally = await this.api.query.escrowRewards.rewardTally(governanceCurrencyId, [null, accountId]);
        return decodeFixedPointType(rawRewardTally);
    }

    async getRewardPerToken(): Promise<Big> {
        const governanceCurrencyId = newCurrencyId(this.api, this.governanceCurrency);
        const rawRewardPerToken = await this.api.query.escrowRewards.rewardPerToken(governanceCurrencyId, null);
        return decodeFixedPointType(rawRewardPerToken);
    }

    async getRewardPerBlock(): Promise<MonetaryAmount<GovernanceCurrency>> {
        const rawRewardPerBlock = await this.api.query.escrowAnnuity.rewardPerBlock();
        return newMonetaryAmount(rawRewardPerBlock.toString(), this.governanceCurrency);
    }

    async getStakedBalance(accountId: AccountId): Promise<StakedBalance> {
        const rawStakedBalance = await this.api.query.escrow.locked(accountId);
        return parseEscrowLockedBalance(this.governanceCurrency, rawStakedBalance);
    }

    async getTotalStakedBalance(): Promise<MonetaryAmount<GovernanceCurrency>> {
        const govCcy = this.governanceCurrency;
        const rawStakedBalances = await this.api.query.escrow.locked.entries();

        const totalCurrentAmount = rawStakedBalances
            .map(([_, rawStakedBalance]) => parseEscrowLockedBalance(govCcy, rawStakedBalance).amount)
            .reduce((acc, amount) => acc.add(amount), newMonetaryAmount(0, govCcy));

        return totalCurrentAmount;
    }

    async votingBalance(accountId: AccountId, blockNumber?: number): Promise<MonetaryAmount<GovernanceCurrency>> {
        const maybeBlockNumber = blockNumber === undefined ? null : blockNumber.toString();
        const balance = await this.api.rpc.escrow.balanceAt(accountId.toString(), maybeBlockNumber);
        return newMonetaryAmount(balance.amount.toString(), toVoting(this.governanceCurrency));
    }

    async totalVotingSupply(blockNumber?: number): Promise<MonetaryAmount<VotingCurrency>> {
        const maybeBlockNumber = blockNumber === undefined ? null : blockNumber.toString();
        const supply = await this.api.rpc.escrow.totalSupply(maybeBlockNumber);
        return newMonetaryAmount(supply.amount.toString(), toVoting(this.governanceCurrency));
    }

    async getSpan(): Promise<BN> {
        return this.api.consts.escrow.span.toBn();
    }

    async getMaxPeriod(): Promise<BN> {
        return this.api.consts.escrow.maxPeriod.toBn();
    }
}
