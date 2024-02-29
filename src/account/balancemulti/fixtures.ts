import type { BalanceMultiParams } from "./types";
import { baseParamsFixture } from "etherscan/fixtures";
import { type BaseAddressesParamType, TagValue } from "etherscan/types/param";

/**
 * Base fixture for BalanceMultiParams.
 * @param {BaseAddressesParamType} addresses - An object containing an array of Ethereum addresses.
 * @returns {BalanceMultiParams} A `BalanceMultiParams` object with the Ethereum addresses, base parameters, and the latest tag value.
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
