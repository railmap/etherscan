import type { EtherscanModule } from "etherscan/types";
import type { BalanceAction } from "etherscan/account/balance";

export type AccountModuleActions = BalanceAction;

export type AccountModule = EtherscanModule<AccountModuleActions>;

export * from "./balance";
