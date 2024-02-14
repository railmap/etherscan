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
import { createResponseSchema } from "etherscan/constants";

/**
 * Name of the `account/balance` action.
 */
export const BalanceActionName = "balance";

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

/**
 * `account/balance` response schema for validating the action
 * response during runtime.
 */
export const BalanceResponseSchema = createResponseSchema(S.bigint);
