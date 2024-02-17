import { EMPTY_POSITION, STARTING_POSITION } from "../constants";
import { isParsable } from "./is-parsable";
import { describe, expect, it } from "bun:test";

describe("isParsable", () => {
  describe("when the FEN is valid", () => {
    it("returns true", () => {
      expect(isParsable(STARTING_POSITION)).toBe(true);
    });
  });

  describe("when the FEN is parsable but invalid", () => {
    it("returns true", () => {
      expect(isParsable(EMPTY_POSITION)).toBe(true);
    });
  });

  describe("when the FEN is not parsable", () => {
    it("returns false", () => {
      expect(isParsable("invalid")).toBe(false);
    });
  });
});
