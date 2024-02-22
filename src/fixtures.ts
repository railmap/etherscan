import { type DefaultParams } from "./types/param";

export const baseParamsFixture = (): DefaultParams => {
  return {
    address: process.env.SEPOLIA_ADDRESS ?? "",
    apiKey: process.env.ETHERSCAN_API_KEY ?? "",
  };
};
