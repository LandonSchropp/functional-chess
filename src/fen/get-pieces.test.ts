import { describe, expect, it } from "bun:test";
import { prop, sortBy } from "remeda";
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
import { getPieces } from "./get-pieces";

describe("getPiecesFromFen", () => {
  describe("when the pieces is empty", () => {
    it("returns an empty array", () => {
      expect(getPieces(EMPTY_POSITION)).toEqual([]);
    });
  });

  describe("when the pieces is not empty", () => {
    it("returns a 2D array reprsenting the position", () => {
      let actual = getPieces(STARTING_POSITION);

      let expected: typeof actual = [
        { square: "a1", piece: WHITE_ROOK },
        { square: "b1", piece: WHITE_KNIGHT },
        { square: "c1", piece: WHITE_BISHOP },
        { square: "d1", piece: WHITE_QUEEN },
        { square: "e1", piece: WHITE_KING },
        { square: "f1", piece: WHITE_BISHOP },
        { square: "g1", piece: WHITE_KNIGHT },
        { square: "h1", piece: WHITE_ROOK },
        { square: "a2", piece: WHITE_PAWN },
        { square: "b2", piece: WHITE_PAWN },
        { square: "c2", piece: WHITE_PAWN },
        { square: "d2", piece: WHITE_PAWN },
        { square: "e2", piece: WHITE_PAWN },
        { square: "f2", piece: WHITE_PAWN },
        { square: "g2", piece: WHITE_PAWN },
        { square: "h2", piece: WHITE_PAWN },
        { square: "a7", piece: BLACK_PAWN },
        { square: "b7", piece: BLACK_PAWN },
        { square: "c7", piece: BLACK_PAWN },
        { square: "d7", piece: BLACK_PAWN },
        { square: "e7", piece: BLACK_PAWN },
        { square: "f7", piece: BLACK_PAWN },
        { square: "g7", piece: BLACK_PAWN },
        { square: "h7", piece: BLACK_PAWN },
        { square: "a8", piece: BLACK_ROOK },
        { square: "b8", piece: BLACK_KNIGHT },
        { square: "c8", piece: BLACK_BISHOP },
        { square: "d8", piece: BLACK_QUEEN },
        { square: "e8", piece: BLACK_KING },
        { square: "f8", piece: BLACK_BISHOP },
        { square: "g8", piece: BLACK_KNIGHT },
        { square: "h8", piece: BLACK_ROOK },
      ];

      // TODO: This can be updated when Bun supports jest-extended's `toIncludeSameMembers`.
      actual = sortBy(actual, prop("square"));
      expected = sortBy(expected, prop("square"));

      expect(actual).toEqual(expected);
    });
  });
});
