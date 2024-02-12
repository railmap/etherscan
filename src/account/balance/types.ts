import * as S from "@effect/schema/Schema";

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
import { createResultSchema } from "etherscan/constants";

/**
 Name of the `account/balance` action.
 */
export type BalanceActionName = "balance";

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
  BalanceActionName,
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
  BalanceResponse
>;

/**
 * `account/balance` action.
 */
export type BalanceAction = EtherscanAction<
  BalanceActionName,
  BalanceActionCall
>;

/**
 * `account/balance` result schema for validating the response of
 * the action call during runtime.
 */
export const BalanceResultSchema = createResultSchema(S.bigint);
