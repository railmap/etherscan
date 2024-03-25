import * as S from "@effect/schema/Schema";

import queryString from "query-string";

import { EtherscanBaseUrl } from "etherscan/constants";
import type {
  BalanceMultiResult,
  BalanceMultiParams,
  BalanceMultiRequest,
  BalanceMultiActionCall,
  BalanceMultiResultObject,
} from "./types";
import { AccountModuleName } from "etherscan/modules/account";
import {
  BalanceMultiActionName,
  BalanceMultiResponseSchema,
} from "./constants";
import { Either } from "effect";

/**
 * Returns the Ether balance for multiple addresses.
 * @param {EtherscanBaseUrl} baseUrl - Etherscan API URL for either _mainnet_ or _testnet_ explorers.
 * @param {BalanceMultiParams} params  - Request parameters.
 * @returns Promise object containing the response of the call.
 */
export const balanceMulti: BalanceMultiActionCall = async (
  baseUrl: EtherscanBaseUrl,
  params: BalanceMultiParams,
): Promise<BalanceMultiResult> => {
  const request: BalanceMultiRequest = {
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
  const { FixtureValidity } = await import("etherscan/fixtures");
  const { balanceMultiParamsFixtureFactory } = await import("./fixtures");

  describe("balancemulti", () => {
    const balanceMultiParams = balanceMultiParamsFixtureFactory();
    const invalidAddressParams = balanceMultiParamsFixtureFactory({
      address: FixtureValidity.Invalid,
    });

    let baseResultList: BalanceMultiResultObject[];
    const addressRegExp = /0x[a-fA-F0-9]{40}/;

    beforeAll(async () => {
      const { result } = await balanceMulti(
        EtherscanBaseUrl.Sepolia,
        balanceMultiParams,
      );
      baseResultList = result ?? [];
    });

    it("should return an object result", async () => {
      expect(baseResultList).toBeTypeOf("object");
    });

    it("should return an object with a balance greater or equal than zero", async () => {
      const balanceValid = baseResultList.every((result) => {
        return result.balance >= 0;
      });
      expect(baseResultList).not.toContain([0]);

      expect(balanceValid).toStrictEqual(true);
    });

    it("should return an array containing only valid Ethereum addresses", async () => {
      const addressesValid = baseResultList.every((result) => {
        return addressRegExp.test(result.account);
      });

      expect(addressesValid).toStrictEqual(true);
    });

    it("should fail with an error if the address format is invalid", async () => {
      const { error } = await balanceMulti(
        EtherscanBaseUrl.Sepolia,
        invalidAddressParams,
      );

      expect(error).toStrictEqual("Error! Invalid address format");
    });
  });
}
