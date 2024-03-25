import type {
  ApiKeyParam,
  AddressArrayParam,
  AddressParam,
  TagParam,
  EtherscanParams,
  EtherscanParam,
} from "etherscan/types/param";
import { TagValue } from "etherscan/types/param";

export enum FixtureValidity {
  Valid,
  Invalid,
  Default,
}

export type ParamFixtureFactory<T extends EtherscanParam> = (
  validity: FixtureValidity,
) => EtherscanParams<T>;

export interface FixtureFactoryParamValues<T extends EtherscanParam> {
  valid: () => T["value"];
  invalid: () => T["value"];
  default: () => T["value"];
}

export const createParamFixtureFactory = <T extends EtherscanParam>(
  paramName: T["name"],
  paramValues: FixtureFactoryParamValues<T>,
): ParamFixtureFactory<T> => {
  const paramFixtureFactory = (
    validity: FixtureValidity,
  ): EtherscanParams<T> => {
    let param: T["value"];

    switch (validity) {
      case FixtureValidity.Valid:
        param = paramValues.valid();
        break;
      case FixtureValidity.Invalid:
        param = paramValues.invalid();
        break;
      default:
        param = paramValues.default();
        break;
    }

    const params = { [paramName]: param };
    return params as EtherscanParams<T>;
  };

  return paramFixtureFactory;
};

/**
 * API key param fixture factory.
 * @param fixtureType Validity of the fixture to return.
 * @returns EtherscanParams object populated with desired fixture.
 */
export const apiKeyFixtureFactory = createParamFixtureFactory<ApiKeyParam>(
  "apiKey",
  {
    valid: () => import.meta.env.VITE_ETHERSCAN_API_KEY ?? "",
    invalid: () => "invalid",
    default: () => "",
  },
);

/**
 * Address param fixture factory.
 * @param fixtureType Validity of the fixture to return.
 * @returns EtherscanParams object populated with desired fixture.
 */
export const addressFixtureFactory = createParamFixtureFactory<AddressParam>(
  "address",
  {
    valid: () => import.meta.env.VITE_SEPOLIA_ADDRESS ?? "",
    invalid: () => "invalid",
    default: () => "",
  },
);

/**
 * Address array param fixture factory.
 * @param fixtureType Validity of the fixture to return.
 * @returns EtherscanParams object populated with desired fixture.
 */
export const addressArrayFixtureFactory =
  createParamFixtureFactory<AddressArrayParam>("address", {
    valid: () => (import.meta.env.VITE_SEPOLIA_ADDRESS_ARRAY ?? "").split(","),
    invalid: () => ["invalid"],
    default: () => [],
  });

/**
 * Tag param fixture factory.
 * @param {} fixtureType Validity of the fixture to return.
 * @returns EtherscanParams object populated with desired fixture.
 */
export const tagFixtureFactory = createParamFixtureFactory<TagParam>("tag", {
  valid: () => TagValue.Latest,
  // @ts-expect-error Explicit invalid value used for testing
  invalid: () => "invalid",
  // @ts-expect-error Explicit empty value used for testing
  default: () => "",
});
