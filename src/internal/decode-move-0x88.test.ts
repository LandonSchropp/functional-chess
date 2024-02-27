import { A8_0x88, H1_0x88, NO_PIECE_0x88, WHITE_QUEEN_0x88 } from "./constants";
import {
  CAPTURE_FLAG_0x88,
  CASTLE_FLAG_0x88,
  DOUBLE_PAWN_FLAG_0x88,
  EN_PASSANT_FLAG_0x88,
} from "./constants/moves";
import { decodeMove0x88 } from "./decode-move-0x88";
import { encodeMove0x88 } from "./encode-move-0x88";
import { expect, describe, it } from "bun:test";

describe("decodeMove0x88", () => {
  describe("when the mvoe has no flags", () => {
    it("decodes the move", () => {
      const move = encodeMove0x88(A8_0x88, H1_0x88, NO_PIECE_0x88);
      expect(decodeMove0x88(move)).toEqual([A8_0x88, H1_0x88, NO_PIECE_0x88, 0]);
    });
  });

  describe("when the move is a promotion", () => {
    it("decodes the promotion in the move", () => {
      const move = encodeMove0x88(A8_0x88, H1_0x88, WHITE_QUEEN_0x88);
      expect(decodeMove0x88(move)).toEqual([A8_0x88, H1_0x88, WHITE_QUEEN_0x88, 0]);
    });
  });

  describe("when the move is a capture", () => {
    it("decodes the capture in the move", () => {
      const move = encodeMove0x88(A8_0x88, H1_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88);
      expect(decodeMove0x88(move)).toEqual([A8_0x88, H1_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88]);
    });
  });

  describe("when the move is a double pawn move", () => {
    it("decodes the double pawn move in the move", () => {
      const move = encodeMove0x88(A8_0x88, H1_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88);
      expect(decodeMove0x88(move)).toEqual([
        A8_0x88,
        H1_0x88,
        NO_PIECE_0x88,
        DOUBLE_PAWN_FLAG_0x88,
      ]);
    });
  });

  describe("when the move is an en passant capture", () => {
    it("decodes the en passant capture in the move", () => {
      const move = encodeMove0x88(A8_0x88, H1_0x88, NO_PIECE_0x88, EN_PASSANT_FLAG_0x88);
      expect(decodeMove0x88(move)).toEqual([A8_0x88, H1_0x88, NO_PIECE_0x88, EN_PASSANT_FLAG_0x88]);
    });
  });

  describe("when the move is a castle", () => {
    it("decodes the castle in the move", () => {
      const move = encodeMove0x88(A8_0x88, H1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88);
      expect(decodeMove0x88(move)).toEqual([A8_0x88, H1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88]);
    });
  });
});
