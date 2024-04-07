import { parseFen } from "../../fen";
import {
  A1_0x88,
  A8_0x88,
  B1_0x88,
  B2_0x88,
  B7_0x88,
  B8_0x88,
  C2_0x88,
  C3_0x88,
  C6_0x88,
  C7_0x88,
  D1_0x88,
  D3_0x88,
  D4_0x88,
  D5_0x88,
  D6_0x88,
  D8_0x88,
  E1_0x88,
  E2_0x88,
  E4_0x88,
  E5_0x88,
  E7_0x88,
  E8_0x88,
  F2_0x88,
  F3_0x88,
  F4_0x88,
  F5_0x88,
  F6_0x88,
  F7_0x88,
  G2_0x88,
  G3_0x88,
  G4_0x88,
  G5_0x88,
  G6_0x88,
  G7_0x88,
  H1_0x88,
  H2_0x88,
  H4_0x88,
  H5_0x88,
  H7_0x88,
  H8_0x88,
  NO_PIECE_0x88,
} from "../constants";
import { CAPTURE_FLAG_0x88 } from "../constants/moves";
import { encodeMove0x88 } from "../encode-move-0x88";
import { getLegalMovesForSquare0x88 } from "../get-legal-moves-for-square-0x88";
import { expect, describe, it } from "bun:test";

