import type { BalanceMultiParams } from "./types";
import { baseParamsFixture } from "etherscan/fixtures";
import { type BaseAddressesParamType, TagValue } from "etherscan/types/param";

/**
 * Base fixture for BalanceMultiParams.
 * @returns BalanceMultiParams object populated with environment vars.
 */
export const balanceMultiParamsFixture = (
  addresses: BaseAddressesParamType,
): BalanceMultiParams => {
  return {
    ...baseParamsFixture(),
    address: addresses.address,
    tag: TagValue.Latest,
  };
};
