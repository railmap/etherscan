import * as S from "@effect/schema/Schema";

import queryString from "query-string";

import { EtherscanBaseUrl } from "etherscan/constants";
import type {
  BalanceMultiResult,
  BalanceMultiParams,
  BalanceMultiRequest,
  BalanceMultiActionCall,
  BalanceMultiResultFields,
} from "./types";
import { AccountModuleName } from "etherscan/account";
import {
  BalanceMultiActionName,
  BalanceMultiResponseSchema,
} from "./constants";
import { balanceMultiParamsFixture } from "./fixtures";
import { Either } from "effect";

/**
 * Returns the Ether balance of a given multiple address.
 *
 * @param baseUrl - Etherscan API URL for either _mainnet_ or _testnet_ explorers.
 * @param params  - Request parameters.
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
  const { InvalidAddress, baseAddressesParam } = await import(
    "etherscan/fixtures"
  );

  describe("balancemulti", () => {
    const balanceMultiParams = balanceMultiParamsFixture(baseAddressesParam());
    const invalidAddressParams = balanceMultiParamsFixture(
      baseAddressesParam(InvalidAddress),
    );

    let baseResultList: BalanceMultiResultFields[];
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

      expect(balanceValid).toStrictEqual(true);
    });
    it("should return an object containing only valid Ethereum addresses", async () => {
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
