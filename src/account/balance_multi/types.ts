import type { EtherscanParams, EtherscanResult } from "etherscan/types";

import type { AddressMultiParam, TagParam } from "etherscan/types/param";

export type BalanceMultiParam = AddressMultiParam | TagParam;

export type BalanceMultiParams = EtherscanParams<BalanceMultiParam>;

export interface balanceMultiResultFields {
  address: string;
  balance: bigint;
}

export type BalanceMultiResult = EtherscanResult<balanceMultiResultFields[]>;
