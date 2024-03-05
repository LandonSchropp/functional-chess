import { Fen0x88 } from "../src";
import { toEqualFen } from "./matchers/to-equal-fen";
import { expect } from "bun:test";

declare module "bun:test" {
  interface Matchers {
    toEqualFen(expected: Fen0x88 | string): MatcherResult;
  }
  interface AsymmetricMatchers {
    toEqualFen(expected: Fen0x88 | string): AsymmetricMatcher;
  }
}

expect.extend({
  toEqualFen,
});
