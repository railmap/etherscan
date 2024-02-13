/**
 * Represents action response errors.
 * It also serves as a factory for extending classes.
 *
 * Example usage:
 * ```
 * export class TestError extends EtherscanError.extend(
 *   "Test error",
 * ) {}
 *
 * const testError = new TestError();
 *
 * console.log(testError)  // "Test error"
 * console.log(typeof testError)  // Error
 * ```
 */
export abstract class EtherscanError extends Error {
  /**
   * Factory logic to create new Error classes from EtherscanError
   * and ParamError abstract classes.
   * @param message Error message
   * @returns A new error class that inherits from `EtherscanError`
   * or any other error class that extends `EtherscanError`
   */
  public static extend = (message: string): typeof EtherscanError => {
    const errorClass = class extends this {
      public static readonly message = message;

      constructor() {
        super(errorClass.message);
      }
    };

    return errorClass;
  };
}

if (import.meta.vitest !== undefined) {
  const { it, expect, describe } = import.meta.vitest;

  describe("EtherscanError", () => {
    describe("extend", () => {
      class TestError extends EtherscanError.extend("Test error") {}
      const testError = new TestError();

      it("should return a EtherscanError derived class", () => {
        expect(testError).toBeInstanceOf(EtherscanError);
      });

      it("should return a Error derived class", () => {
        expect(testError).toBeInstanceOf(Error);
      });

      it("should return a class that is convertible to string", () => {
        expect(String(testError)).toStrictEqual("Error: Test error");
      });
    });
  });
}

/**
 * Represents errors caused by invalid parameters in action calls
 */
export abstract class ParamError extends EtherscanError {}

/* Common Errors */

export class InvalidApiKeyError extends EtherscanError.extend(
  "Invalid API Key",
) {}

export class MaxRateLimitError extends EtherscanError.extend(
  "Max rate limit reached, please use API Key for higher rate limit",
) {}

export class MissingOrInvalidActionError extends EtherscanError.extend(
  "Error! Missing Or invalid Action name",
) {}

export class QueryTimeoutError extends EtherscanError.extend(
  "Query Timeout occured. Please select a smaller result dataset",
) {}

export class UnknownError extends EtherscanError.extend(
  "Unknown error. Please file an issue to the @railmap/etherscan repository.",
) {}
