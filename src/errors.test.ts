import { InvalidFenError, OutOfBoundsError } from "./errors";
import { beforeEach, describe, expect, it } from "bun:test";

const ERRORS = [
  [OutOfBoundsError, "OutOfBoundsError"],
  [InvalidFenError, "InvalidFenError"],
] as const;

// TODO: Convert this to describe.each.
for (const [ErrorClass, errorClassName] of ERRORS) {
  describe(errorClassName, () => {
    let error: Error;

    beforeEach(() => {
      error = new ErrorClass("banana");
    });

    describe("when the message is not provided", () => {
      beforeEach(() => {
        error = new ErrorClass();
      });

      it("sets the error message to an empty string", () => {
        expect(error.message).toEqual("");
      });
    });

    describe("when the message is undefined", () => {
      beforeEach(() => {
        error = new ErrorClass(undefined);
      });

      it("sets the error message to an empty string", () => {
        expect(error.message).toEqual("");
      });
    });

    describe("when the message is a string", () => {
      it("sets the error message to the string", () => {
        expect(error.message).toEqual("banana");
      });
    });

    it("sets the name", () => {
      expect(error.name).toEqual(errorClassName);
    });

    it("sets the stack trace", () => {
      expect(error.stack).not.toBeEmpty();
    });
  });
}
