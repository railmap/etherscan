import type { EtherscanModule, EtherscanModuleRequest } from "etherscan/types";
import type { BalanceAction } from "etherscan/account/balance";

export type AccountModuleActions = BalanceAction;
export type AccountModuleRequest = EtherscanModuleRequest<"account">;
export type AccountModule = EtherscanModule<AccountModuleActions>;

export * from "./balance";
