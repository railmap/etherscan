import * as S from "@effect/schema/Schema";

/* General */

/**
 * Base URLs for the mainnet and testnet blockchains.
 */
export enum EtherscanBaseUrl {
  Mainnet = "https://api.etherscan.io/api",
  Goerli = "https://api-goerli.etherscan.io/api",
  Sepolia = "https://api-sepolia.etherscan.io/api",
}

/**
 * Message value contained in Etherscan API responses.
 */
export enum EtherscanResponseMessage {
  Ok = "OK",
  NotOk = "NOTOK",
}

/* Validation schemas */

/**
 * Creates the entire validation schema that is used when performing runtime
 * validation of responses obtained during action calls.
 * @param result Schema for the `result` field, specific to each action call
 * @returns Schema that validates responses
 */
export const createResponseSchema = (result: S.Schema<any>): S.Schema<any> => {
  return S.struct({
    status: S.greaterThan(0)(S.NumberFromString),
    message: S.literal(EtherscanResponseMessage.Ok),
    result,
  });
};

/**
 *
 */
export const ErrorResultSchema = S.struct({
  status: S.transformLiteral("0", 0),
  message: S.literal(EtherscanResponseMessage.NotOk),
  result: S.string,
});
