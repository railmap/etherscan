import * as S from "@effect/schema/Schema";
import { EtherscanResponseMessage } from "etherscan/constants";

/**
 * Schema that validates responses with successful results.
 * @param {S.Schema<any>} result - Action specific result schema.
 * @returns {S.Schema<any>} Schema for validating specific action responses.
 */
export const SuccessResponseSchema = (result: S.Schema<any>): S.Schema<any> => {
  return S.struct({
    status: S.greaterThan(0)(S.NumberFromString),
    message: S.literal(EtherscanResponseMessage.Ok),
    result,
  });
};

/**
 * Schema that validates responses with unsuccessful results.
 * @category Response Schemas
 * @returns {S.Schema<any>} Schema for validating error action responses.
 */
export const ErrorResponseSchema = (): S.Schema<any> => {
  return S.struct({
    status: S.transformLiteral("0", 0),
    message: S.literal(EtherscanResponseMessage.NotOk),
    result: S.string,
  });
};

/**
 * Creates the entire validation schema that is used when performing runtime
 * validation of responses obtained during action calls.
 * @param result Schema for the `result` field, specific to each action call.
 * @returns Schema that validates responses.
 */
export const createResponseSchema = (result: S.Schema<any>): S.Schema<any> => {
  const transformSuccessSchema = SuccessResponseSchema(result).pipe(
    S.pick("result"),
  );

  const transformErrorSchema = ErrorResponseSchema().pipe(
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
