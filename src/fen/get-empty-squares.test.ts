import { EMPTY_POSITION, SQUARES, STARTING_POSITION } from "../constants";
import { Square } from "../types";
import { getEmptySquares } from "./get-empty-squares";
import { parseFen } from "./parse-fen";
import { describe, expect, it } from "bun:test";

const EMPTY_SQUARES_THIRD_THROUGH_SIXTH_RANK: Square[] = SQUARES.filter((square) =>
  /[3-6]/.test(square),
);

describe("getEmptySquares", () => {
  describe("when the board is empty", () => {
    it("returns all of the squares", () => {
      expect(getEmptySquares(EMPTY_POSITION)).toEqual(SQUARES as unknown as Square[]);
    });
  });

  describe("when the position is the starting poisition", () => {
    it("returns the squares on the third through sixth ranks", () => {
      expect(getEmptySquares(STARTING_POSITION)).toEqual(EMPTY_SQUARES_THIRD_THROUGH_SIXTH_RANK);
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

  describe("when the fen is an Fen0x88", () => {
    it("returns the empty squares", () => {
      expect(getEmptySquares(parseFen(STARTING_POSITION))).toEqual(
        EMPTY_SQUARES_THIRD_THROUGH_SIXTH_RANK,
      );
    });
  });
});
