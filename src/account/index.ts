import type { EtherscanModule, EtherscanModuleRequest } from "etherscan/types";
import type { BalanceAction } from "etherscan/account/balance";

/**
 * Name of the `account` action.
 */
export type AccountModuleName = "account";

/**
 * Actions inside the `account` module.
 */
export type AccountModuleActions = BalanceAction;

/**
 * Request base for `account` module actions.
 */
export type AccountModuleRequest = EtherscanModuleRequest<AccountModuleName>;

/**
 * `account` module.
 */
export type AccountModule = EtherscanModule<AccountModuleActions>;

export * from "./balance";
