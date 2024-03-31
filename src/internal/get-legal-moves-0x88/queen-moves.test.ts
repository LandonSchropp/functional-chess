import { parseFen } from "../../fen";
import {
  A1_0x88,
  A4_0x88,
  A5_0x88,
  A8_0x88,
  B1_0x88,
  B2_0x88,
  B4_0x88,
  B5_0x88,
  B7_0x88,
  B8_0x88,
  C1_0x88,
  C2_0x88,
  C3_0x88,
  C4_0x88,
  C5_0x88,
  C6_0x88,
  C7_0x88,
  C8_0x88,
  D1_0x88,
  D3_0x88,
  D4_0x88,
  D5_0x88,
  D6_0x88,
  D8_0x88,
  E1_0x88,
  E2_0x88,
  E3_0x88,
  E4_0x88,
  E5_0x88,
  E6_0x88,
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
  G1_0x88,
  G2_0x88,
  G3_0x88,
  G4_0x88,
  G5_0x88,
  G6_0x88,
  G7_0x88,
  G8_0x88,
  H1_0x88,
  H2_0x88,
  H3_0x88,
  H4_0x88,
  H5_0x88,
  H6_0x88,
  H7_0x88,
  H8_0x88,
  NO_PIECE_0x88,
} from "../constants";
import { CAPTURE_FLAG_0x88 } from "../constants/moves";
import { encodeMove0x88 } from "../encode-move-0x88";
import { getLegalMoves0x88 } from "../get-legal-moves-0x88";
import { expect, describe, it } from "bun:test";

