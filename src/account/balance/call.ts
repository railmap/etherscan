import * as S from "@effect/schema/Schema";
import * as Either from "effect/Either";
import queryString from "query-string";

import { EtherscanBaseUrl } from "etherscan/constants";
import {
  type BalanceActionCall,
  type BalanceParams,
  type BalanceRequest,
  type BalanceResult,
  BalanceResponseSchema,
  BalanceActionName,
} from "./types";
import { AccountModuleName } from "etherscan/account";

/**
 * Returns the Ether balance of a given address.
 *
 * @param baseUrl - Etherscan API URL for either _mainnet_ or _testnet_ explorers.
 * @param params  - Request parameters.
 * @returns Promise object containing the response of the call.
 */
export const balance: BalanceActionCall = async (
  baseUrl: EtherscanBaseUrl,
  params: BalanceParams,
): Promise<BalanceResult> => {
  const request: BalanceRequest = {
    module: AccountModuleName,
    action: BalanceActionName,
    ...params,
  };

  const url = queryString.stringifyUrl({ url: baseUrl, query: { ...request } });
  const parse = S.decodeEither(BalanceResponseSchema);

  const response = await fetch(url);

  const balanceResult = Either.getOrElse(
    parse(await response.json()),
    (e) => e,
  );

  return balanceResult;
};

if (import.meta.vitest !== undefined) {
  const { it, expect, describe } = import.meta.vitest;
  const { balanceParamsFixture } = await import("./fixtures");

  describe("balance", () => {
    const balanceParams = balanceParamsFixture();

    it("should return a bigint result", async () => {
      const { result } = await balance(EtherscanBaseUrl.Sepolia, balanceParams);

      expect(result).toBeTypeOf("bigint");
    });

    it("should return a balance greater or equal than zero", async () => {
      const { result } = await balance(EtherscanBaseUrl.Sepolia, balanceParams);

      expect(result).toBeGreaterThanOrEqual(0);
    });

    it("should fail with an error if the address format is invalid", async () => {
      const invalidAddressParams = { ...balanceParams, address: "invalid" };
      const { error } = await balance(
        EtherscanBaseUrl.Sepolia,
        invalidAddressParams,
      );

      expect(error).toStrictEqual("Error! Invalid address format");
    });
  });
}
