import { describe, expect, it } from "bun:test";
import { BOARD_SIZE } from "../constants";
import { isVectorInBounds } from "./vector";

describe("isVectorOutOfBounds", () => {
  describe("when the file coordinate is below 0", () => {
    it("returns false", () => {
      expect(isVectorInBounds([-1, 0])).toBe(false);
    });
  });

  describe("when the file coordinate is below equal to or grater than the board size", () => {
    it("returns false", () => {
      expect(isVectorInBounds([BOARD_SIZE, 0])).toBe(false);
    });
  });

  describe("when the rank coordinate is below 0", () => {
    it("returns false", () => {
      expect(isVectorInBounds([0, -1])).toBe(false);
    });
  });

  describe("when the rank coordinate is below equal to or grater than the board size", () => {
    it("returns false", () => {
      expect(isVectorInBounds([0, BOARD_SIZE])).toBe(false);
    });
  });

  describe("when the coordinates are in bounds", () => {
    it("returns true", () => {
      expect(isVectorInBounds([0, 0])).toBe(true);
      expect(isVectorInBounds([0, BOARD_SIZE - 1])).toBe(true);
      expect(isVectorInBounds([BOARD_SIZE - 1, 0])).toBe(true);
      expect(isVectorInBounds([BOARD_SIZE - 1, BOARD_SIZE - 1])).toBe(true);
    });
  });
});
