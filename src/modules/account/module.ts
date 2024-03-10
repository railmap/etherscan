import type { EtherscanModule, EtherscanModuleRequest } from "etherscan/types";
import type { BalanceAction } from "etherscan/modules/account/balance";
import type { BalanceMultiAction } from "etherscan/modules/account/balancemulti";

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
