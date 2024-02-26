import type { EtherscanModule, EtherscanModuleRequest } from "etherscan/types";
import type { BalanceAction } from "etherscan/account/balance";
import type { BalanceMultiAction } from "./balance_multi/types";

/**
 * Name of the `account` action.
 */
export const AccountModuleName = "account";

/**
 * Actions inside the `account` module.
 */
export type AccountModuleActions = BalanceAction | BalanceMultiAction;

/**
 * Request base for `account` module actions.
 */
export type AccountModuleRequest = EtherscanModuleRequest<
  typeof AccountModuleName
>;

/**
 * `account` module.
 */
export type AccountModule = EtherscanModule<AccountModuleActions>;

export * from "./balance";
export * from "./balance_multi";
