import queryString from "query-string";
// import * as Either from "effect/Either";

import { type EtherscanBaseUrl } from "etherscan/constants";
import { type BalanceMultiParams, BalanceMultiActionName } from "./types";
import { AccountModuleName } from "etherscan/account";

export const balanceMulti: any = async (
  baseUrl: EtherscanBaseUrl,
  params: BalanceMultiParams,
): Promise<any> => {
  const request: any = {
    module: AccountModuleName,
    action: BalanceMultiActionName,
    ...params,
  };

  const url: string = queryString.stringifyUrl({
    url: baseUrl,
    query: { ...request },
  });
  const response = await fetch(url);

  console.log(response);

  return true;
};

if (import.meta.vitest !== undefined) {
  const { it, expect, describe } = import.meta.vitest;

  describe("balancemulti", () => {
    it("should be true always", async () => {
      expect(true).toStrictEqual(true);
    });
  });
}
