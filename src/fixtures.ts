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

/**
 * Creates an object with an `address` property containing an Ethereum address.
 *
 * @param {string} [address] - Optional Ethereum address.
 * @returns {BaseAddressParamType} An object with the `address` property.
 */
export const baseAddressParam = (address?: string): BaseAddressParamType => {
  const defaultAddress = process.env.SEPOLIA_ADDRESS ?? "";
  return {
    address: address ?? defaultAddress,
  };
};

/**
 * Creates an object with an `address` property containing an array of Ethereum addresses.
 * The addresses are taken from the `addresses` parameter, split by commas.
 *
 * @param {string} [addresses] - A comma-separated string of Ethereum addresses.
 * @returns {BaseAddressesParamType} An object with the `address` property containing an array of addresses.
 */
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
