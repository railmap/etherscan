import type {
  EtherscanParams,
  EtherscanResult,
  EtherscanResultType,
} from "etherscan/types";
import type {
  EtherscanBaseUrl,
  EtherscanResponseMessage,
} from "etherscan/constants";

export interface EtherscanModuleRequest<T extends string> {
  module: T;
}

export type EtherscanRequest<
  T extends string,
  U extends EtherscanModuleRequest<any>,
  V extends EtherscanParams<any>,
> = U &
  V & {
    action: T;
  };

export type EtherscanResponseStatus = number;

export interface EtherscanResponse<T extends EtherscanResultType> {
  status: EtherscanResponseStatus;
  message: EtherscanResponseMessage;
  result: EtherscanResult<T>;
}

export type EtherscanActionCall<
  T extends EtherscanParams<any>,
  U extends EtherscanResult<any>,
> = (baseUrl: EtherscanBaseUrl, params: T) => Promise<U>;

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
