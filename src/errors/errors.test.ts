import { beforeEach, describe, expect, it } from "bun:test";
import { InvalidFenError, OutOfBoundsError } from "../errors";

const ERRORS = [
  [OutOfBoundsError, "OutOfBoundsError"],
  [InvalidFenError, "InvalidFenError"],
] as const;

for (const [ErrorClass, errorClassName] of ERRORS) {
  describe(errorClassName, () => {
    let error: Error;

    beforeEach(() => {
      error = new ErrorClass("banana");
    });

    it("sets the error message", () => {
      expect(error.message).toEqual("banana");
    });

    it("sets the name", () => {
      expect(error.name).toEqual(errorClassName);
    });

    it("sets the stack trace", () => {
      expect(error.stack).not.toBeEmpty();
    });
  });
}
