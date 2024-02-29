import { ParamError } from "etherscan/errors";

export interface EtherscanParam {
  name: string;
  value: any;
}

export interface ApiKeyParam extends EtherscanParam {
  name: "apiKey";
  value: string;
}

export type ApiKeyParamField = Record<
  ApiKeyParam["name"],
  ApiKeyParam["value"]
>;

export type EtherscanParams<T extends EtherscanParam> = Record<
  T["name"],
  T["value"]
> &
  Partial<ApiKeyParamField>;

export interface AddressParam extends EtherscanParam {
  name: "address";
  value: string;
}

/**
 * Extends the EtherscanParam interface to specify a parameter representing
 * multiple addresses. It is used to pass an array of addresses
 * as part of a request to the API.
 */

export interface AddressesParam extends EtherscanParam {
  name: "address";
  value: string[];
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
/**
 * Represents a set of parameters for querying actions involving
 * a single Ethereum address
 */
export type BaseParams = EtherscanParams<any>;

export interface BaseAddressParamType {
  address: string;
}
export interface BaseAddressesParamType {
  address: string[];
}
