import type {
  EtherscanAction,
  EtherscanActionCall,
  EtherscanParams,
  EtherscanRequest,
  EtherscanResponse,
  EtherscanResult,
} from "etherscan/types";

import type { AddressArrayParam, TagParam } from "etherscan/types/param";
import type { AccountModuleRequest } from "etherscan/modules/account";
import type { BalanceMultiActionName } from "./constants";

/**
 * Parameter for the `account/balancemulti` action.
 */
export type BalanceMultiParam = AddressArrayParam | TagParam;

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
export interface BalanceMultiResultObject {
  account: string;
  balance: bigint;
}

/**
 * Response from the `account/balancemulti` action.
 */
export type BalanceMultiResult = EtherscanResult<BalanceMultiResultObject[]>;

/**
 * Response from the `account/balancemulti` action.
 */
export type BalanceMultiResponse = EtherscanResponse<BalanceMultiResult>;

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
