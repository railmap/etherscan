import { type DefaultParams } from "./types/param";

/**
 * Base fixture with default fields needed for a request.
 * @returns DefaultParams object populated with environment vars.
 */
export const baseParamsFixture = (): DefaultParams => {
  return {
    address: process.env.SEPOLIA_ADDRESS ?? "",
    apiKey: process.env.ETHERSCAN_API_KEY ?? "",
  };
};

export const InvalidAddress = "Invalid";
