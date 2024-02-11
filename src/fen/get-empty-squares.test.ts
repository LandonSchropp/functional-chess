import { EMPTY_POSITION, SQUARES, STARTING_POSITION } from "../constants";
import { getEmptySquares } from "./get-empty-squares";
import { describe, expect, it } from "bun:test";
import { sortBy } from "remeda";

const sort = sortBy((string: string) => string);

describe("getEmptySquares", () => {
  describe("when the board is empty", () => {
    it("returns all of the squares", () => {
      expect(sort(getEmptySquares(EMPTY_POSITION))).toEqual(sort(SQUARES));
    });
  });

  describe("when the position is the starting poisition", () => {
    it("returns the squares on the third through sixth ranks", () => {
      expect(sort(getEmptySquares(STARTING_POSITION))).toEqual(
        sort(SQUARES.filter((square) => /[3-6]/.test(square))),
      );
    });
  });

  describe("when the board is full", () => {
    it("returns the squares on the third through sixth ranks", () => {
      expect(
        getEmptySquares(
          "NNNNNNNN/NNNNNNNN/NNNNNNNN/NNNNNNNN/NNNNNNNN/NNNNNNNN/NNNNNNNN/NNNNNNNN w - - 0 1",
        ),
      ).toEqual([]);
    });
  });
});
