import { STARTING_POSITION, WHITE_KINGSIDE, EMPTY_POSITION, BLACK_KINGSIDE } from "../constants";
import { getCastlingRight } from "../fen/get-castling-right";
import { parseFen } from "./parse-fen";
import { expect, it, describe } from "bun:test";

const FEN = STARTING_POSITION.replace("kq", "");

describe("getCastlingRight", () => {
  describe("when the provided side can castle", () => {
    it("returns true", () => {
      expect(getCastlingRight(FEN, WHITE_KINGSIDE)).toEqual(true);
    });
  });

  describe("when the provided side cannot castle", () => {
    it("returns false", () => {
      expect(getCastlingRight(FEN, BLACK_KINGSIDE)).toEqual(false);
    });
  });

  describe("when none of the sides can castle", () => {
    it("returns false", () => {
      expect(getCastlingRight(EMPTY_POSITION, WHITE_KINGSIDE)).toEqual(false);
    });
  });

  describe("when the fen is a Fen0x88", () => {
    it("returns the castling right", () => {
      expect(getCastlingRight(parseFen(FEN), WHITE_KINGSIDE)).toEqual(true);
    });
  });
});
