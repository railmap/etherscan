import type { EtherscanParams } from "etherscan/types";

import type { AddressParam } from "etherscan/types/param";

export type BalanceMultiParams = EtherscanParams<AddressParam>;

export const BalanceMultiActionName = "balancemulti";
