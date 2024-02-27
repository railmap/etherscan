import type { BalanceMultiParams } from "./types";
import { baseParamsFixture } from "etherscan/fixtures";
import { TagValue } from "etherscan/types/param";

/**
 * Base fixture for BalanceMultiParams.
 * @returns BalanceMultiParams object populated with environment vars.
 */
export const balanceMultiParamsFixture = (): BalanceMultiParams => {
  return {
    address: process.env.SEPOLIA_ADDRESSES_TO_CHECK?.split(",") ?? [],
    tag: TagValue.Latest,
    ...baseParamsFixture(),
  };
};
