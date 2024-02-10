import type { EtherscanParams, EtherscanResult } from "etherscan/types";
import type { EtherscanBaseUrl } from "etherscan/constants";

export type EtherscanResponseStatus = number;

export type OkMessage = "OK";
export type NotOkMessage = "NOTOK";
export type EtherscanResponseMessage = OkMessage | NotOkMessage;

export interface EtherscanResponse<T> {
  status: EtherscanResponseStatus;
  message: EtherscanResponseMessage;
  result: EtherscanResult<T>;
}

export type EtherscanActionCall<
  T extends EtherscanParams<any>,
  U extends EtherscanResponse<any>,
> = (baseUrl: EtherscanBaseUrl, apiKey: string, params: T) => Promise<U>;

export interface EtherscanAction<
  T extends string,
  U extends EtherscanActionCall<any, any>,
> {
  name: T;
  call: U;
}

export type EtherscanActions<T extends EtherscanAction<any, any>> = Record<
  T["name"],
  T
>;

export interface EtherscanModule<T extends EtherscanAction<any, any>> {
  name: string;
  actions: EtherscanActions<T>;
}
