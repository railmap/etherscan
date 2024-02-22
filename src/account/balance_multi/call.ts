import queryString from "query-string";
import * as Either from "effect/Either";

import { EtherscanBaseUrl } from "etherscan/constants";
import { BalanceMultiParams } from "./types";
import { AccountModuleName } from "etherscan/account";
import { BalanceMultiActionName } from "./types";

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
