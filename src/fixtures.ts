import type {
  BaseAddressParamType,
  BaseAddressesParamType,
  BaseParams,
} from "./types/param";

/**
 * Base fixture with default fields needed for a request.
 * @returns DefaultParams object populated with environment vars.
 */
export const baseParamsFixture = (): BaseParams => {
  return {
    apiKey: process.env.ETHERSCAN_API_KEY ?? "",
  };
};

export const baseAddressParam = (address?: string): BaseAddressParamType => {
  const defaultAddress = process.env.SEPOLIA_ADDRESS ?? "";
  return {
    address: address ?? defaultAddress,
  };
};

export const baseAddressesParam = (
  addresses?: string,
): BaseAddressesParamType => {
  const defaultAddresses =
    process.env.SEPOLIA_ADDRESSES_TO_CHECK?.split(",") ?? [];
  return {
    address: addresses?.split(",") ?? defaultAddresses,
  };
};

/**
 * A constant used in test fixtures for negative test cases to
 * verify that an address is invalid.
 */
export const InvalidAddress = "Invalid";
