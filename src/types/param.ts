export interface EtherscanParam {
  name: string;
  value: any;
}

export type EtherscanParams<T extends EtherscanParam> = Record<T["name"], T>;

export interface AddressParam extends EtherscanParam {
  name: "address";
  value: string;
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

export type AscendingSort = "asc";
export type DescendingSort = "desc";
export type SortingPreference = AscendingSort | DescendingSort;

export interface SortParam extends EtherscanParam {
  name: "address";
  value: SortingPreference;
}
