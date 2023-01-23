import { ApiPromise } from "@polkadot/api";
import { APPROX_BLOCK_TIME_MS } from "test/utils/helpers";

/**
 * Get number of block that will added in amount of seconds from now.
 *
 * @note Based on approximate block time of 12 seconds.
 * @param api Polkadot ApiPromise object.
 * @param secondsFromNow Amount of seconds in the future.
 * @returns Number of block added in future.
 */
const getFutureBlockNumber = async (api: ApiPromise, secondsFromNow: number): Promise<number> => {
    const currentBlock = await api.query.system.number();
    const differenceInBlocks = Math.round(secondsFromNow / APPROX_BLOCK_TIME_MS);

    return currentBlock.toNumber() + differenceInBlocks;
};

export { getFutureBlockNumber };
