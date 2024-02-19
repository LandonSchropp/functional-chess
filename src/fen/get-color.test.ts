import { STARTING_POSITION, WHITE, BLACK } from "../constants";
import { parseFen } from "../fen";
import { getColor } from "../fen/get-color";
import { expect, it, describe } from "bun:test";

const KINGS_PAWN_OPENING = "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 1 1";

describe("getColor", () => {
  describe("when the FEN's color is white", () => {
    it("returns white", () => {
      expect(getColor(STARTING_POSITION)).toEqual(WHITE);
    });
  });

  describe("when the FEN's color is black", () => {
    it("returns black", () => {
      expect(getColor(KINGS_PAWN_OPENING)).toEqual(BLACK);
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("returns the active color for the FEN", () => {
      expect(getColor(parseFen(STARTING_POSITION))).toEqual(WHITE);
    });
  });
});
