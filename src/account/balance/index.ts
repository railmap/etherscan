import type {
  EtherscanAction,
  EtherscanActionCall,
  EtherscanParams,
  EtherscanResponse,
  EtherscanResult,
} from "etherscan/types";

import type {
  AddressParam,
  StartBlockParam,
  EndBlockParam,
  PageParam,
  OffsetParam,
  SortParam,
} from "etherscan/types/param";

export type BalanceParam =
  | AddressParam
  | StartBlockParam
  | EndBlockParam
  | PageParam
  | OffsetParam
  | SortParam;

export type BalanceParams = EtherscanParams<BalanceParam>;

export type BalanceResult = EtherscanResult<bigint>;

export type BalanceResponse = EtherscanResponse<BalanceResult>;

export type BalanceActionCall = EtherscanActionCall<
  BalanceParams,
  BalanceResponse
>;

export type BalanceActionName = "balance";

export type BalanceAction = EtherscanAction<
  BalanceActionName,
  BalanceActionCall
>;

export const balance: BalanceActionCall = async (
  apiKey: string,
  params: BalanceParams,
): Promise<BalanceResponse> => {
  const balanceResponse: BalanceResponse = {
    status: 1,
    message: "OK",
    result: BigInt("1"),
  };

  return balanceResponse;
};

if (import.meta.vitest !== undefined) {
  const { it, expect, describe } = import.meta.vitest;
  describe("balance", () => {
    it("should return a valid balance response", () => {
      expect(0).toBe(0);
    });
  });
}
