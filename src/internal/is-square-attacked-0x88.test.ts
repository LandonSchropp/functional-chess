import { STARTING_POSITION } from "../constants";
import { parseFen } from "../fen";
import { Fen0x88 } from "../types";
import {
  A2_0x88,
  A3_0x88,
  A6_0x88,
  B1_0x88,
  B2_0x88,
  B3_0x88,
  B4_0x88,
  B5_0x88,
  B6_0x88,
  BLACK_0x88,
  C1_0x88,
  C2_0x88,
  C3_0x88,
  C4_0x88,
  C5_0x88,
  C6_0x88,
  C7_0x88,
  C8_0x88,
  D1_0x88,
  D2_0x88,
  D4_0x88,
  D5_0x88,
  D6_0x88,
  D7_0x88,
  D8_0x88,
  E1_0x88,
  E2_0x88,
  E3_0x88,
  E4_0x88,
  E5_0x88,
  E7_0x88,
  E8_0x88,
  F1_0x88,
  F2_0x88,
  F3_0x88,
  F4_0x88,
  F5_0x88,
  F6_0x88,
  F7_0x88,
  F8_0x88,
  G3_0x88,
  G4_0x88,
  G5_0x88,
  G6_0x88,
  G7_0x88,
  G8_0x88,
  H3_0x88,
  H6_0x88,
  H7_0x88,
  SQUARES_0x88,
  WHITE_0x88,
} from "./constants";
import { isSquareAttacked0x88 } from "./is-square-attacked-0x88";
import { Square0x88 } from "./types";
import { expect, describe, it, beforeEach } from "bun:test";

const WHITE_PAWN_SQUARES: Square0x88[] = [C4_0x88, E4_0x88];

const BLACK_PAWN_SQUARES: Square0x88[] = [D5_0x88, F5_0x88];

const WHITE_KNIGHT_SQUARES: Square0x88[] = [
  C1_0x88,
  E1_0x88,
  B2_0x88,
  F2_0x88,
  B4_0x88,
  F4_0x88,
  C5_0x88,
  E5_0x88,
];

const BLACK_KNIGHT_SQUARES: Square0x88[] = [
  D4_0x88,
  F4_0x88,
  C5_0x88,
  G5_0x88,
  C7_0x88,
  G7_0x88,
  D8_0x88,
  F8_0x88,
];

const WHITE_BISHOP_SQUARES: Square0x88[] = [
  B1_0x88,
  C2_0x88,
  E2_0x88,
  F1_0x88,
  A6_0x88,
  B5_0x88,
  C4_0x88,
  E4_0x88,
  F5_0x88,
  G6_0x88,
  H7_0x88,
];

const BLACK_BISHOP_SQUARES: Square0x88[] = [
  A2_0x88,
  B3_0x88,
  C4_0x88,
  D5_0x88,
  F5_0x88,
  G4_0x88,
  H3_0x88,
  C8_0x88,
  D7_0x88,
  F7_0x88,
  G8_0x88,
];

const WHITE_ROOK_SQUARES: Square0x88[] = [
  D1_0x88,
  D2_0x88,
  D4_0x88,
  D5_0x88,
  D6_0x88,
  D7_0x88,
  D8_0x88,
  A3_0x88,
  B3_0x88,
  C3_0x88,
  E3_0x88,
  F3_0x88,
  G3_0x88,
  H3_0x88,
];

const BLACK_ROOK_SQUARES: Square0x88[] = [
  E1_0x88,
  E2_0x88,
  E3_0x88,
  E4_0x88,
  E5_0x88,
  E7_0x88,
  E8_0x88,
  A6_0x88,
  B6_0x88,
  C6_0x88,
  D6_0x88,
  F6_0x88,
  G6_0x88,
  H6_0x88,
];

const WHITE_QUEEN_SQUARES: Square0x88[] = [...WHITE_BISHOP_SQUARES, ...WHITE_ROOK_SQUARES];

