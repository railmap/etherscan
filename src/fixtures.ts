import type { BaseParams } from "./types/param";

/**
 * Base fixture with default fields needed for a request.
 * @returns DefaultParams object populated with environment vars.
 */
export const baseParamsFixture = (): BaseParams => {
  return {
    apiKey: process.env.ETHERSCAN_API_KEY ?? "",
  };
};

/**
 * A constant used in test fixtures for negative test cases to
 * verify that an address is invalid.
 */
export const InvalidAddress = "Invalid";