describe("getLegalMoves0x88 (queen moves)", () => {
  describe("when the queen is in the center of the board", () => {
    describe("when the target squares are not blocked", () => {
      describe("when the player is white", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/8/4Q3/K7/8/8 w - - 0 1");

          expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([
            encodeMove0x88(E4_0x88, B1_0x88),
            encodeMove0x88(E4_0x88, C2_0x88),
            encodeMove0x88(E4_0x88, D3_0x88),
            encodeMove0x88(E4_0x88, F5_0x88),
            encodeMove0x88(E4_0x88, G6_0x88),
            encodeMove0x88(E4_0x88, H7_0x88),
            encodeMove0x88(E4_0x88, A8_0x88),
            encodeMove0x88(E4_0x88, B7_0x88),
            encodeMove0x88(E4_0x88, C6_0x88),
            encodeMove0x88(E4_0x88, D5_0x88),
            encodeMove0x88(E4_0x88, F3_0x88),
            encodeMove0x88(E4_0x88, G2_0x88),
            encodeMove0x88(E4_0x88, H1_0x88),
            encodeMove0x88(E4_0x88, E1_0x88),
            encodeMove0x88(E4_0x88, E2_0x88),
            encodeMove0x88(E4_0x88, E3_0x88),
            encodeMove0x88(E4_0x88, E5_0x88),
            encodeMove0x88(E4_0x88, E6_0x88),
            encodeMove0x88(E4_0x88, E7_0x88),
            encodeMove0x88(E4_0x88, E8_0x88),
            encodeMove0x88(E4_0x88, A4_0x88),
            encodeMove0x88(E4_0x88, B4_0x88),
            encodeMove0x88(E4_0x88, C4_0x88),
            encodeMove0x88(E4_0x88, D4_0x88),
            encodeMove0x88(E4_0x88, F4_0x88),
            encodeMove0x88(E4_0x88, G4_0x88),
            encodeMove0x88(E4_0x88, H4_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/4q3/8/K7/8/8 b - - 0 1");

          expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([
            encodeMove0x88(E5_0x88, A1_0x88),
            encodeMove0x88(E5_0x88, B2_0x88),
            encodeMove0x88(E5_0x88, C3_0x88),
            encodeMove0x88(E5_0x88, D4_0x88),
            encodeMove0x88(E5_0x88, F6_0x88),
            encodeMove0x88(E5_0x88, G7_0x88),
            encodeMove0x88(E5_0x88, H8_0x88),
            encodeMove0x88(E5_0x88, B8_0x88),
            encodeMove0x88(E5_0x88, C7_0x88),
            encodeMove0x88(E5_0x88, D6_0x88),
            encodeMove0x88(E5_0x88, F4_0x88),
            encodeMove0x88(E5_0x88, G3_0x88),
            encodeMove0x88(E5_0x88, H2_0x88),
            encodeMove0x88(E5_0x88, E1_0x88),
            encodeMove0x88(E5_0x88, E2_0x88),
            encodeMove0x88(E5_0x88, E3_0x88),
            encodeMove0x88(E5_0x88, E4_0x88),
            encodeMove0x88(E5_0x88, E6_0x88),
            encodeMove0x88(E5_0x88, E7_0x88),
            encodeMove0x88(E5_0x88, E8_0x88),
            encodeMove0x88(E5_0x88, A5_0x88),
            encodeMove0x88(E5_0x88, B5_0x88),
            encodeMove0x88(E5_0x88, C5_0x88),
            encodeMove0x88(E5_0x88, D5_0x88),
            encodeMove0x88(E5_0x88, F5_0x88),
            encodeMove0x88(E5_0x88, G5_0x88),
            encodeMove0x88(E5_0x88, H5_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the opponent", () => {
      describe("when the player is white", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("8/8/k1b1b1b1/8/2b1Q1b1/K7/2b1b1b1/8 w - - 0 1");

          expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([
            encodeMove0x88(E4_0x88, C2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, D3_0x88),
            encodeMove0x88(E4_0x88, F5_0x88),
            encodeMove0x88(E4_0x88, G6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, C6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, D5_0x88),
            encodeMove0x88(E4_0x88, F3_0x88),
            encodeMove0x88(E4_0x88, G2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, E2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, E3_0x88),
            encodeMove0x88(E4_0x88, E5_0x88),
            encodeMove0x88(E4_0x88, E6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, C4_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, D4_0x88),
            encodeMove0x88(E4_0x88, F4_0x88),
            encodeMove0x88(E4_0x88, G4_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("8/2B1B1B1/k7/2B1q1B1/8/K1B1B1B1/8/8 b - - 0 1");

          expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([
            encodeMove0x88(E5_0x88, C3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, D4_0x88),
            encodeMove0x88(E5_0x88, F6_0x88),
            encodeMove0x88(E5_0x88, G7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, C7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, D6_0x88),
            encodeMove0x88(E5_0x88, F4_0x88),
            encodeMove0x88(E5_0x88, G3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, E3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, E4_0x88),
            encodeMove0x88(E5_0x88, E6_0x88),
            encodeMove0x88(E5_0x88, E7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, C5_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, D5_0x88),
            encodeMove0x88(E5_0x88, F5_0x88),
            encodeMove0x88(E5_0x88, G5_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the player", () => {
      describe("when the player is white", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("8/8/k1N1N1N1/8/2N1Q1N1/K7/2N1N1N1/8 w - - 0 1");

          expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([
            encodeMove0x88(E4_0x88, D3_0x88),
            encodeMove0x88(E4_0x88, F5_0x88),
            encodeMove0x88(E4_0x88, D5_0x88),
            encodeMove0x88(E4_0x88, F3_0x88),
            encodeMove0x88(E4_0x88, E3_0x88),
            encodeMove0x88(E4_0x88, E5_0x88),
            encodeMove0x88(E4_0x88, D4_0x88),
            encodeMove0x88(E4_0x88, F4_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("8/2n1n1n1/k7/2n1q1n1/8/K1n1n1n1/8/8 b - - 0 1");

          expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([
            encodeMove0x88(E5_0x88, D4_0x88),
            encodeMove0x88(E5_0x88, F6_0x88),
            encodeMove0x88(E5_0x88, D6_0x88),
            encodeMove0x88(E5_0x88, F4_0x88),
            encodeMove0x88(E5_0x88, E4_0x88),
            encodeMove0x88(E5_0x88, E6_0x88),
            encodeMove0x88(E5_0x88, D5_0x88),
            encodeMove0x88(E5_0x88, F5_0x88),
          ]);
        });
      });
    });
  });

  describe("when the queen is on the edge of the board", () => {
    describe("when the target squares are not blocked", () => {
      describe("when the player is white", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/8/7Q/K7/8/8 w - - 0 1");

          expect(getLegalMoves0x88(fen, H4_0x88)).toMatchMoves([
            encodeMove0x88(H4_0x88, E1_0x88),
            encodeMove0x88(H4_0x88, F2_0x88),
            encodeMove0x88(H4_0x88, G3_0x88),
            encodeMove0x88(H4_0x88, D8_0x88),
            encodeMove0x88(H4_0x88, E7_0x88),
            encodeMove0x88(H4_0x88, F6_0x88),
            encodeMove0x88(H4_0x88, G5_0x88),
            encodeMove0x88(H4_0x88, H1_0x88),
            encodeMove0x88(H4_0x88, H2_0x88),
            encodeMove0x88(H4_0x88, H3_0x88),
            encodeMove0x88(H4_0x88, H5_0x88),
            encodeMove0x88(H4_0x88, H6_0x88),
            encodeMove0x88(H4_0x88, H7_0x88),
            encodeMove0x88(H4_0x88, H8_0x88),
            encodeMove0x88(H4_0x88, A4_0x88),
            encodeMove0x88(H4_0x88, B4_0x88),
            encodeMove0x88(H4_0x88, C4_0x88),
            encodeMove0x88(H4_0x88, D4_0x88),
            encodeMove0x88(H4_0x88, E4_0x88),
            encodeMove0x88(H4_0x88, F4_0x88),
            encodeMove0x88(H4_0x88, G4_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/7q/8/K7/8/8 b - - 0 1");

          expect(getLegalMoves0x88(fen, H5_0x88)).toMatchMoves([
            encodeMove0x88(H5_0x88, E8_0x88),
            encodeMove0x88(H5_0x88, F7_0x88),
            encodeMove0x88(H5_0x88, G6_0x88),
            encodeMove0x88(H5_0x88, D1_0x88),
            encodeMove0x88(H5_0x88, E2_0x88),
            encodeMove0x88(H5_0x88, F3_0x88),
            encodeMove0x88(H5_0x88, G4_0x88),
            encodeMove0x88(H5_0x88, H1_0x88),
            encodeMove0x88(H5_0x88, H2_0x88),
            encodeMove0x88(H5_0x88, H3_0x88),
            encodeMove0x88(H5_0x88, H4_0x88),
            encodeMove0x88(H5_0x88, H6_0x88),
            encodeMove0x88(H5_0x88, H7_0x88),
            encodeMove0x88(H5_0x88, H8_0x88),
            encodeMove0x88(H5_0x88, A5_0x88),
            encodeMove0x88(H5_0x88, B5_0x88),
            encodeMove0x88(H5_0x88, C5_0x88),
            encodeMove0x88(H5_0x88, D5_0x88),
            encodeMove0x88(H5_0x88, E5_0x88),
            encodeMove0x88(H5_0x88, F5_0x88),
            encodeMove0x88(H5_0x88, G5_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the opponent", () => {
      describe("when the player is white", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("8/8/k4n1n/8/5n1Q/K7/5n1n/8 w - - 0 1");

          expect(getLegalMoves0x88(fen, H4_0x88)).toMatchMoves([
            encodeMove0x88(H4_0x88, F2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H4_0x88, G3_0x88),
            encodeMove0x88(H4_0x88, F6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H4_0x88, G5_0x88),
            encodeMove0x88(H4_0x88, H2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H4_0x88, H3_0x88),
            encodeMove0x88(H4_0x88, H5_0x88),
            encodeMove0x88(H4_0x88, H6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H4_0x88, F4_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H4_0x88, G4_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("8/5N1N/k7/5N1q/8/K4N1N/8/8 b - - 0 1");

          expect(getLegalMoves0x88(fen, H5_0x88)).toMatchMoves([
            encodeMove0x88(H5_0x88, F7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H5_0x88, G6_0x88),
            encodeMove0x88(H5_0x88, F3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H5_0x88, G4_0x88),
            encodeMove0x88(H5_0x88, H3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H5_0x88, H4_0x88),
            encodeMove0x88(H5_0x88, H6_0x88),
            encodeMove0x88(H5_0x88, H7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H5_0x88, F5_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H5_0x88, G5_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the player", () => {
      describe("when the player is white", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("8/8/k4N1N/8/5N1Q/K7/5N1N/8 w - - 0 1");

          expect(getLegalMoves0x88(fen, H4_0x88)).toMatchMoves([
            encodeMove0x88(H4_0x88, G3_0x88),
            encodeMove0x88(H4_0x88, G5_0x88),
            encodeMove0x88(H4_0x88, H3_0x88),
            encodeMove0x88(H4_0x88, H5_0x88),
            encodeMove0x88(H4_0x88, G4_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("8/5n1n/k7/5n1q/8/K4n1n/8/8 b - - 0 1");

          expect(getLegalMoves0x88(fen, H5_0x88)).toMatchMoves([
            encodeMove0x88(H5_0x88, G6_0x88),
            encodeMove0x88(H5_0x88, G4_0x88),
            encodeMove0x88(H5_0x88, H4_0x88),
            encodeMove0x88(H5_0x88, H6_0x88),
            encodeMove0x88(H5_0x88, G5_0x88),
          ]);
        });
      });
    });
  });

  describe("when the queen is in the corner of the board", () => {
    describe("when the target squares are not blocked", () => {
      describe("when the player is white", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/8/8/K7/8/7Q w - - 0 1");

          expect(getLegalMoves0x88(fen, H1_0x88)).toMatchMoves([
            encodeMove0x88(H1_0x88, A8_0x88),
            encodeMove0x88(H1_0x88, B7_0x88),
            encodeMove0x88(H1_0x88, C6_0x88),
            encodeMove0x88(H1_0x88, D5_0x88),
            encodeMove0x88(H1_0x88, E4_0x88),
            encodeMove0x88(H1_0x88, F3_0x88),
            encodeMove0x88(H1_0x88, G2_0x88),
            encodeMove0x88(H1_0x88, H2_0x88),
            encodeMove0x88(H1_0x88, H3_0x88),
            encodeMove0x88(H1_0x88, H4_0x88),
            encodeMove0x88(H1_0x88, H5_0x88),
            encodeMove0x88(H1_0x88, H6_0x88),
            encodeMove0x88(H1_0x88, H7_0x88),
            encodeMove0x88(H1_0x88, H8_0x88),
            encodeMove0x88(H1_0x88, A1_0x88),
            encodeMove0x88(H1_0x88, B1_0x88),
            encodeMove0x88(H1_0x88, C1_0x88),
            encodeMove0x88(H1_0x88, D1_0x88),
            encodeMove0x88(H1_0x88, E1_0x88),
            encodeMove0x88(H1_0x88, F1_0x88),
            encodeMove0x88(H1_0x88, G1_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("all of the target squares", () => {
          const fen = parseFen("7q/8/k7/8/8/K7/8/8 b - - 0 1");

          expect(getLegalMoves0x88(fen, H8_0x88)).toMatchMoves([
            encodeMove0x88(H8_0x88, A1_0x88),
            encodeMove0x88(H8_0x88, B2_0x88),
            encodeMove0x88(H8_0x88, C3_0x88),
            encodeMove0x88(H8_0x88, D4_0x88),
            encodeMove0x88(H8_0x88, E5_0x88),
            encodeMove0x88(H8_0x88, F6_0x88),
            encodeMove0x88(H8_0x88, G7_0x88),
            encodeMove0x88(H8_0x88, H1_0x88),
            encodeMove0x88(H8_0x88, H2_0x88),
            encodeMove0x88(H8_0x88, H3_0x88),
            encodeMove0x88(H8_0x88, H4_0x88),
            encodeMove0x88(H8_0x88, H5_0x88),
            encodeMove0x88(H8_0x88, H6_0x88),
            encodeMove0x88(H8_0x88, H7_0x88),
            encodeMove0x88(H8_0x88, A8_0x88),
            encodeMove0x88(H8_0x88, B8_0x88),
            encodeMove0x88(H8_0x88, C8_0x88),
            encodeMove0x88(H8_0x88, D8_0x88),
            encodeMove0x88(H8_0x88, E8_0x88),
            encodeMove0x88(H8_0x88, F8_0x88),
            encodeMove0x88(H8_0x88, G8_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the opponent", () => {
      describe("when the player is white", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("8/8/k7/8/8/K4n1n/8/5n1Q w - - 0 1");

          expect(getLegalMoves0x88(fen, H1_0x88)).toMatchMoves([
            encodeMove0x88(H1_0x88, F3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H1_0x88, G2_0x88),
            encodeMove0x88(H1_0x88, H2_0x88),
            encodeMove0x88(H1_0x88, H3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H1_0x88, F1_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H1_0x88, G1_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("5N1q/8/k4N1N/8/8/K7/8/8 b - - 0 1");

          expect(getLegalMoves0x88(fen, H8_0x88)).toMatchMoves([
            encodeMove0x88(H8_0x88, F6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H8_0x88, G7_0x88),
            encodeMove0x88(H8_0x88, H6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H8_0x88, H7_0x88),
            encodeMove0x88(H8_0x88, F8_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H8_0x88, G8_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the player", () => {
      describe("when the player is white", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("8/8/k7/8/8/K4N1N/8/5N1Q w - - 0 1");

          expect(getLegalMoves0x88(fen, H1_0x88)).toMatchMoves([
            encodeMove0x88(H1_0x88, G2_0x88),
            encodeMove0x88(H1_0x88, H2_0x88),
            encodeMove0x88(H1_0x88, G1_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("5n1q/8/k4n1n/8/8/K7/8/8 b - - 0 1");

          expect(getLegalMoves0x88(fen, H8_0x88)).toMatchMoves([
            encodeMove0x88(H8_0x88, G7_0x88),
            encodeMove0x88(H8_0x88, H7_0x88),
            encodeMove0x88(H8_0x88, G8_0x88),
          ]);
        });
      });
    });
  });
});
