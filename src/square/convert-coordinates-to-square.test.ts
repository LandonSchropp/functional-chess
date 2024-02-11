import { BOARD_SIZE } from "../constants";
import { convertCoordinatesToSquare } from "./convert-coordinates-to-square";
import { describe, expect, it } from "bun:test";

describe("convertSquareToCoordinates", () => {
  describe("when the file coordinate is below 0", () => {
    it("raises an error", () => {
      expect(() => convertCoordinatesToSquare([-1, 0])).toThrow("Invalid coordinates: [-1, 0]");
    });
  });

  describe("when the file coordinate is below equal to or grater than the board size", () => {
    it("raises an error", () => {
      expect(() => convertCoordinatesToSquare([BOARD_SIZE, 0])).toThrow(
        `Invalid coordinates: [${BOARD_SIZE}, 0]`,
      );
    });
  });

  describe("when the rank coordinate is below 0", () => {
    it("raises an error", () => {
      expect(() => convertCoordinatesToSquare([0, -1])).toThrow("Invalid coordinates: [0, -1]");
    });
  });

  describe("when the rank coordinate is below equal to or grater than the board size", () => {
    it("raises an error", () => {
      expect(() => convertCoordinatesToSquare([0, BOARD_SIZE])).toThrow(
        `Invalid coordinates: [0, ${BOARD_SIZE}]`,
      );
    });
  });

  describe("when the coordinates are valid", () => {
    it("returns the coordinates of the square", () => {
      expect(convertCoordinatesToSquare([0, 7])).toEqual("a8");
      expect(convertCoordinatesToSquare([1, 6])).toEqual("b7");
      expect(convertCoordinatesToSquare([2, 5])).toEqual("c6");
      expect(convertCoordinatesToSquare([3, 4])).toEqual("d5");
      expect(convertCoordinatesToSquare([4, 3])).toEqual("e4");
      expect(convertCoordinatesToSquare([5, 2])).toEqual("f3");
      expect(convertCoordinatesToSquare([6, 1])).toEqual("g2");
      expect(convertCoordinatesToSquare([7, 0])).toEqual("h1");
    });
  });
});
