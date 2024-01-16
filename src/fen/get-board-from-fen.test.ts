import { describe, expect, it } from "bun:test";
import { times } from "remeda";
import {
  BLACK_BISHOP,
  BLACK_KING,
  BLACK_KNIGHT,
  BLACK_PAWN,
  BLACK_QUEEN,
  BLACK_ROOK,
  EMPTY_POSITION,
  STARTING_POSITION,
  WHITE_BISHOP,
  WHITE_KING,
  WHITE_KNIGHT,
  WHITE_PAWN,
  WHITE_QUEEN,
  WHITE_ROOK,
} from "../constants";
import { getBoardFromFen } from "./get-board-from-fen";

describe("getBoardFromFen", () => {
  describe("when the board is empty", () => {
    it("returns an empty 2D array", () => {
      const actual = getBoardFromFen(EMPTY_POSITION);
      const expected = times(8, () => Array.from({ length: 8 }, () => null)) as typeof actual;

      expect(actual).toEqual(expected);
    });
  });

  describe("when the board is not empty", () => {
    const actual = getBoardFromFen(STARTING_POSITION);
    const expected = [
      [
        WHITE_ROOK,
        WHITE_KNIGHT,
        WHITE_BISHOP,
        WHITE_QUEEN,
        WHITE_KING,
        WHITE_BISHOP,
        WHITE_KNIGHT,
        WHITE_ROOK,
      ],
      Array.from({ length: 8 }, () => WHITE_PAWN),
      ...times(4, () => Array.from({ length: 8 }, () => null)),
      Array.from({ length: 8 }, () => BLACK_PAWN),
      [
        BLACK_ROOK,
        BLACK_KNIGHT,
        BLACK_BISHOP,
        BLACK_QUEEN,
        BLACK_KING,
        BLACK_BISHOP,
        BLACK_KNIGHT,
        BLACK_ROOK,
      ],
    ] as typeof actual;

    expect(actual).toEqual(expected);
  });
});
