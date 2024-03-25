import type { BalanceParams } from "./types";
import {
  FixtureValidity,
  apiKeyFixtureFactory,
  addressFixtureFactory,
  tagFixtureFactory,
} from "etherscan/fixtures";

export type BalanceParamsFixture = {
  [Property in keyof BalanceParams]?: FixtureValidity;
};

/**
 * Base fixture for BalanceParams.
 * @param {AddressParam} fixtureValidity - An object containing param names and their validity.
 * @returns {BalanceParams} A `BalanceParams` object with the Ethereum address, base parameters, and the latest tag value.
 */
export const balanceParamsFixtureFactory = (
  fixtureValidity: BalanceParamsFixture = {},
): BalanceParams => {
  const validity = {
    apiKey: FixtureValidity.Valid,
    address: FixtureValidity.Valid,
    tag: FixtureValidity.Valid,
    ...fixtureValidity,
  };
  return {
    ...apiKeyFixtureFactory(validity.apiKey),
    ...addressFixtureFactory(validity.address),
    ...tagFixtureFactory(validity.tag),
  };
};
