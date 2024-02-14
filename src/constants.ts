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
 *
 * @param result
 * @returns
 */
export const SuccessResultSchema = (result: S.Schema<any>): S.Schema<any> => {
  return S.struct({
    status: S.greaterThan(0)(S.NumberFromString),
    message: S.literal(EtherscanResponseMessage.Ok),
    result,
  });
};

/**
 *
 */
export const ErrorResultSchema = (): S.Schema<any> => {
  return S.struct({
    status: S.transformLiteral("0", 0),
    message: S.literal(EtherscanResponseMessage.NotOk),
    result: S.string,
  });
};

/**
 * Creates the entire validation schema that is used when performing runtime
 * validation of responses obtained during action calls.
 * @param result Schema for the `result` field, specific to each action call
 * @returns Schema that validates responses
 */
export const createResponseSchema = (result: S.Schema<any>): S.Schema<any> => {
  const transformSuccessSchema = SuccessResultSchema(result).pipe(
    S.pick("result"),
  );

  const transformErrorSchema = ErrorResultSchema().pipe(
    S.transform(
      S.struct({ error: S.string }),
      (res) => ({ error: res.result }),
      (res) => ({
        status: 0,
        message: EtherscanResponseMessage.NotOk,
        result: res.error,
      }),
    ),
  );

  const responseSchema = S.union(transformSuccessSchema, transformErrorSchema);
  return responseSchema;
};
