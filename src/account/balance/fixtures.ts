import { type BaseAddressParamType, TagValue } from "etherscan/types";
import type { BalanceParams } from "./types";
import { baseParamsFixture } from "etherscan/fixtures";

/**
 * Base fixture for BalanceParams.
 * @returns BalanceParams object populated with environment vars.
 */
export const balanceParamsFixture = (
  address: BaseAddressParamType,
): BalanceParams => {
  return {
    ...baseParamsFixture(),
    address: address.address,
    tag: TagValue.Latest,
  };
};
