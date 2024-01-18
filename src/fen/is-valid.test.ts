import { describe, expect, it } from "bun:test";
import { STARTING_POSITION } from "../constants";
import { isValid } from "./is-valid";

describe("isValid", () => {
  describe("when the FEN is invalid", () => {
    it("returns false", () => {
      expect(isValid("invalid")).toBe(false);
    });
  });

  describe("when the FEN is valid", () => {
    it("returns true", () => {
      expect(isValid(STARTING_POSITION)).toBe(true);
    });
  });
});
