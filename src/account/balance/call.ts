import { EtherscanBaseUrl } from "etherscan/constants";
import type {
  BalanceActionCall,
  BalanceParams,
  BalanceResponse,
} from "./types";

export const balance: BalanceActionCall = async (
  baseUrl: EtherscanBaseUrl,
  apiKey: string,
  params: BalanceParams,
): Promise<BalanceResponse> => {
  const queryParamsString = `module=account&action=balance&address=${params.address}&tag=${params.tag}`;
  const url = `${baseUrl}/?${queryParamsString}&apikey=${apiKey}`;

  const response = await fetch(url);
  const balanceResponse = await response.json();

  return {
    ...balanceResponse,
    result: BigInt(balanceResponse.result as string),
  };
};

if (import.meta.vitest !== undefined) {
  const { it, expect, describe } = import.meta.vitest;

  describe("balance", () => {
    const apiKey = process.env.ETHERSCAN_API_KEY ?? "";
    const balanceParams = {
      address: process.env.SEPOLIA_ADDRESS ?? "",
      tag: "latest",
    };

    it("should return a bigint result", async () => {
      const { result } = await balance(
        EtherscanBaseUrl.Sepolia,
        apiKey,
        balanceParams,
      );

      expect(result).toBeTypeOf("bigint");
    });

    it("should return a balance greater or equal than zero", async () => {
      const { result } = await balance(
        EtherscanBaseUrl.Sepolia,
        apiKey,
        balanceParams,
      );

      expect(result).toBeGreaterThanOrEqual(0);
    });
  });
}
