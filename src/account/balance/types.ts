import type {
  EtherscanAction,
  EtherscanActionCall,
  EtherscanRequest,
  EtherscanParams,
  EtherscanResponse,
  EtherscanResult,
} from "etherscan/types";
import type { AddressParam, TagParam } from "etherscan/types/param";
import type { AccountModuleRequest } from "etherscan/account";
import type { BalanceActionName } from "./constants";

/**
 * Parameter for the `account/balance` action.
 */
export type BalanceParam = AddressParam | TagParam;

/**
 * Parameters for the `account/balance` action.
 */
export type BalanceParams = EtherscanParams<BalanceParam>;

/**
 * Request items for the `account/balance` action.
 */
export type BalanceRequest = EtherscanRequest<
  typeof BalanceActionName,
  AccountModuleRequest,
  BalanceParams
>;

/**
 * Result field type from the response of the `account/balance` action.
 */
export type BalanceResult = EtherscanResult<bigint>;

/**
 * Response from the `account/balance` action.
 */
export type BalanceResponse = EtherscanResponse<BalanceResult>;

/**
 * `account/balance` action call.
 */
export type BalanceActionCall = EtherscanActionCall<
  BalanceParams,
  BalanceResult
>;

/**
 * `account/balance` action.
 */
export type BalanceAction = EtherscanAction<
  typeof BalanceActionName,
  BalanceActionCall
>;
