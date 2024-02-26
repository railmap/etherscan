import * as S from "@effect/schema/Schema";

import { createResponseSchema } from "etherscan/validation";

/**
 * `account/multibalance` response dict representation
 */

const BalanceMultiResultDictSchema = S.struct({
  account: S.string,
  balance: S.bigint,
});

/**
 * `account/multibalance` response array formed by *BalanceMultiResultDictSchema*
 *  dict
 */
const BalanceMultiResultDictSchemaList = S.array(BalanceMultiResultDictSchema);

/**
 * Name of the `account/balancemulti` action
 */
export const BalanceMultiActionName = "balancemulti";

/**
 * `account/balancemulti` response schema for validating the action
 * response during runtime
 */

export const BalanceMultiResponseSchema = createResponseSchema(
  BalanceMultiResultDictSchemaList,
);
