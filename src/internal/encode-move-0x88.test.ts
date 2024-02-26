import { A8_0x88, H1_0x88, NO_PIECE_0x88, WHITE_QUEEN_0x88 } from "./constants";
import { encodeMove0x88 } from "./encode-move-0x88";
import { expect, describe, it } from "bun:test";

describe("encodeMove0x88", () => {
  describe("when the mvoe has no flags", () => {
    it("encodes the move", () => {
      const move = encodeMove0x88(A8_0x88, H1_0x88, NO_PIECE_0x88, false, false, false, false);
      expect(move).toBe(0b0000_0000_0000_0000_0000_0111_0111_0000);
    });
  });

  describe("when the move is a promotion", () => {
    it("encodes the promotion in the move", () => {
      const move = encodeMove0x88(A8_0x88, H1_0x88, WHITE_QUEEN_0x88, false, false, false, false);
      expect(move).toBe(0b0000_0000_0100_0001_0000_0111_0111_0000);
    });
  });

  describe("when the move is a capture", () => {
    it("encodes the capture in the move", () => {
      const move = encodeMove0x88(A8_0x88, H1_0x88, NO_PIECE_0x88, true, false, false, false);
      expect(move).toBe(0b0000_0001_0000_0000_0000_0111_0111_0000);
    });
  });

  describe("when the move is a double pawn move", () => {
    it("encodes the double pawn move in the move", () => {
      const move = encodeMove0x88(A8_0x88, H1_0x88, NO_PIECE_0x88, false, true, false, false);
      expect(move).toBe(0b0000_0010_0000_0000_0000_0111_0111_0000);
    });
  });

  describe("when the move is an en passant capture", () => {
    it("encodes the en passant capture in the move", () => {
      const move = encodeMove0x88(A8_0x88, H1_0x88, NO_PIECE_0x88, false, false, true, false);
      expect(move).toBe(0b0000_0100_0000_0000_0000_0111_0111_0000);
    });
  });

  describe("when the move is a castle", () => {
    it("encodes the castle in the move", () => {
      const move = encodeMove0x88(A8_0x88, H1_0x88, NO_PIECE_0x88, false, false, false, true);
      expect(move).toBe(0b0000_1000_0000_0000_0000_0111_0111_0000);
    });
  });
});
