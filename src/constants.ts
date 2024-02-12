import * as S from "@effect/schema/Schema";

export enum EtherscanBaseUrl {
  Mainnet = "https://api.etherscan.io/api",
  Goerli = "https://api-goerli.etherscan.io/api",
  Sepolia = "https://api-sepolia.etherscan.io/api",
}

export enum EtherscanResponseMessage {
  Ok = "OK",
  NotOk = "NOTOK",
}

export const createResultSchema = (result: S.Schema<any>): S.Schema<any> => {
  return S.struct({
    status: S.greaterThanOrEqualTo(0)(S.NumberFromString),
    message: S.enums(EtherscanResponseMessage),
    result,
  });
};