const BLACK_QUEEN_SQUARES: Square0x88[] = [...BLACK_BISHOP_SQUARES, ...BLACK_ROOK_SQUARES];

const WHITE_KING_SQUARES: Square0x88[] = [
  C2_0x88,
  C3_0x88,
  C4_0x88,
  D2_0x88,
  D4_0x88,
  E2_0x88,
  E3_0x88,
  E4_0x88,
];

const BLACK_KING_SQUARES: Square0x88[] = [
  D5_0x88,
  D6_0x88,
  D7_0x88,
  E5_0x88,
  E7_0x88,
  F5_0x88,
  F6_0x88,
  F7_0x88,
];

describe("isSquareAttacked", () => {
  let fen: Fen0x88;

  describe("when the square is not attacked", () => {
    it("returns false", () => {
      fen = parseFen("8/8/8/8/8/8/8/8 w - - 0 1");
      expect(isSquareAttacked0x88(fen, E4_0x88, WHITE_0x88)).toBe(false);

      fen = parseFen(STARTING_POSITION);
      expect(isSquareAttacked0x88(fen, E4_0x88, WHITE_0x88)).toBe(false);
    });
  });

  describe("when the piece is a pawn", () => {
    beforeEach(() => (fen = parseFen("8/8/4p3/8/8/3P4/8/8 w - - 0 1")));

    describe("when the square is attacked by the white pawn", () => {
      it("returns true", () => {
        for (const square of WHITE_PAWN_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the square is not attacked by the white pawn", () => {
      it("returns false", () => {
        const otherSquares = SQUARES_0x88.filter((square) => !WHITE_PAWN_SQUARES.includes(square));

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(false);
        }
      });
    });

    describe("when the square is attacked by the black pawn", () => {
      it("returns true", () => {
        for (const square of BLACK_PAWN_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });

    describe("when the square is not attacked by the black pawn", () => {
      it("returns false", () => {
        const otherSquares = SQUARES_0x88.filter((square) => !BLACK_PAWN_SQUARES.includes(square));

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(false);
        }
      });
    });
  });

  describe("when the piece is a knight", () => {
    beforeEach(() => (fen = parseFen("8/8/4n3/8/8/3N4/8/8 w - - 0 1")));

    describe("when the square is attacked by the white knight", () => {
      it("returns true", () => {
        for (const square of WHITE_KNIGHT_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the square is not attacked by the white knight", () => {
      it("returns false", () => {
        const otherSquares = SQUARES_0x88.filter(
          (square) => !WHITE_KNIGHT_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(false);
        }
      });
    });

    describe("when the square is attacked by the black knight", () => {
      it("returns true", () => {
        for (const square of BLACK_KNIGHT_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });

    describe("when the square is not attacked by the black knight", () => {
      it("returns false", () => {
        const otherSquares = SQUARES_0x88.filter(
          (square) => !BLACK_KNIGHT_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(false);
        }
      });
    });

    describe("when the white knight is blocked by another piece of the same color", () => {
      beforeEach(() => (fen = parseFen("8/8/8/8/2BRB3/2RNR3/2BRB3/8 w - - 0 1")));

      it("returns true for the attacked squares", () => {
        for (const square of WHITE_KNIGHT_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the white knight is blocked by another piece of a different color", () => {
      beforeEach(() => (fen = parseFen("8/8/8/8/2brb3/2rNr3/2brb3/8 w - - 0 1")));

      it("returns true for the attacked squares", () => {
        for (const square of WHITE_KNIGHT_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the black knight is blocked by another piece of the same color", () => {
      beforeEach(() => (fen = parseFen("8/3brb2/3rnr2/3brb2/8/8/8/8 w - - 0 1")));

      it("returns true for the attacked squares", () => {
        for (const square of BLACK_KNIGHT_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });

    describe("when the black knight is blocked by another piece of a different color", () => {
      beforeEach(() => (fen = parseFen("8/3BRB2/3RnR2/3BRB2/8/8/8/8 w - - 0 1")));

      it("returns true for the attacked squares", () => {
        for (const square of BLACK_KNIGHT_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });
  });

  describe("when the piece is a bishop", () => {
    beforeEach(() => (fen = parseFen("8/8/4b3/8/8/3B4/8/8 w - - 0 1")));

    describe("when the square is attacked by the white bishop", () => {
      it("returns true", () => {
        for (const square of WHITE_BISHOP_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the square is not attacked by the white bishop", () => {
      it("returns false", () => {
        const otherSquares = SQUARES_0x88.filter(
          (square) => !WHITE_BISHOP_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(false);
        }
      });
    });

    describe("when the square is attacked by the black bishop", () => {
      it("returns true", () => {
        for (const square of BLACK_BISHOP_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });

    describe("when the square is not attacked by the black bishop", () => {
      it("returns false", () => {
        const otherSquares = SQUARES_0x88.filter(
          (square) => !BLACK_BISHOP_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(false);
        }
      });
    });

    describe("when the white bishop is blocked by another piece of the same color", () => {
      const BLOCKED_SQUARES: Square0x88[] = [C2_0x88, C4_0x88, E2_0x88, E4_0x88];

      beforeEach(() => (fen = parseFen("8/8/8/8/2R1R3/3B4/2R1R3/8 w - - 0 1")));

      it("returns false for the x-rayed squares", () => {
        const otherSquares = WHITE_BISHOP_SQUARES.filter(
          (square) => !BLOCKED_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(false);
        }
      });

      it("returns true for the blocked squares", () => {
        for (const square of BLOCKED_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the white bishop is blocked by another piece of a different color", () => {
      const BLOCKED_SQUARES: Square0x88[] = [C2_0x88, C4_0x88, E2_0x88, E4_0x88];

      beforeEach(() => (fen = parseFen("8/8/8/8/2r1r3/3B4/2r1r3/8 w - - 0 1")));

      it("returns false for the x-rayed squares", () => {
        const otherSquares = WHITE_BISHOP_SQUARES.filter(
          (square) => !BLOCKED_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(false);
        }
      });

      it("returns true for the blocked squares", () => {
        for (const square of BLOCKED_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the black bishop is blocked by another piece of the same color", () => {
      const BLOCKED_SQUARES: Square0x88[] = [D5_0x88, D7_0x88, F5_0x88, F7_0x88];

      beforeEach(() => (fen = parseFen("8/3r1r2/4b3/3r1r2/8/8/8/8 w - - 0 1")));

      it("returns false for the x-rayed squares", () => {
        const otherSquares = BLACK_BISHOP_SQUARES.filter(
          (square) => !BLOCKED_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(false);
        }
      });

      it("returns true for the blocked squares", () => {
        for (const square of BLOCKED_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });

    describe("when the black bishop is blocked by another piece of a different color", () => {
      const BLOCKED_SQUARES: Square0x88[] = [D5_0x88, D7_0x88, F5_0x88, F7_0x88];

      beforeEach(() => (fen = parseFen("8/3R1R2/4b3/3R1R2/8/8/8/8 w - - 0 1")));

      it("returns false for the x-rayed squares", () => {
        const otherSquares = BLACK_BISHOP_SQUARES.filter(
          (square) => !BLOCKED_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(false);
        }
      });

      it("returns true for the blocked squares", () => {
        for (const square of BLOCKED_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });
  });

  describe("when the piece is a rook", () => {
    beforeEach(() => (fen = parseFen("8/8/4r3/8/8/3R4/8/8 w - - 0 1")));

    describe("when the square is attacked by the white rook", () => {
      it("returns true", () => {
        for (const square of WHITE_ROOK_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the square is not attacked by the white rook", () => {
      it("returns false", () => {
        const otherSquares = SQUARES_0x88.filter((square) => !WHITE_ROOK_SQUARES.includes(square));

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(false);
        }
      });
    });

    describe("when the square is attacked by the black rook", () => {
      it("returns true", () => {
        for (const square of BLACK_ROOK_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });

    describe("when the square is not attacked by the black rook", () => {
      it("returns false", () => {
        const otherSquares = SQUARES_0x88.filter((square) => !BLACK_ROOK_SQUARES.includes(square));

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(false);
        }
      });
    });

    describe("when the white rook is blocked by another piece of the same color", () => {
      const BLOCKED_SQUARES: Square0x88[] = [D2_0x88, C3_0x88, E3_0x88, D4_0x88];

      beforeEach(() => (fen = parseFen("8/8/8/8/3B4/2BRB3/3B4/8 w - - 0 1")));

      it("returns false for the x-rayed squares", () => {
        const otherSquares = WHITE_ROOK_SQUARES.filter(
          (square) => !BLOCKED_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(false);
        }
      });

      it("returns true for the blocked squares", () => {
        for (const square of BLOCKED_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the white rook is blocked by another piece of a different color", () => {
      const BLOCKED_SQUARES: Square0x88[] = [D2_0x88, C3_0x88, E3_0x88, D4_0x88];

      beforeEach(() => (fen = parseFen("8/8/8/8/3b4/2bRb3/3b4/8 w - - 0 1")));

      it("returns false for the x-rayed squares", () => {
        const otherSquares = WHITE_ROOK_SQUARES.filter(
          (square) => !BLOCKED_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(false);
        }
      });

      it("returns true for the blocked squares", () => {
        for (const square of BLOCKED_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the black rook is blocked by another piece of the same color", () => {
      const BLOCKED_SQUARES: Square0x88[] = [E5_0x88, D6_0x88, F6_0x88, E7_0x88];

      beforeEach(() => (fen = parseFen("8/4b3/3brb2/4b3/8/8/8/8 w - - 0 1")));

      it("returns false for the x-rayed squares", () => {
        const otherSquares = BLACK_ROOK_SQUARES.filter(
          (square) => !BLOCKED_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(false);
        }
      });

      it("returns true for the blocked squares", () => {
        for (const square of BLOCKED_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });

    describe("when the black rook is blocked by another piece of a different color", () => {
      const BLOCKED_SQUARES: Square0x88[] = [E5_0x88, D6_0x88, F6_0x88, E7_0x88];

      beforeEach(() => (fen = parseFen("8/4B3/3BrB2/4B3/8/8/8/8 w - - 0 1")));

      it("returns false for the x-rayed squares", () => {
        const otherSquares = BLACK_ROOK_SQUARES.filter(
          (square) => !BLOCKED_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(false);
        }
      });

      it("returns true for the blocked squares", () => {
        for (const square of BLOCKED_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });
  });

  describe("when the piece is a queen", () => {
    beforeEach(() => (fen = parseFen("8/8/4q3/8/8/3Q4/8/8 w - - 0 1")));

    describe("when the square is attacked by the white queen", () => {
      it("returns true", () => {
        for (const square of WHITE_QUEEN_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the square is not attacked by the white queen", () => {
      it("returns false", () => {
        const otherSquares = SQUARES_0x88.filter((square) => !WHITE_QUEEN_SQUARES.includes(square));

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(false);
        }
      });
    });

    describe("when the square is attacked by the black queen", () => {
      it("returns true", () => {
        for (const square of BLACK_QUEEN_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });

    describe("when the square is not attacked by the black queen", () => {
      it("returns false", () => {
        const otherSquares = SQUARES_0x88.filter((square) => !BLACK_QUEEN_SQUARES.includes(square));

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(false);
        }
      });
    });

    describe("when the white queen is blocked by another piece of the same color", () => {
      const BLOCKED_SQUARES: Square0x88[] = [
        C2_0x88,
        C3_0x88,
        C4_0x88,
        D2_0x88,
        D4_0x88,
        E2_0x88,
        E3_0x88,
        E4_0x88,
      ];

      beforeEach(() => (fen = parseFen("8/8/8/8/2RBR3/2BQB3/2RBR3/8 w - - 0 1")));

      it("returns false for the x-rayed squares", () => {
        const otherSquares = WHITE_QUEEN_SQUARES.filter(
          (square) => !BLOCKED_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(false);
        }
      });

      it("returns true for the blocked squares", () => {
        for (const square of BLOCKED_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the white queen is blocked by another piece of a different color", () => {
      const BLOCKED_SQUARES: Square0x88[] = [
        C2_0x88,
        C3_0x88,
        C4_0x88,
        D2_0x88,
        D4_0x88,
        E2_0x88,
        E3_0x88,
        E4_0x88,
      ];

      beforeEach(() => (fen = parseFen("8/8/8/8/2rbr3/2bQb3/2rbr3/8 w - - 0 1")));

      it("returns false for the x-rayed squares", () => {
        const otherSquares = WHITE_QUEEN_SQUARES.filter(
          (square) => !BLOCKED_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(false);
        }
      });

      it("returns true for the blocked squares", () => {
        for (const square of BLOCKED_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the black queen is blocked by another piece of the same color", () => {
      const BLOCKED_SQUARES: Square0x88[] = [
        D5_0x88,
        D6_0x88,
        D7_0x88,
        E5_0x88,
        E7_0x88,
        F5_0x88,
        F6_0x88,
        F7_0x88,
      ];

      beforeEach(() => (fen = parseFen("8/3rbr2/3bqb2/3rbr2/8/8/8/8 w - - 0 1")));

      it("returns false for the x-rayed squares", () => {
        const otherSquares = BLACK_QUEEN_SQUARES.filter(
          (square) => !BLOCKED_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(false);
        }
      });

      it("returns true for the blocked squares", () => {
        for (const square of BLOCKED_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });

    describe("when the black queen is blocked by another piece of a different color", () => {
      const BLOCKED_SQUARES: Square0x88[] = [
        D5_0x88,
        D6_0x88,
        D7_0x88,
        E5_0x88,
        E7_0x88,
        F5_0x88,
        F6_0x88,
        F7_0x88,
      ];

      beforeEach(() => (fen = parseFen("8/3RBR2/3BqB2/3RBR2/8/8/8/8 w - - 0 1")));

      it("returns false for the x-rayed squares", () => {
        const otherSquares = BLACK_QUEEN_SQUARES.filter(
          (square) => !BLOCKED_SQUARES.includes(square),
        );

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(false);
        }
      });

      it("returns true for the blocked squares", () => {
        for (const square of BLOCKED_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });
  });

  describe("when the piece is a king", () => {
    beforeEach(() => (fen = parseFen("8/8/4k3/8/8/3K4/8/8 w - - 0 1")));

    describe("when the square is attacked by the white king", () => {
      it("returns true", () => {
        for (const square of WHITE_KING_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(true);
        }
      });
    });

    describe("when the square is not attacked by the white king", () => {
      it("returns false", () => {
        const otherSquares = SQUARES_0x88.filter((square) => !WHITE_KING_SQUARES.includes(square));

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, WHITE_0x88)).toBe(false);
        }
      });
    });

    describe("when the square is attacked by the black king", () => {
      it("returns true", () => {
        for (const square of BLACK_KING_SQUARES) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(true);
        }
      });
    });

    describe("when the square is not attacked by the black king", () => {
      it("returns false", () => {
        const otherSquares = SQUARES_0x88.filter((square) => !BLACK_KING_SQUARES.includes(square));

        for (const square of otherSquares) {
          expect(isSquareAttacked0x88(fen, square, BLACK_0x88)).toBe(false);
        }
      });
    });
  });
});
