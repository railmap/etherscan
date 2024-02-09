export interface EtherscanResultObjectItem {
  name: string;
  value: any;
}

export type EtherscanResultObject<T extends EtherscanResultObjectItem> = Record<
  T["name"],
  T
>;

export type EtherscanResultPrimitive = bigint;

export type EtherscanResult<T> = T extends EtherscanResultObjectItem
  ? EtherscanResultObject<T>
  : EtherscanResultPrimitive;
