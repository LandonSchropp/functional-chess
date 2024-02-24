import {
  BLACK_0x88,
  BLACK_PAWN_0x88,
  EMPTY_PIECE_0x88,
  PIECES_0x88,
  WHITE_0x88,
  WHITE_KING_0x88,
} from "./constants";
import { isPieceColor0x88 } from "./is-piece-color-0x88";
import { expect, describe, it } from "bun:test";

describe("isPieceColor0x88", () => {
  describe("when the provided color white", () => {
    describe("when the piece is empty", () => {
      it("returns false", () => {
        expect(isPieceColor0x88(EMPTY_PIECE_0x88, WHITE_0x88)).toBe(false);
      });
    });

    describe("when the piece is white", () => {
      it("returns true", () => {
        PIECES_0x88.forEach((piece) => {
          if (piece <= WHITE_KING_0x88) {
            expect(isPieceColor0x88(piece, WHITE_0x88)).toBe(true);
          }
        });
      });
    });

    describe("when the piece is black", () => {
      it("returns false", () => {
        PIECES_0x88.forEach((piece) => {
          if (piece >= BLACK_PAWN_0x88) {
            expect(isPieceColor0x88(piece, WHITE_0x88)).toBe(false);
          }
        });
      });
    });
  });

  describe("when the provided color black", () => {
    describe("when the piece is empty", () => {
      it("returns false", () => {
        expect(isPieceColor0x88(EMPTY_PIECE_0x88, BLACK_0x88)).toBe(false);
      });
    });

    describe("when the piece is white", () => {
      it("returns false", () => {
        PIECES_0x88.forEach((piece) => {
          if (piece <= WHITE_KING_0x88) {
            expect(isPieceColor0x88(piece, BLACK_0x88)).toBe(false);
          }
        });
      });
    });

    describe("when the piece is black", () => {
      it("returns true", () => {
        PIECES_0x88.forEach((piece) => {
          if (piece >= BLACK_PAWN_0x88) {
            expect(isPieceColor0x88(piece, BLACK_0x88)).toBe(true);
          }
        });
      });
    });
  });
});
