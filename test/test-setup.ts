import { Fen0x88 } from "../src";
import { Move0x88 } from "../src/internal/types";
import { toEqualFen } from "./matchers/to-equal-fen";
import { toMatchMoves } from "./matchers/to-match-moves";
import { expect } from "bun:test";

declare module "bun:test" {
  interface Matchers {
    toEqualFen(expected: Fen0x88 | string): MatcherResult;
    toMatchMoves(expected: Move0x88[]): MatcherResult;
  }
  interface AsymmetricMatchers {
    toEqualFen(expected: Fen0x88 | string): AsymmetricMatcher;
    toMatchMoves(expected: Move0x88[]): AsymmetricMatcher;
  }
}

expect.extend({
  toEqualFen,
  toMatchMoves,
});
