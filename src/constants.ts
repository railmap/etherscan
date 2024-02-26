/**
 * Base URLs for the mainnet and testnet blockchains.
 */
export enum EtherscanBaseUrl {
  Mainnet = "https://api.etherscan.io/api",
  Goerli = "https://api-goerli.etherscan.io/api",
  Sepolia = "https://api-sepolia.etherscan.io/api",
}

/**
 * Message value contained in Etherscan API responses.
 */
export enum EtherscanResponseMessage {
  Ok = "OK",
  NotOk = "NOTOK",
}

export const InvalidAddress = "Invalid";
