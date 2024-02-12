import type {
  EtherscanAction,
  EtherscanActionCall,
  EtherscanRequest,
  EtherscanParams,
  EtherscanResponse,
  EtherscanResult,
} from "etherscan/types";
import type { AddressParam, TagParam } from "etherscan/types/param";
import type { AccountModuleRequest } from "etherscan/account";

export type BalanceActionName = "balance";

export type BalanceParam = AddressParam | TagParam;

export type BalanceParams = EtherscanParams<BalanceParam>;

export type BalanceRequest = EtherscanRequest<
  BalanceActionName,
  AccountModuleRequest,
  BalanceParams
>;

export type BalanceResult = EtherscanResult<bigint>;

export type BalanceResponse = EtherscanResponse<BalanceResult>;

export type BalanceActionCall = EtherscanActionCall<
  BalanceParams,
  BalanceResponse
>;

export type BalanceAction = EtherscanAction<
  BalanceActionName,
  BalanceActionCall
>;
