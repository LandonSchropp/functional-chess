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
import { getBoard } from "./get-board";
import { describe, expect, it } from "bun:test";

describe("getBoardFromFen", () => {
  describe("when the board is empty", () => {
    it("returns an empty 2D array", () => {
      const actual = getBoard(EMPTY_POSITION);

      const expected: typeof actual = [
        [
          { square: "a1", piece: null },
          { square: "b1", piece: null },
          { square: "c1", piece: null },
          { square: "d1", piece: null },
          { square: "e1", piece: null },
          { square: "f1", piece: null },
          { square: "g1", piece: null },
          { square: "h1", piece: null },
        ],
        [
          { square: "a2", piece: null },
          { square: "b2", piece: null },
          { square: "c2", piece: null },
          { square: "d2", piece: null },
          { square: "e2", piece: null },
          { square: "f2", piece: null },
          { square: "g2", piece: null },
          { square: "h2", piece: null },
        ],
        [
          { square: "a3", piece: null },
          { square: "b3", piece: null },
          { square: "c3", piece: null },
          { square: "d3", piece: null },
          { square: "e3", piece: null },
          { square: "f3", piece: null },
          { square: "g3", piece: null },
          { square: "h3", piece: null },
        ],
        [
          { square: "a4", piece: null },
          { square: "b4", piece: null },
          { square: "c4", piece: null },
          { square: "d4", piece: null },
          { square: "e4", piece: null },
          { square: "f4", piece: null },
          { square: "g4", piece: null },
          { square: "h4", piece: null },
        ],
        [
          { square: "a5", piece: null },
          { square: "b5", piece: null },
          { square: "c5", piece: null },
          { square: "d5", piece: null },
          { square: "e5", piece: null },
          { square: "f5", piece: null },
          { square: "g5", piece: null },
          { square: "h5", piece: null },
        ],
        [
          { square: "a6", piece: null },
          { square: "b6", piece: null },
          { square: "c6", piece: null },
          { square: "d6", piece: null },
          { square: "e6", piece: null },
          { square: "f6", piece: null },
          { square: "g6", piece: null },
          { square: "h6", piece: null },
        ],
        [
          { square: "a7", piece: null },
          { square: "b7", piece: null },
          { square: "c7", piece: null },
          { square: "d7", piece: null },
          { square: "e7", piece: null },
          { square: "f7", piece: null },
          { square: "g7", piece: null },
          { square: "h7", piece: null },
        ],
        [
          { square: "a8", piece: null },
          { square: "b8", piece: null },
          { square: "c8", piece: null },
          { square: "d8", piece: null },
          { square: "e8", piece: null },
          { square: "f8", piece: null },
          { square: "g8", piece: null },
          { square: "h8", piece: null },
        ],
      ];

      expect(actual).toEqual(expected);
    });
  });

  describe("when the board is not empty", () => {
    it("returns a 2D array reprsenting the position", () => {
      const actual = getBoard(STARTING_POSITION);

      const expected: typeof actual = [
        [
          { square: "a1", piece: WHITE_ROOK },
          { square: "b1", piece: WHITE_KNIGHT },
          { square: "c1", piece: WHITE_BISHOP },
          { square: "d1", piece: WHITE_QUEEN },
          { square: "e1", piece: WHITE_KING },
          { square: "f1", piece: WHITE_BISHOP },
          { square: "g1", piece: WHITE_KNIGHT },
          { square: "h1", piece: WHITE_ROOK },
        ],
        [
          { square: "a2", piece: WHITE_PAWN },
          { square: "b2", piece: WHITE_PAWN },
          { square: "c2", piece: WHITE_PAWN },
          { square: "d2", piece: WHITE_PAWN },
          { square: "e2", piece: WHITE_PAWN },
          { square: "f2", piece: WHITE_PAWN },
          { square: "g2", piece: WHITE_PAWN },
          { square: "h2", piece: WHITE_PAWN },
        ],
        [
          { square: "a3", piece: null },
          { square: "b3", piece: null },
          { square: "c3", piece: null },
          { square: "d3", piece: null },
          { square: "e3", piece: null },
          { square: "f3", piece: null },
          { square: "g3", piece: null },
          { square: "h3", piece: null },
        ],
        [
          { square: "a4", piece: null },
          { square: "b4", piece: null },
          { square: "c4", piece: null },
          { square: "d4", piece: null },
          { square: "e4", piece: null },
          { square: "f4", piece: null },
          { square: "g4", piece: null },
          { square: "h4", piece: null },
        ],
        [
          { square: "a5", piece: null },
          { square: "b5", piece: null },
          { square: "c5", piece: null },
          { square: "d5", piece: null },
          { square: "e5", piece: null },
          { square: "f5", piece: null },
          { square: "g5", piece: null },
          { square: "h5", piece: null },
        ],
        [
          { square: "a6", piece: null },
          { square: "b6", piece: null },
          { square: "c6", piece: null },
          { square: "d6", piece: null },
          { square: "e6", piece: null },
          { square: "f6", piece: null },
          { square: "g6", piece: null },
          { square: "h6", piece: null },
        ],
        [
          { square: "a7", piece: BLACK_PAWN },
          { square: "b7", piece: BLACK_PAWN },
          { square: "c7", piece: BLACK_PAWN },
          { square: "d7", piece: BLACK_PAWN },
          { square: "e7", piece: BLACK_PAWN },
          { square: "f7", piece: BLACK_PAWN },
          { square: "g7", piece: BLACK_PAWN },
          { square: "h7", piece: BLACK_PAWN },
        ],
        [
          { square: "a8", piece: BLACK_ROOK },
          { square: "b8", piece: BLACK_KNIGHT },
          { square: "c8", piece: BLACK_BISHOP },
          { square: "d8", piece: BLACK_QUEEN },
          { square: "e8", piece: BLACK_KING },
          { square: "f8", piece: BLACK_BISHOP },
          { square: "g8", piece: BLACK_KNIGHT },
          { square: "h8", piece: BLACK_ROOK },
        ],
      ];

      expect(actual).toEqual(expected);
    });
  });
});
