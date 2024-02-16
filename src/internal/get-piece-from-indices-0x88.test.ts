import { STARTING_POSITION } from "../constants";
import { parseFen } from "../fen";
import { EMPTY_SQUARE_0x88, WHITE_ROOK_0x88 } from "./constants";
import { getPieceFromIndices0x88 } from "./get-piece-from-indices-0x88";
import { describe, expect, it } from "bun:test";

const BOARD = parseFen(STARTING_POSITION)[0];

describe("getPieceFromIndices", () => {
  describe("when the square contains a piece", () => {
    it("should return the piece", () => {
      expect(getPieceFromIndices0x88(BOARD, 0, 0)).toBe(WHITE_ROOK_0x88);
    });

    describe("when the square is empty", () => {
      expect(getPieceFromIndices0x88(BOARD, 2, 0)).toBe(EMPTY_SQUARE_0x88);
    });

    describe("when the square is off the board", () => {
      expect(() => getPieceFromIndices0x88(BOARD, 8, 8)).toThrow(Error);
    });
  });
});
