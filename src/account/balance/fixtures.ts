import type { BalanceParams } from "./types";

/**
 * Base fixture for BalanceParams.
 * @returns BalanceParams object populated with environment vars.
 */
export const balanceParamsFixture = (): BalanceParams => {
  return {
    address: process.env.SEPOLIA_ADDRESS ?? "",
    tag: "latest",
    apiKey: process.env.ETHERSCAN_API_KEY ?? "",
  };
};
