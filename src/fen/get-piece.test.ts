import { STARTING_POSITION, WHITE_BISHOP } from "../constants";
import { getPiece } from "./get-piece";
import { describe, expect, it } from "bun:test";

describe("getPiece", () => {
  describe("when the square has a piece", () => {
    it("returns the piece", () => {
      expect(getPiece(STARTING_POSITION, "c1")).toEqual(WHITE_BISHOP);
    });
  });

  describe("when the square does not have a piece", () => {
    it("returns null", () => {
      expect(getPiece(STARTING_POSITION, "c3")).toBeNull();
    });
  });
});