describe("getLegalMovesForSquare0x88 (bishop moves)", () => {
  describe("when the bishop is in the center of the board", () => {
    describe("when the target squares are not blocked", () => {
      describe("when the player is white", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/8/4B3/K7/8/8 w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, E4_0x88)).toMatchMoves([
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
          ]);
        });
      });

      describe("when the player is black", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/4b3/8/K7/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, E5_0x88)).toMatchMoves([
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
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the opponent", () => {
      describe("when the player is white", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("8/8/k1b3b1/8/4B3/K7/2b3b1/8 w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, E4_0x88)).toMatchMoves([
            encodeMove0x88(E4_0x88, C2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, D3_0x88),
            encodeMove0x88(E4_0x88, F5_0x88),
            encodeMove0x88(E4_0x88, G6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, C6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E4_0x88, D5_0x88),
            encodeMove0x88(E4_0x88, F3_0x88),
            encodeMove0x88(E4_0x88, G2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("8/2B3B1/k7/4b3/8/K1B3B1/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, E5_0x88)).toMatchMoves([
            encodeMove0x88(E5_0x88, C3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, D4_0x88),
            encodeMove0x88(E5_0x88, F6_0x88),
            encodeMove0x88(E5_0x88, G7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, C7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E5_0x88, D6_0x88),
            encodeMove0x88(E5_0x88, F4_0x88),
            encodeMove0x88(E5_0x88, G3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the player", () => {
      describe("when the player is white", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("8/8/k1B3B1/8/4B3/K7/2B3B1/8 w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, E4_0x88)).toMatchMoves([
            encodeMove0x88(E4_0x88, D3_0x88),
            encodeMove0x88(E4_0x88, F5_0x88),
            encodeMove0x88(E4_0x88, D5_0x88),
            encodeMove0x88(E4_0x88, F3_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("8/2b3b1/k7/4b3/8/K1b3b1/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, E5_0x88)).toMatchMoves([
            encodeMove0x88(E5_0x88, D4_0x88),
            encodeMove0x88(E5_0x88, F6_0x88),
            encodeMove0x88(E5_0x88, D6_0x88),
            encodeMove0x88(E5_0x88, F4_0x88),
          ]);
        });
      });
    });
  });

  describe("when the bishop is on the edge of the board", () => {
    describe("when the target squares are not blocked", () => {
      describe("when the player is white", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/8/7B/K7/8/8 w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H4_0x88)).toMatchMoves([
            encodeMove0x88(H4_0x88, E1_0x88),
            encodeMove0x88(H4_0x88, F2_0x88),
            encodeMove0x88(H4_0x88, G3_0x88),
            encodeMove0x88(H4_0x88, D8_0x88),
            encodeMove0x88(H4_0x88, E7_0x88),
            encodeMove0x88(H4_0x88, F6_0x88),
            encodeMove0x88(H4_0x88, G5_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/7b/8/K7/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H5_0x88)).toMatchMoves([
            encodeMove0x88(H5_0x88, E8_0x88),
            encodeMove0x88(H5_0x88, F7_0x88),
            encodeMove0x88(H5_0x88, G6_0x88),
            encodeMove0x88(H5_0x88, D1_0x88),
            encodeMove0x88(H5_0x88, E2_0x88),
            encodeMove0x88(H5_0x88, F3_0x88),
            encodeMove0x88(H5_0x88, G4_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the opponent", () => {
      describe("when the player is white", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("8/8/k4b2/8/7B/K7/5b2/8 w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H4_0x88)).toMatchMoves([
            encodeMove0x88(H4_0x88, F2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H4_0x88, G3_0x88),
            encodeMove0x88(H4_0x88, F6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H4_0x88, G5_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("8/5B2/k7/7b/8/K4B2/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H5_0x88)).toMatchMoves([
            encodeMove0x88(H5_0x88, F7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H5_0x88, G6_0x88),
            encodeMove0x88(H5_0x88, F3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H5_0x88, G4_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the player", () => {
      describe("when the player is white", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("8/8/k4B2/8/7B/K7/5B2/8 w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H4_0x88)).toMatchMoves([
            encodeMove0x88(H4_0x88, G3_0x88),
            encodeMove0x88(H4_0x88, G5_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("8/5b2/k7/7b/8/K4b2/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H5_0x88)).toMatchMoves([
            encodeMove0x88(H5_0x88, G6_0x88),
            encodeMove0x88(H5_0x88, G4_0x88),
          ]);
        });
      });
    });
  });

  describe("when the bishop is in the corner of the board", () => {
    describe("when the target squares are not blocked", () => {
      describe("when the player is white", () => {
        it("all of the target squares", () => {
          const fen = parseFen("8/8/k7/8/8/K7/8/7B w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H1_0x88)).toMatchMoves([
            encodeMove0x88(H1_0x88, A8_0x88),
            encodeMove0x88(H1_0x88, B7_0x88),
            encodeMove0x88(H1_0x88, C6_0x88),
            encodeMove0x88(H1_0x88, D5_0x88),
            encodeMove0x88(H1_0x88, E4_0x88),
            encodeMove0x88(H1_0x88, F3_0x88),
            encodeMove0x88(H1_0x88, G2_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("all of the target squares", () => {
          const fen = parseFen("7b/8/k7/8/8/K7/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H8_0x88)).toMatchMoves([
            encodeMove0x88(H8_0x88, A1_0x88),
            encodeMove0x88(H8_0x88, B2_0x88),
            encodeMove0x88(H8_0x88, C3_0x88),
            encodeMove0x88(H8_0x88, D4_0x88),
            encodeMove0x88(H8_0x88, E5_0x88),
            encodeMove0x88(H8_0x88, F6_0x88),
            encodeMove0x88(H8_0x88, G7_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the opponent", () => {
      describe("when the player is white", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("8/8/k7/8/8/K4b2/8/7B w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H1_0x88)).toMatchMoves([
            encodeMove0x88(H1_0x88, F3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H1_0x88, G2_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("includes the occupied target squares but not the blocked squares", () => {
          const fen = parseFen("7b/8/k4B2/8/8/K7/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H8_0x88)).toMatchMoves([
            encodeMove0x88(H8_0x88, F6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H8_0x88, G7_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the player", () => {
      describe("when the player is white", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("8/8/k7/8/8/K4B2/8/7B w - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H1_0x88)).toMatchMoves([
            encodeMove0x88(H1_0x88, G2_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("does not include the occupied target squares or the blocked squares", () => {
          const fen = parseFen("7b/8/k4b2/8/8/K7/8/8 b - - 0 1");

          expect(getLegalMovesForSquare0x88(fen, H8_0x88)).toMatchMoves([
            encodeMove0x88(H8_0x88, G7_0x88),
          ]);
        });
      });
    });
  });
});
