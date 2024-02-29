import type {
  EtherscanAction,
  EtherscanActionCall,
  EtherscanParams,
  EtherscanRequest,
  EtherscanResult,
  EtherscanResultObjectTypes,
} from "etherscan/types";

import type { AddressesParam, TagParam } from "etherscan/types/param";
import type { AccountModuleRequest } from "..";
import type { BalanceMultiActionName } from "./constants";

/**
 * Parameter for the `account/balancemulti` action.
 */
export type BalanceMultiParam = AddressesParam | TagParam;

/**
 * Parameters for the `account/balancemulti` action.
 */
export type BalanceMultiParams = EtherscanParams<BalanceMultiParam>;

/**
 * Request from the `account/balancemulti` action.
 */
export type BalanceMultiRequest = EtherscanRequest<
  typeof BalanceMultiActionName,
  AccountModuleRequest,
  BalanceMultiParams
>;

/**
 * Result field type from the response of the `account/balancemulti` action.
 */
export interface BalanceMultiResultFields {
  account: string;
  balance: bigint;
}

/**
 * Response from the `account/balancemulti` action.
 */
export type BalanceMultiResult = EtherscanResult<
  BalanceMultiResultFields,
  EtherscanResultObjectTypes.Array
>;

/**
 * `account/balancemulti` action call.
 */
export type BalanceMultiActionCall = EtherscanActionCall<
  BalanceMultiParams,
  BalanceMultiResult
>;

/**
 * `account/balancemulti` action.
 */
export type BalanceMultiAction = EtherscanAction<
  typeof BalanceMultiActionName,
  BalanceMultiActionCall
>;
