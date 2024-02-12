export interface EtherscanParam {
  name: string;
  value: any;
}

export type EtherscanParams<T extends EtherscanParam> = Record<
  T["name"],
  T["value"]
>;

export interface AddressParam extends EtherscanParam {
  name: "address";
  value: string;
}

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
  name: "address";
  value: bigint;
}

export interface EndBlockParam extends EtherscanParam {
  name: "address";
  value: bigint;
}

export interface PageParam extends EtherscanParam {
  name: "address";
  value: bigint;
}

export interface OffsetParam extends EtherscanParam {
  name: "address";
  value: number;
}

export enum SortingPreference {
  Ascending = "asc",
  Descending = "desc",
}

export interface SortParam extends EtherscanParam {
  name: "address";
  value: SortingPreference;
}
