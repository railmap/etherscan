import type { BalanceParams } from "./types";
import { baseParamsFixture } from "etherscan/fixtures";
/**
 * Base fixture for BalanceParams.
 * @returns BalanceParams object populated with environment vars.
 */
export const balanceParamsFixture = (): BalanceParams => {
  return {
    tag: "latest",
    ...baseParamsFixture(),
  };
};
