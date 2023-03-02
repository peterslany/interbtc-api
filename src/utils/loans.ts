import { Bitcoin, MonetaryAmount } from "@interlay/monetary-js";
import Big from "big.js";
import { newMonetaryAmount } from "..";
import { LoanAction, CurrencyExt, LoanAsset, LoanPosition, TickerToData } from "../types";

const calculateTotalBorrowedBtcChange = (
    action: LoanAction,
    currentTotalBorrowedBtc: MonetaryAmount<Bitcoin>,
    actionAmountBtc: MonetaryAmount<Bitcoin>
): MonetaryAmount<Bitcoin> => {
    switch (action) {
        case "borrow":
            return currentTotalBorrowedBtc.add(actionAmountBtc);
        case "repay":
            return currentTotalBorrowedBtc.sub(actionAmountBtc);
        default:
            return currentTotalBorrowedBtc;
    }
};

const calculateCollateralAmountBtc = (
    action: LoanAction,
    currentCollateralAmountBtc: MonetaryAmount<Bitcoin>,
    actionAmountBtc: MonetaryAmount<Bitcoin>
): MonetaryAmount<Bitcoin> => {
    switch (action) {
        case "lend":
            return currentCollateralAmountBtc.add(actionAmountBtc);
        case "withdraw":
            return currentCollateralAmountBtc.sub(actionAmountBtc);
        default:
            return currentCollateralAmountBtc;
    }
};

const adjustToThreshold = (amount: MonetaryAmount<CurrencyExt>, threshold: Big): MonetaryAmount<CurrencyExt> =>
    amount.mul(threshold);

const calculateBorrowLimit = (
    totalBorrowedAmount: MonetaryAmount<CurrencyExt>,
    totalCollateralThresholdAdjustedAmount: MonetaryAmount<CurrencyExt>
): MonetaryAmount<CurrencyExt> => totalCollateralThresholdAdjustedAmount.sub(totalBorrowedAmount).max(0);

const getTotalAmountBtc = (
    positions: Array<LoanPosition>,
    loanAssets: TickerToData<LoanAsset>
): MonetaryAmount<Bitcoin> =>
    positions.reduce((total, { amount }) => {
        const { exchangeRate } = loanAssets[amount.currency.ticker];
        const amountBtc = exchangeRate.toBase(amount);
        return total.add(amountBtc);
    }, newMonetaryAmount(0, Bitcoin));

const calculateThreshold = (
    collateralAmount: MonetaryAmount<CurrencyExt>,
    thresholdAdjustedCollateralAmount: MonetaryAmount<CurrencyExt>
): Big => {
    if (collateralAmount.toBig().eq(0)) {
        return Big(0);
    }
    return thresholdAdjustedCollateralAmount.toBig().div(collateralAmount.toBig());
};

const calculateLtv = (
    collateralAmount: MonetaryAmount<CurrencyExt>,
    borrowedAmount: MonetaryAmount<CurrencyExt>
): Big => {
    if (collateralAmount.toBig().eq(0)) {
        return Big(0);
    }
    return borrowedAmount.toBig().div(collateralAmount.toBig());
};

const calculateBorrowLimitBtcChangeFactory =
    (
        loanAssets: TickerToData<LoanAsset>,
        totalBorrowedBtc: MonetaryAmount<Bitcoin>,
        totalCollateralThresholdAdjustedCollateralBtc: MonetaryAmount<Bitcoin>
    ) =>
    (action: LoanAction, amount: MonetaryAmount<CurrencyExt>): MonetaryAmount<Bitcoin> => {
        const { collateralThreshold, exchangeRate } = loanAssets[amount.currency.ticker];

        const amountBtc = exchangeRate.toBase(amount);
        const collateralThresholdAdjustedAmountBtc = adjustToThreshold(amount, collateralThreshold);

        const newTotalBorrowedBtc = calculateTotalBorrowedBtcChange(action, totalBorrowedBtc, amountBtc);
        const newTotalCollateralThresholdAdjustedCollateralBtc = calculateCollateralAmountBtc(
            action,
            totalCollateralThresholdAdjustedCollateralBtc,
            collateralThresholdAdjustedAmountBtc
        );

        return calculateBorrowLimit(newTotalBorrowedBtc, newTotalCollateralThresholdAdjustedCollateralBtc);
    };

const calculateLtvAndThresholdsChangeFactory =
    (
        loanAssets: TickerToData<LoanAsset>,
        totalBorrowedBtc: MonetaryAmount<Bitcoin>,
        totalCollateralBtc: MonetaryAmount<Bitcoin>,
        totalCollateralThresholdAdjustedCollateralBtc: MonetaryAmount<Bitcoin>,
        totalLiquidationThresholdAdjustedCollateralBtc: MonetaryAmount<Bitcoin>
    ) =>
    (action: LoanAction, amount: MonetaryAmount<CurrencyExt>) => {
        const { collateralThreshold, liquidationThreshold, exchangeRate } = loanAssets[amount.currency.ticker];

        const amountBtc = exchangeRate.toBase(amount);
        const collateralThresholdAdjustedAmountBtc = adjustToThreshold(amount, collateralThreshold);
        const liquidationThresholdAdjustedAmountBtc = adjustToThreshold(amount, liquidationThreshold);

        const newTotalBorrowedBtc = calculateTotalBorrowedBtcChange(action, totalBorrowedBtc, amountBtc);
        const newTotalCollateralBtc = calculateCollateralAmountBtc(action, totalCollateralBtc, amountBtc);
        const newTotalCollateralThresholdAdjustedCollateralBtc = calculateCollateralAmountBtc(
            action,
            totalCollateralThresholdAdjustedCollateralBtc,
            collateralThresholdAdjustedAmountBtc
        );
        const newTotalLiquidationThresholdAdjustedCollateralBtc = calculateCollateralAmountBtc(
            action,
            totalLiquidationThresholdAdjustedCollateralBtc,
            liquidationThresholdAdjustedAmountBtc
        );

        const ltv = calculateLtv(newTotalCollateralBtc, newTotalBorrowedBtc);
        const collateralThresholdWeightedAverage = calculateThreshold(
            newTotalCollateralBtc,
            newTotalCollateralThresholdAdjustedCollateralBtc
        );
        const liquidationThresholdWeightedAverage = calculateThreshold(
            newTotalCollateralBtc,
            newTotalLiquidationThresholdAdjustedCollateralBtc
        );

        return {
            ltv,
            collateralThresholdWeightedAverage,
            liquidationThresholdWeightedAverage,
        };
    };

export {
    calculateBorrowLimit,
    adjustToThreshold,
    calculateCollateralAmountBtc,
    calculateTotalBorrowedBtcChange,
    getTotalAmountBtc,
    calculateLtv,
    calculateThreshold,
    calculateBorrowLimitBtcChangeFactory,
    calculateLtvAndThresholdsChangeFactory,
};