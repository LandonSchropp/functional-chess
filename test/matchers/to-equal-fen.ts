import { Fen0x88, isFen0x88, toFen } from "../../src";
import { CustomMatcher } from "bun:test";

export const toEqualFen: CustomMatcher<unknown, [Fen0x88 | string]> = function (
  received,
  expected,
) {
  if (isFen0x88(received)) {
    received = toFen(received);
  }

  if (isFen0x88(expected)) {
    expected = toFen(expected);
  }

  return {
    message: this.utils.matcherHint("toEqualFen", received, expected),
    pass: expected === received,
  };
};
