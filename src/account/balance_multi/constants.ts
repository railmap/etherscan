import * as S from "@effect/schema/Schema";

import { createResponseSchema } from "etherscan/validation";

const BalanceMultiResultDictSchema = S.struct({
  account: S.string,
  balance: S.bigint,
});

const BalanceMultiResultDictSchemaList = S.array(BalanceMultiResultDictSchema);

export const BalanceMultiActionName = "balancemulti";

export const BalanceMultiResponseSchema = createResponseSchema(
  BalanceMultiResultDictSchemaList,
);
