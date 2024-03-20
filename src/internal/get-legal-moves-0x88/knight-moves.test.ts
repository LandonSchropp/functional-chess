import { parseFen } from "../../fen";
import {
  A1_0x88,
  A4_0x88,
  A5_0x88,
  A8_0x88,
  B2_0x88,
  B3_0x88,
  B6_0x88,
  B7_0x88,
  C2_0x88,
  C3_0x88,
  C4_0x88,
  C5_0x88,
  C6_0x88,
  C7_0x88,
  D2_0x88,
  D3_0x88,
  D6_0x88,
  D7_0x88,
  E4_0x88,
  E5_0x88,
  F2_0x88,
  F3_0x88,
  F6_0x88,
  F7_0x88,
  G3_0x88,
  G4_0x88,
  G5_0x88,
  G6_0x88,
  NO_PIECE_0x88,
} from "../constants";
import { CAPTURE_FLAG_0x88 } from "../constants/moves";
import { encodeMove0x88 } from "../encode-move-0x88";
import { getLegalMoves0x88 } from "../get-legal-moves-0x88";
import { expect, describe, it } from "bun:test";

describe("getLegalMoves0x88 (knight moves)", () => {
  describe("when the knight is in the center of the board", () => {
    describe("when the sqaures are empty", () => {
      describe("when the player is white", () => {
        it("returns the knight moves", () => {
          const fen = parseFen("7k/8/8/4n3/4N3/8/8/7K w - - 0 1");

          expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([
            encodeMove0x88(E4_0x88, D6_0x88),
            encodeMove0x88(E4_0x88, F6_0x88),
            encodeMove0x88(E4_0x88, C5_0x88),
            encodeMove0x88(E4_0x88, G5_0x88),
            encodeMove0x88(E4_0x88, C3_0x88),
            encodeMove0x88(E4_0x88, G3_0x88),
            encodeMove0x88(E4_0x88, D2_0x88),
            encodeMove0x88(E4_0x88, F2_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("returns the knight moves", () => {
          const fen = parseFen("7k/8/8/4n3/4N3/8/8/7K b - - 0 1");

          expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([
            encodeMove0x88(E5_0x88, D7_0x88),
            encodeMove0x88(E5_0x88, F7_0x88),
            encodeMove0x88(E5_0x88, C6_0x88),
            encodeMove0x88(E5_0x88, G6_0x88),
            encodeMove0x88(E5_0x88, C4_0x88),
            encodeMove0x88(E5_0x88, G4_0x88),
            encodeMove0x88(E5_0x88, D3_0x88),
            encodeMove0x88(E5_0x88, F3_0x88),
          ]);
        });
      });
    });

    describe("when the squares are occupied by the opponent", () => {
      describe("when the player is white", () => {
        it("returns the knight moves", () => {
          const fen = parseFen("7k/3R1R2/2Rr1rR1/2r1n1r1/2R1N1R1/2rR1Rr1/3r1r2/7K w - - 0 1");

          expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([
            encodeMove0x88(E4_0x88, D6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, F6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, C5_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, G5_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, C3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, G3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, D2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, F2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("returns the knight moves", () => {
          const fen = parseFen("7k/3R1R2/2Rr1rR1/2r1n1r1/2R1N1R1/2rR1Rr1/3r1r2/7K b - - 0 1");

          expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([
            encodeMove0x88(E5_0x88, D7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, F7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, C6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, G6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, C4_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, G4_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, D3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, F3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });
    });

    describe("when the squares are occupied by the player", () => {
      describe("when the player is white", () => {
        it("returns an empty array", () => {
          const fen = parseFen("7k/3r1r2/2rR1Rr1/2R1n1R1/2r1N1r1/2Rr1rR1/3R1R2/7K w - - 0 1");

          expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([]);
        });
      });

      describe("when the player is black", () => {
        it("returns an empty array", () => {
          const fen = parseFen("7k/3r1r2/2rR1Rr1/2R1n1R1/2r1N1r1/2Rr1rR1/3R1R2/7K b - - 0 1");

          expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([]);
        });
      });
    });
  });

  describe("when the knight is on the edge of the board", () => {
    describe("when the sqaures are empty", () => {
      describe("when the player is white", () => {
        it("returns the knight moves", () => {
          const fen = parseFen("7k/8/8/n7/N7/8/8/7K w - - 0 1");

          expect(getLegalMoves0x88(fen, A4_0x88)).toMatchMoves([
            encodeMove0x88(A4_0x88, B2_0x88),
            encodeMove0x88(A4_0x88, C3_0x88),
            encodeMove0x88(A4_0x88, C5_0x88),
            encodeMove0x88(A4_0x88, B6_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("returns the knight moves", () => {
          const fen = parseFen("7k/8/8/n7/N7/8/8/7K b - - 0 1");

          expect(getLegalMoves0x88(fen, A5_0x88)).toMatchMoves([
            encodeMove0x88(A5_0x88, B3_0x88),
            encodeMove0x88(A5_0x88, C4_0x88),
            encodeMove0x88(A5_0x88, C6_0x88),
            encodeMove0x88(A5_0x88, B7_0x88),
          ]);
        });
      });
    });

    describe("when the squares are occupied by the opponent", () => {
      describe("when the player is white", () => {
        it("returns the knight moves", () => {
          const fen = parseFen("7k/1R6/1rR5/n1r5/N1R5/1Rr5/1r6/7K w - - 0 1");

          expect(getLegalMoves0x88(fen, A4_0x88)).toMatchMoves([
            encodeMove0x88(A4_0x88, B2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(A4_0x88, C3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(A4_0x88, C5_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(A4_0x88, B6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("returns the knight moves", () => {
          const fen = parseFen("7k/1R6/1rR5/n1r5/N1R5/1Rr5/1r6/7K b - - 0 1");

          expect(getLegalMoves0x88(fen, A5_0x88)).toMatchMoves([
            encodeMove0x88(A5_0x88, B3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(A5_0x88, C4_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(A5_0x88, C6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(A5_0x88, B7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });
    });

    describe("when the squares are occupied by the player", () => {
      describe("when the player is white", () => {
        it("returns an empty array", () => {
          const fen = parseFen("7k/1r6/1Rr5/n1R5/N1r5/1rR5/1R6/7K w - - 0 1");

          expect(getLegalMoves0x88(fen, A4_0x88)).toMatchMoves([]);
        });
      });

      describe("when the player is black", () => {
        it("returns an empty array", () => {
          const fen = parseFen("7k/1r6/1Rr5/n1R5/N1r5/1rR5/1R6/7K b - - 0 1");

          expect(getLegalMoves0x88(fen, A5_0x88)).toMatchMoves([]);
        });
      });
    });
  });

  describe("when the knight is in the corner of the board", () => {
    describe("when the sqaures are empty", () => {
      describe("when the player is white", () => {
        it("returns the knight moves", () => {
          const fen = parseFen("n6k/8/8/8/8/8/8/N6K w - - 0 1");

          expect(getLegalMoves0x88(fen, A1_0x88)).toMatchMoves([
            encodeMove0x88(A1_0x88, B3_0x88),
            encodeMove0x88(A1_0x88, C2_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("returns the knight moves", () => {
          const fen = parseFen("n6k/8/8/8/8/8/8/N6K b - - 0 1");

          expect(getLegalMoves0x88(fen, A8_0x88)).toMatchMoves([
            encodeMove0x88(A8_0x88, B6_0x88),
            encodeMove0x88(A8_0x88, C7_0x88),
          ]);
        });
      });
    });

    describe("when the squares are occupied by the opponent", () => {
      describe("when the player is white", () => {
        it("returns the knight moves", () => {
          const fen = parseFen("n6k/2R5/1R6/8/8/1r6/2r5/N6K w - - 0 1");

          expect(getLegalMoves0x88(fen, A1_0x88)).toMatchMoves([
            encodeMove0x88(A1_0x88, B3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(A1_0x88, C2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("returns the knight moves", () => {
          const fen = parseFen("n6k/2R5/1R6/8/8/1r6/2r5/N6K b - - 0 1");

          expect(getLegalMoves0x88(fen, A8_0x88)).toMatchMoves([
            encodeMove0x88(A8_0x88, B6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(A8_0x88, C7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });
    });

    describe("when the squares are occupied by the player", () => {
      describe("when the player is white", () => {
        it("returns an empty array", () => {
          const fen = parseFen("n6k/2r5/1r6/8/8/1R6/2R5/N6K w - - 0 1");

          expect(getLegalMoves0x88(fen, A1_0x88)).toMatchMoves([]);
        });
      });

      describe("when the player is black", () => {
        it("returns an empty array", () => {
          const fen = parseFen("n6k/2r5/1r6/8/8/1R6/2R5/N6K b - - 0 1");

          expect(getLegalMoves0x88(fen, A8_0x88)).toMatchMoves([]);
        });
      });
    });
  });
});
