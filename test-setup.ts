import { Fen0x88, isFen0x88, toFen } from "./src";
import { expect } from "bun:test";
import type { CustomMatcher } from "bun:test";

declare module "bun:test" {
  interface Matchers {
    toEqualFen(expected: Fen0x88 | string): MatcherResult;
  }
  interface AsymmetricMatchers {
    toEqualFen(expected: Fen0x88 | string): AsymmetricMatcher;
  }
}

const toEqualFen: CustomMatcher<unknown, [Fen0x88 | string]> = function (actual, expected) {
  if (isFen0x88(actual)) {
    actual = toFen(actual);
  }

  if (isFen0x88(expected)) {
    expected = toFen(expected);
  }

  const pass = expected === actual;

  const message = pass
    ? () =>
        `${this.utils.matcherHint(".not.toEqualFen")}\n\n` +
        `Expected: not ${this.utils.printExpected(expected)}\n` +
        `Received: ${this.utils.printReceived(actual)}`
    : () =>
        `${this.utils.matcherHint(".toEqualFen")}\n\n` +
        `Expected: ${this.utils.printExpected(expected)}\n` +
        `Received: ${this.utils.printReceived(actual)}`;

  return { message, pass };
};

expect.extend({
  toEqualFen,
});
