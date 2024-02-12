import type {
  EtherscanAction,
  EtherscanActionCall,
  EtherscanParams,
  EtherscanResponse,
  EtherscanResult,
} from "etherscan/types";
import type { AddressParam, TagParam } from "etherscan/types/param";

export type BalanceParam = AddressParam | TagParam;

export type BalanceParams = EtherscanParams<BalanceParam>;

export type BalanceResult = EtherscanResult<bigint>;

export type BalanceResponse = EtherscanResponse<BalanceResult>;

export type BalanceActionCall = EtherscanActionCall<
  BalanceParams,
  BalanceResponse
>;

export type BalanceActionName = "balance";

export type BalanceAction = EtherscanAction<
  BalanceActionName,
  BalanceActionCall
>;
