import type { EtherscanError } from "etherscan/errors";

export interface EtherscanResultObjectItem {
  name: string;
  value: any;
}

export type EtherscanResultObject<T extends EtherscanResultObjectItem> = Record<
  T["name"],
  T
>;

export type EtherscanResultPrimitive = bigint;

export type EtherscanResultBaseType =
  | EtherscanResultPrimitive
  | EtherscanResultObject<any>;

export type EtherscanResultArrayType = EtherscanResultBaseType[];

export type EtherscanResultType =
  | EtherscanResultBaseType
  | EtherscanResultArrayType;

export interface EtherscanResult<T extends EtherscanResultType> {
  result?: T;
  error?: EtherscanError;
}
