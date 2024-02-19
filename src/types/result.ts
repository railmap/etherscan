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

export interface EtherscanResult<T> {
  result?: T extends EtherscanResultObjectItem
    ? EtherscanResultObject<T>
    : EtherscanResultPrimitive;

  error?: EtherscanError;
}
