import * as S from "@effect/schema/Schema";

import { createResponseSchema } from "etherscan/validation";

/**
 * Name of the `account/balance` action.
 */
export const BalanceActionName = "balance";

/**
 * `account/balance` response schema for validating the action
 * response during runtime.
 */
export const BalanceResponseSchema = createResponseSchema(S.bigint);
