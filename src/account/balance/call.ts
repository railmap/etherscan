import * as S from "@effect/schema/Schema";
import * as Either from "effect/Either";
import queryString from "query-string";

import { EtherscanBaseUrl } from "etherscan/constants";
import {
  type BalanceActionCall,
  type BalanceParams,
  type BalanceResponse,
  type BalanceRequest,
  BalanceResultSchema,
} from "./types";

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
): Promise<BalanceResponse> => {
  const request: BalanceRequest = {
    module: "account",
    action: "balance",
    ...params,
  };
  const url = queryString.stringifyUrl({ url: baseUrl, query: { ...request } });
  const parse = S.decodeEither(BalanceResultSchema);

  const response = await fetch(url);

  const balanceResponse = Either.getOrThrowWith(
    parse(await response.json()),
    (e) => e,
  );

  return balanceResponse;
};

if (import.meta.vitest !== undefined) {
  const { it, expect, describe } = import.meta.vitest;

  describe("balance", () => {
    const balanceParams = {
      address: process.env.SEPOLIA_ADDRESS ?? "",
      tag: "latest",
      apiKey: process.env.ETHERSCAN_API_KEY ?? "",
    };

    it("should return a bigint result", async () => {
      const { result } = await balance(EtherscanBaseUrl.Sepolia, balanceParams);

      expect(result).toBeTypeOf("bigint");
    });

    it("should return a balance greater or equal than zero", async () => {
      const { result } = await balance(EtherscanBaseUrl.Sepolia, balanceParams);

      expect(result).toBeGreaterThanOrEqual(0);
    });
  });
}
