import type { BalanceMultiParams } from "./types";
import {
  FixtureValidity,
  apiKeyFixtureFactory,
  addressArrayFixtureFactory,
  tagFixtureFactory,
} from "etherscan/fixtures";

export type BalanceMultiParamsFixture = {
  [Property in keyof BalanceMultiParams]?: FixtureValidity;
};

/**
 * Base fixture for BalanceMultiParams.
 * @param {BaseAddressesParamType} fixtureValidity - An object containing the validity of parameters contained by the fixture.
 * @returns {BalanceMultiParams} A `BalanceMultiParams` object with the Ethereum addresses, base parameters and tag value.
 */
export const balanceMultiParamsFixtureFactory = (
  fixtureValidity: BalanceMultiParamsFixture = {},
): BalanceMultiParams => {
  const validity = {
    apiKey: FixtureValidity.Valid,
    address: FixtureValidity.Valid,
    tag: FixtureValidity.Valid,
    ...fixtureValidity,
  };

  return {
    ...apiKeyFixtureFactory(validity.apiKey),
    ...addressArrayFixtureFactory(validity.address),
    ...tagFixtureFactory(validity.tag),
  };
};
