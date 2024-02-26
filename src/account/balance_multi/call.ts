import * as S from "@effect/schema/Schema";

import queryString from "query-string";
// import * as Either from "effect/Either";

import { EtherscanBaseUrl, InvalidAddress } from "etherscan/constants";
import { type BalanceMultiResult, type BalanceMultiParams } from "./types";
import { AccountModuleName } from "etherscan/account";
import {
  BalanceMultiActionName,
  BalanceMultiResponseSchema,
} from "./constants";
import { balanceMultiParamsFixture } from "./fixtures";
import { Either } from "effect";

export const balanceMulti: any = async (
  baseUrl: EtherscanBaseUrl,
  params: BalanceMultiParams,
): Promise<BalanceMultiResult> => {
  const request: any = {
    module: AccountModuleName,
    action: BalanceMultiActionName,
    ...params,
  };

  const url: string = queryString.stringifyUrl({
    url: baseUrl,
    query: { ...request },
  });

  const parse = S.decodeEither(BalanceMultiResponseSchema);

  const response = await fetch(url);

  const balanceMultiResult = Either.getOrElse(
    parse(await response.json()),
    (e) => e,
  );

  return balanceMultiResult;
};

if (import.meta.vitest !== undefined) {
  const { it, expect, describe, beforeAll } = import.meta.vitest;

  describe("balancemulti", () => {
    const balanceMultiParams = balanceMultiParamsFixture();
    let baseResultList: [];

    beforeAll(async () => {
      const { result } = await balanceMulti(
        EtherscanBaseUrl.Sepolia,
        balanceMultiParams,
      );
      baseResultList = result;
    });

    it("should return an object result", async () => {
      expect(baseResultList).toBeTypeOf("object");
    });
    it("should return an object with a balance greater or equal than zero", async () => {
      baseResultList.forEach((result) => {
        expect(result.balance).toBeGreaterThanOrEqual(0);
      });
    });
    it("should return an object with a balance greater or equal than zero", async () => {
      baseResultList.forEach((result) => {
        expect(result.account).toMatch(/0x[a-fA-F0-9]{40}/);
      });
    });
    // TODO: we should create a default error tests suit. This tests is repeated on
    // balance call and probably will be in the next endpoints.
    it("should fail with an error if the address format is invalid", async () => {
      const invalidAddressParams = {
        ...balanceMultiParams,
        address: InvalidAddress,
      };
      const { error } = await balanceMulti(
        EtherscanBaseUrl.Sepolia,
        invalidAddressParams,
      );

      expect(error).toStrictEqual("Error! Invalid address format");
    });
  });
}
