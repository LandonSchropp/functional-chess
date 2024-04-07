import { parseFen } from "../../fen";
import {
  A1_0x88,
  A4_0x88,
  A5_0x88,
  A8_0x88,
  B1_0x88,
  B4_0x88,
  B5_0x88,
  B8_0x88,
  C1_0x88,
  C4_0x88,
  C5_0x88,
  C8_0x88,
  D1_0x88,
  D4_0x88,
  D5_0x88,
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
  F4_0x88,
  F5_0x88,
  F8_0x88,
  G1_0x88,
  G4_0x88,
  G5_0x88,
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
import { getLegalMovesForSquare0x88 } from "../get-legal-moves-for-square-0x88";
import { expect, describe, it } from "bun:test";

describe("getLegalMovesForSquare0x88 (rook moves)", () => {
  describe("when the rook is in the center of the board", () => {
    describe("when the target squares are not blocked", () => {
      describe("when the player is white", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/8/4R3/K7/8/8 w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, E4_0x88)).toMatchMoves([
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
          const fen = parseFen("8/8/k7/4r3/8/K7/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, E5_0x88)).toMatchMoves([
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
          const fen = parseFen("8/8/k3r3/8/2r1R1r1/K7/4r3/8 w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, E4_0x88)).toMatchMoves([
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
          const fen = parseFen("8/4R3/k7/2R1r1R1/8/K3R3/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, E5_0x88)).toMatchMoves([
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
          const fen = parseFen("8/8/k3R3/8/2R1R1R1/K7/4R3/8 w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, E4_0x88)).toMatchMoves([
            encodeMove0x88(E4_0x88, E3_0x88),
            encodeMove0x88(E4_0x88, E5_0x88),
            encodeMove0x88(E4_0x88, D4_0x88),
            encodeMove0x88(E4_0x88, F4_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("8/4r3/k7/2r1r1r1/8/K3r3/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, E5_0x88)).toMatchMoves([
            encodeMove0x88(E5_0x88, E4_0x88),
            encodeMove0x88(E5_0x88, E6_0x88),
            encodeMove0x88(E5_0x88, D5_0x88),
            encodeMove0x88(E5_0x88, F5_0x88),
          ]);
        });
      });
    });
  });

  describe("when the rook is on the edge of the board", () => {
    describe("when the target squares are not blocked", () => {
      describe("when the player is white", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/8/7R/K7/8/8 w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H4_0x88)).toMatchMoves([
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
          const fen = parseFen("8/8/k7/7r/8/K7/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H5_0x88)).toMatchMoves([
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
          const fen = parseFen("8/8/k6r/8/5r1R/K7/7r/8 w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H4_0x88)).toMatchMoves([
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
          const fen = parseFen("8/7R/k7/5R1r/8/K6R/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H5_0x88)).toMatchMoves([
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
          const fen = parseFen("8/8/k6R/8/5R1R/K7/7R/8 w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H4_0x88)).toMatchMoves([
            encodeMove0x88(H4_0x88, H3_0x88),
            encodeMove0x88(H4_0x88, H5_0x88),
            encodeMove0x88(H4_0x88, G4_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("8/7r/k7/5r1r/8/K6r/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H5_0x88)).toMatchMoves([
            encodeMove0x88(H5_0x88, H4_0x88),
            encodeMove0x88(H5_0x88, H6_0x88),
            encodeMove0x88(H5_0x88, G5_0x88),
          ]);
        });
      });
    });
  });

  describe("when the rook is in the corner of the board", () => {
    describe("when the target squares are not blocked", () => {
      describe("when the player is white", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/8/8/K7/8/7R w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H1_0x88)).toMatchMoves([
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
          const fen = parseFen("7r/8/k7/8/8/K7/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H8_0x88)).toMatchMoves([
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
          const fen = parseFen("8/8/k7/8/8/K6b/8/5b1R w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H1_0x88)).toMatchMoves([
            encodeMove0x88(H1_0x88, H2_0x88),
            encodeMove0x88(H1_0x88, H3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H1_0x88, F1_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H1_0x88, G1_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("5B1r/8/k6B/8/8/K7/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H8_0x88)).toMatchMoves([
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
          const fen = parseFen("8/8/k7/8/8/K6R/8/5R1R w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H1_0x88)).toMatchMoves([
            encodeMove0x88(H1_0x88, H2_0x88),
            encodeMove0x88(H1_0x88, G1_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("5r1r/8/k6r/8/8/K7/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H8_0x88)).toMatchMoves([
            encodeMove0x88(H8_0x88, H7_0x88),
            encodeMove0x88(H8_0x88, G8_0x88),
          ]);
        });
      });
    });
  });
});
