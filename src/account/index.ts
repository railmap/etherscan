import type { EtherscanModule } from "etherscan/types";
import type { BalanceAction } from "./balance";

export type AccountModuleActions = BalanceAction;

export type AccountModule = EtherscanModule<AccountModuleActions>;
