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

export enum EtherscanResultObjectTypes {
  Object = "object",
  Array = "array",
}

export type EtherscanResultType =
  | EtherscanResultPrimitive
  | EtherscanResultObject<any>;

export interface EtherscanResult<
  T extends EtherscanResultType,
  U extends EtherscanResultObjectTypes = EtherscanResultObjectTypes.Object,
> {
  result?: U extends EtherscanResultObjectTypes.Array
    ? T[]
    : T extends EtherscanResultObject<any>
      ? T
      : EtherscanResultPrimitive;
  error?: EtherscanError;
}
