import type { EtherscanModule, EtherscanModuleRequest } from "etherscan/types";
import type { BalanceAction } from "etherscan/modules/account/balance";
import type { BalanceMultiAction } from "etherscan/modules/account/balancemulti";

/**
 * Represents the name of the Account module.
 */
export const AccountModuleName = "account";

/**
 * Represents the actions available within the Account module.
 */
export type AccountModuleActions = BalanceAction | BalanceMultiAction;

/**
 * Represents a request for the Account module.
 */
export type AccountModuleRequest = EtherscanModuleRequest<
  typeof AccountModuleName
>;

/**
 * Represents the Account module which provides functionality related to account actions.
 */
export type AccountModule = EtherscanModule<AccountModuleActions>;
