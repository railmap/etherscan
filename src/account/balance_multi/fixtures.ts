import type { BalanceMultiParams } from "./types";
import { baseParamsFixture } from "etherscan/fixtures";
import { TagValue } from "etherscan/types/param";
/**
 * Base fixture for BalanceParams.
 * @returns BalanceParams object populated with environment vars.
 */
export const balanceMultiParamsFixture = (): BalanceMultiParams => {
  const { apiKey } = baseParamsFixture();
  return {
    address: process.env.SEPOLIA_ADDRESSES_TO_CHECK?.split(",") ?? "",
    apiKey: apiKey ?? "",
    tag: TagValue.Latest,
  };
};
