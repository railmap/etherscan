import * as S from "@effect/schema/Schema";
import * as Either from "effect/Either";
import queryString from "query-string";
import { EtherscanBaseUrl, createResultSchema } from "etherscan/constants";
import type {
  BalanceActionCall,
  BalanceParams,
  BalanceResponse,
  BalanceRequest,
} from "./types";

export const BalanceResultSchema = createResultSchema(S.bigint);

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
