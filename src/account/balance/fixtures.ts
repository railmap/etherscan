import { type BaseAddressParamType, TagValue } from "etherscan/types";
import type { BalanceParams } from "./types";
import { baseParamsFixture } from "etherscan/fixtures";

/**
 * Base fixture for BalanceParams.
 * @param {BaseAddressParamType} address - An object containing a single Ethereum address.
 * @returns {BalanceParams} A `BalanceParams` object with the Ethereum address, base parameters, and the latest tag value.
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
