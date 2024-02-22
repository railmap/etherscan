import { ParamError } from "etherscan/errors";

export interface EtherscanParam {
  name: string;
  value: any;
}

export type EtherscanParams<T extends EtherscanParam> = Record<
  T["name"],
  T["value"]
> & {
  apiKey?: string;
};

export interface AddressParam extends EtherscanParam {
  name: "address";
  value: string;
}

export class InvalidAddressFormatError extends ParamError.extend(
  "Error! Invalid address format",
) {}

export enum TagValue {
  Earliest = "earliest",
  Pending = "pending",
  Latest = "latest",
}

export interface TagParam extends EtherscanParam {
  name: "tag";
  value: TagValue;
}

export interface StartBlockParam extends EtherscanParam {
  name: "startblock";
  value: bigint;
}

export interface EndBlockParam extends EtherscanParam {
  name: "endblock";
  value: bigint;
}

export interface PageParam extends EtherscanParam {
  name: "page";
  value: bigint;
}

export interface OffsetParam extends EtherscanParam {
  name: "offset";
  value: number;
}

export enum SortingPreference {
  Ascending = "asc",
  Descending = "desc",
}

export interface SortParam extends EtherscanParam {
  name: "sort";
  value: SortingPreference;
}

export type DefaultParams = EtherscanParams<AddressParam>;
