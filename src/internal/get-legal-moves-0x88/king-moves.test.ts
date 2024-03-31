import { parseFen } from "../../fen";
import {
  D1_0x88,
  D2_0x88,
  D3_0x88,
  D6_0x88,
  D7_0x88,
  D8_0x88,
  E1_0x88,
  E2_0x88,
  E3_0x88,
  E6_0x88,
  E7_0x88,
  E8_0x88,
  F1_0x88,
  F2_0x88,
  F3_0x88,
  F6_0x88,
  F7_0x88,
  F8_0x88,
  G1_0x88,
  G2_0x88,
  G3_0x88,
  G6_0x88,
  G7_0x88,
  G8_0x88,
  H1_0x88,
  H2_0x88,
  H3_0x88,
  H6_0x88,
  H7_0x88,
  H8_0x88,
  NO_PIECE_0x88,
} from "../constants";
import { CAPTURE_FLAG_0x88 } from "../constants/moves";
import { encodeMove0x88 } from "../encode-move-0x88";
import { getLegalMoves0x88 } from "../get-legal-moves-0x88";
import { expect, describe, it } from "bun:test";

describe("getLegalMoves0x88 (king moves)", () => {
  describe("when the king is in the center of the board", () => {
    describe("when the target squares are empty", () => {
      describe("when the player is white", () => {
        it("returns the king moves", () => {
          const fen = parseFen("8/4k3/8/8/8/8/4K3/8 w - - 0 1");

          expect(getLegalMoves0x88(fen, E2_0x88)).toMatchMoves([
            encodeMove0x88(E2_0x88, E1_0x88),
            encodeMove0x88(E2_0x88, F1_0x88),
            encodeMove0x88(E2_0x88, F2_0x88),
            encodeMove0x88(E2_0x88, F3_0x88),
            encodeMove0x88(E2_0x88, E3_0x88),
            encodeMove0x88(E2_0x88, D3_0x88),
            encodeMove0x88(E2_0x88, D2_0x88),
            encodeMove0x88(E2_0x88, D1_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("returns the king moves", () => {
          const fen = parseFen("8/4k3/8/8/8/8/4K3/8 b - - 0 1");

          expect(getLegalMoves0x88(fen, E7_0x88)).toMatchMoves([
            encodeMove0x88(E7_0x88, E6_0x88),
            encodeMove0x88(E7_0x88, F6_0x88),
            encodeMove0x88(E7_0x88, F7_0x88),
            encodeMove0x88(E7_0x88, F8_0x88),
            encodeMove0x88(E7_0x88, E8_0x88),
            encodeMove0x88(E7_0x88, D8_0x88),
            encodeMove0x88(E7_0x88, D7_0x88),
            encodeMove0x88(E7_0x88, D6_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the opponent", () => {
      describe("when the player is white", () => {
        it("returns the king moves", () => {
          const fen = parseFen("3rNr2/3NkN2/3rNr2/8/8/3RnR2/3nKn2/3RnR2 w - - 0 1");

          expect(getLegalMoves0x88(fen, E2_0x88)).toMatchMoves([
            encodeMove0x88(E2_0x88, E1_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E2_0x88, F2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E2_0x88, E3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E2_0x88, D2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("returns the king moves", () => {
          const fen = parseFen("3rNr2/3NkN2/3rNr2/8/8/3RnR2/3nKn2/3RnR2 b - - 0 1");

          expect(getLegalMoves0x88(fen, E7_0x88)).toMatchMoves([
            encodeMove0x88(E7_0x88, E6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E7_0x88, F7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E7_0x88, E8_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(E7_0x88, D7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the player", () => {
      describe("when the player is white", () => {
        it("returns an empty array", () => {
          const fen = parseFen("3rrr2/3rkr2/3rrr2/8/8/3RRR2/3RKR2/3RRR2 w - - 0 1");

          expect(getLegalMoves0x88(fen, E2_0x88)).toMatchMoves([]);
        });
      });

      describe("when the player is black", () => {
        it("returns an empty array", () => {
          const fen = parseFen("3rrr2/3rkr2/3rrr2/8/8/3RRR2/3RKR2/3RRR2 b - - 0 1");

          expect(getLegalMoves0x88(fen, E7_0x88)).toMatchMoves([]);
        });
      });
    });

    describe("when the target squares are attacked", () => {
      describe("when the player is white", () => {
        it("returns an empty array", () => {
          const fen = parseFen("R7/4k3/R7/3R1R2/3r1r2/r7/4K3/r7 w - - 0 1");

          expect(getLegalMoves0x88(fen, E2_0x88)).toMatchMoves([]);
        });
      });

      describe("when the player is black", () => {
        it("returns an empty array", () => {
          const fen = parseFen("R7/4k3/R7/3R1R2/3r1r2/r7/4K3/r7 w - - 0 1");

          expect(getLegalMoves0x88(fen, E7_0x88)).toMatchMoves([]);
        });
      });
    });
  });

  describe("when the king is on the edge of the board", () => {
    describe("when the target squares are empty", () => {
      describe("when the player is white", () => {
        it("returns the king moves", () => {
          const fen = parseFen("8/7k/8/8/8/8/7K/8 w - - 0 1");

          expect(getLegalMoves0x88(fen, H2_0x88)).toMatchMoves([
            encodeMove0x88(H2_0x88, H1_0x88),
            encodeMove0x88(H2_0x88, G1_0x88),
            encodeMove0x88(H2_0x88, G2_0x88),
            encodeMove0x88(H2_0x88, G3_0x88),
            encodeMove0x88(H2_0x88, H3_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("returns the king moves", () => {
          const fen = parseFen("8/7k/8/8/8/8/7K/8 b - - 0 1");

          expect(getLegalMoves0x88(fen, H7_0x88)).toMatchMoves([
            encodeMove0x88(H7_0x88, H6_0x88),
            encodeMove0x88(H7_0x88, G6_0x88),
            encodeMove0x88(H7_0x88, G7_0x88),
            encodeMove0x88(H7_0x88, G8_0x88),
            encodeMove0x88(H7_0x88, H8_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the opponent", () => {
      describe("when the player is white", () => {
        it("returns the king moves", () => {
          const fen = parseFen("6rN/6Nk/6rN/8/8/6Rn/6nK/6Rn w - - 0 1");

          expect(getLegalMoves0x88(fen, H2_0x88)).toMatchMoves([
            encodeMove0x88(H2_0x88, H1_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H2_0x88, G2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H2_0x88, H3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("returns the king moves", () => {
          const fen = parseFen("6rN/6Nk/6rN/8/8/6Rn/6nK/6Rn b - - 0 1");

          expect(getLegalMoves0x88(fen, H7_0x88)).toMatchMoves([
            encodeMove0x88(H7_0x88, H6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H7_0x88, G7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H7_0x88, H8_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the player", () => {
      describe("when the player is white", () => {
        it("returns an empty array", () => {
          const fen = parseFen("6rr/6rk/6rr/8/8/6RR/6RK/6RR w - - 0 1");

          expect(getLegalMoves0x88(fen, H2_0x88)).toMatchMoves([]);
        });
      });

      describe("when the player is black", () => {
        it("returns an empty array", () => {
          const fen = parseFen("6rr/6rk/6rr/8/8/6RR/6RK/6RR b - - 0 1");

          expect(getLegalMoves0x88(fen, H7_0x88)).toMatchMoves([]);
        });
      });
    });

    describe("when the target squares are attacked", () => {
      describe("when the player is white", () => {
        it("returns an empty array", () => {
          const fen = parseFen("R7/7k/R7/6R1/6r1/r7/7K/r7 w - - 0 1");

          expect(getLegalMoves0x88(fen, H2_0x88)).toMatchMoves([]);
        });
      });

      describe("when the player is black", () => {
        it("returns an empty array", () => {
          const fen = parseFen("R7/7k/R7/6R1/6r1/r7/7K/r7 b - - 0 1");

          expect(getLegalMoves0x88(fen, H7_0x88)).toMatchMoves([]);
        });
      });
    });
  });

  describe("when the king is in the corner of the board", () => {
    describe("when the target squares are empty", () => {
      describe("when the player is white", () => {
        it("returns the king moves", () => {
          const fen = parseFen("7k/8/8/8/8/8/8/7K w - - 0 1");

          expect(getLegalMoves0x88(fen, H1_0x88)).toMatchMoves([
            encodeMove0x88(H1_0x88, G1_0x88),
            encodeMove0x88(H1_0x88, G2_0x88),
            encodeMove0x88(H1_0x88, H2_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("returns the king moves", () => {
          const fen = parseFen("7k/8/8/8/8/8/8/7K b - - 0 1");

          expect(getLegalMoves0x88(fen, H8_0x88)).toMatchMoves([
            encodeMove0x88(H8_0x88, H7_0x88),
            encodeMove0x88(H8_0x88, G7_0x88),
            encodeMove0x88(H8_0x88, G8_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the opponent", () => {
      describe("when the player is white", () => {
        it("returns the king moves", () => {
          const fen = parseFen("6Nk/6rN/8/8/8/8/6Rn/6nK w - - 0 1");

          expect(getLegalMoves0x88(fen, H1_0x88)).toMatchMoves([
            encodeMove0x88(H1_0x88, G1_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H1_0x88, H2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("returns the king moves", () => {
          const fen = parseFen("6Nk/6rN/8/8/8/8/6Rn/6nK b - - 0 1");

          expect(getLegalMoves0x88(fen, H8_0x88)).toMatchMoves([
            encodeMove0x88(H8_0x88, H7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
            encodeMove0x88(H8_0x88, G8_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
          ]);
        });
      });
    });

    describe("when the target squares are occupied by the player", () => {
      describe("when the player is white", () => {
        it("returns an empty array", () => {
          const fen = parseFen("6rk/6rr/8/8/8/8/6RR/6RK w - - 0 1");

          expect(getLegalMoves0x88(fen, H1_0x88)).toMatchMoves([]);
        });
      });

      describe("when the player is black", () => {
        it("returns an empty array", () => {
          const fen = parseFen("6rk/6rr/8/8/8/8/6RR/6RK b - - 0 1");

          expect(getLegalMoves0x88(fen, H8_0x88)).toMatchMoves([]);
        });
      });
    });

    describe("when the target squares are attacked", () => {
      describe("when the player is white", () => {
        it("returns an empty array", () => {
          const fen = parseFen("7k/R7/8/6R1/6r1/8/r7/7K w - - 0 1");

          expect(getLegalMoves0x88(fen, H1_0x88)).toMatchMoves([]);
        });
      });

      describe("when the player is black", () => {
        it("returns an empty array", () => {
          const fen = parseFen("7k/R7/8/6R1/6r1/8/r7/7K b - - 0 1");

          expect(getLegalMoves0x88(fen, H8_0x88)).toMatchMoves([]);
        });
      });
    });
  });
});
