import { STARTING_POSITION } from "../constants";
import { parseFen } from "../fen";
import {
  A1_0x88,
  A8_0x88,
  B1_0x88,
  B2_0x88,
  B8_0x88,
  BLACK_BISHOP_0x88,
  BLACK_KNIGHT_0x88,
  BLACK_QUEEN_0x88,
  BLACK_ROOK_0x88,
  C1_0x88,
  C4_0x88,
  C5_0x88,
  C6_0x88,
  C8_0x88,
  D3_0x88,
  D6_0x88,
  E1_0x88,
  E2_0x88,
  E4_0x88,
  E5_0x88,
  E7_0x88,
  E8_0x88,
  F2_0x88,
  F3_0x88,
  F7_0x88,
  G1_0x88,
  G5_0x88,
  G7_0x88,
  G8_0x88,
  H1_0x88,
  H8_0x88,
  NO_PIECE_0x88,
  WHITE_BISHOP_0x88,
  WHITE_KNIGHT_0x88,
  WHITE_QUEEN_0x88,
  WHITE_ROOK_0x88,
} from "./constants";
import {
  CAPTURE_FLAG_0x88,
  CASTLE_FLAG_0x88,
  DOUBLE_PAWN_FLAG_0x88,
  EN_PASSANT_FLAG_0x88,
} from "./constants/moves";
import { encodeMove0x88 } from "./encode-move-0x88";
import { movePiece0x88 } from "./move-piece-0x88";
import { describe, expect, it } from "bun:test";

// NOTE: All of these tests assume that the FEN and the move is valid. This is an internal function,
// so it shouldn't be called in circumstances where either of those are invalid.
describe("movePiece0x88", () => {
  describe("when the move is not a capture", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen(STARTING_POSITION);
        const move = encodeMove0x88(E2_0x88, E4_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen("rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 1 1");
        const move = encodeMove0x88(E7_0x88, E5_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
        );
      });
    });
  });

  describe("when the move is a king move and not a castle", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen("rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2");
        const move = encodeMove0x88(E1_0x88, E2_0x88, NO_PIECE_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPKPPP/RNBQ1BNR b kq - 1 2",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen("rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPKPPP/RNBQ1BNR b kq - 1 2");
        const move = encodeMove0x88(E8_0x88, E7_0x88, NO_PIECE_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "rnbq1bnr/ppppkppp/8/4p3/4P3/8/PPPPKPPP/RNBQ1BNR w - - 2 3",
        );
      });
    });
  });

  describe("when the move is a kingside rook move", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen("r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4");
        const move = encodeMove0x88(H1_0x88, G1_0x88, NO_PIECE_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK1R1 b Qkq - 5 4",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen(
          "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5",
        );
        const move = encodeMove0x88(H8_0x88, G8_0x88, NO_PIECE_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqk1r1/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w q - 8 6",
        );
      });
    });
  });

  describe("when the move is a queenside rook move", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen(
          "r3k2r/pppq1ppp/2np1n2/2b1p1B1/2B1P1b1/2NP1N2/PPPQ1PPP/R3K2R w KQkq - 4 8",
        );
        const move = encodeMove0x88(A1_0x88, B1_0x88, NO_PIECE_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r3k2r/pppq1ppp/2np1n2/2b1p1B1/2B1P1b1/2NP1N2/PPPQ1PPP/1R2K2R b Kkq - 5 8",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen(
          "r3k2r/pppq1ppp/2np1n2/2b1p1B1/2B1P1b1/2NP1N2/PPPQ1PPP/2KR3R b kq - 5 8",
        );
        const move = encodeMove0x88(A8_0x88, B8_0x88, NO_PIECE_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "1r2k2r/pppq1ppp/2np1n2/2b1p1B1/2B1P1b1/2NP1N2/PPPQ1PPP/2KR3R w k - 6 9",
        );
      });
    });
  });

  describe("when the move is a capture", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen(
          "r1bqk2r/pppp1ppp/2n2n2/2b1p1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 6 5",
        );
        const move = encodeMove0x88(G5_0x88, F7_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqk2r/pppp1Npp/2n2n2/2b1p3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen("r1bqk2r/pppp1Npp/2n2n2/2b1p3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5");
        const move = encodeMove0x88(C5_0x88, F2_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqk2r/pppp1Npp/2n2n2/4p3/2B1P3/8/PPPP1bPP/RNBQK2R w KQkq - 0 6",
        );
      });
    });
  });

  describe("when the move is a kingside rook capture", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen("rnbqkbnr/2pp1p2/8/1P2p1P1/1p2P1p1/8/2PP1P2/RNBQKBNR w KQkq - 0 8");
        const move = encodeMove0x88(H1_0x88, H8_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "rnbqkbnR/2pp1p2/8/1P2p1P1/1p2P1p1/8/2PP1P2/RNBQKBN1 b Qq - 0 8",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen("rnbqkbnr/2pp1p2/8/1P2p1P1/1p2P1p1/8/2PPNP2/RNBQKB1R b KQkq - 1 8");
        const move = encodeMove0x88(H8_0x88, H1_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "rnbqkbn1/2pp1p2/8/1P2p1P1/1p2P1p1/8/2PPNP2/RNBQKB1r w Qq - 0 9",
        );
      });
    });
  });

  describe("when the move is a queenside rook capture", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen("rnbqkbnr/2pp1p2/8/1P2p1P1/1p2P1p1/8/2PP1P2/RNBQKBNR w KQkq - 0 8");
        const move = encodeMove0x88(A1_0x88, A8_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "Rnbqkbnr/2pp1p2/8/1P2p1P1/1p2P1p1/8/2PP1P2/1NBQKBNR b Kk - 0 8",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen("rnbqkbnr/2pp1p2/8/1P2p1P1/1p2P1p1/8/2PPNP2/RNBQKB1R b KQkq - 1 8");
        const move = encodeMove0x88(A8_0x88, A1_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "1nbqkbnr/2pp1p2/8/1P2p1P1/1p2P1p1/8/2PPNP2/rNBQKB1R w Kk - 0 9",
        );
      });
    });
  });

  describe("when the FEN has an en passant square", () => {
    describe("when the move is an en passant capture", () => {
      describe("when the piece is white", () => {
        it("updates the FEN", () => {
          const fen = parseFen("rnbqkbnr/pp2pppp/8/2ppP3/8/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 3");
          const move = encodeMove0x88(
            E5_0x88,
            D6_0x88,
            NO_PIECE_0x88,
            CAPTURE_FLAG_0x88 | EN_PASSANT_FLAG_0x88,
          );

          expect(movePiece0x88(fen, move)).toEqualFen(
            "rnbqkbnr/pp2pppp/3P4/2p5/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 3",
          );
        });
      });

      describe("when the piece is black", () => {
        it("updates the FEN", () => {
          const fen = parseFen("rnbqkbnr/pp1ppppp/8/4P3/2pP4/8/PPP2PPP/RNBQKBNR b KQkq d3 0 3");
          const move = encodeMove0x88(
            C4_0x88,
            D3_0x88,
            NO_PIECE_0x88,
            CAPTURE_FLAG_0x88 | EN_PASSANT_FLAG_0x88,
          );

          expect(movePiece0x88(fen, move)).toEqualFen(
            "rnbqkbnr/pp1ppppp/8/4P3/8/3p4/PPP2PPP/RNBQKBNR w KQkq - 0 4",
          );
        });
      });
    });

    describe("when the move is not an en passant capture", () => {
      describe("when the piece is white", () => {
        it("updates the FEN", () => {
          const fen = parseFen("rnbqkbnr/pp2pppp/8/2ppP3/8/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 3");
          const move = encodeMove0x88(G1_0x88, F3_0x88, NO_PIECE_0x88);

          expect(movePiece0x88(fen, move)).toEqualFen(
            "rnbqkbnr/pp2pppp/8/2ppP3/8/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 3",
          );
        });
      });

      describe("when the piece is black", () => {
        it("updates the FEN", () => {
          const fen = parseFen("rnbqkbnr/pp1ppppp/8/4P3/2pP4/8/PPP2PPP/RNBQKBNR b KQkq d3 0 3");
          const move = encodeMove0x88(B8_0x88, C6_0x88, NO_PIECE_0x88);

          expect(movePiece0x88(fen, move)).toEqualFen(
            "r1bqkbnr/pp1ppppp/2n5/4P3/2pP4/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
          );
        });
      });
    });
  });

  describe("when the move is a double pawn move", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen(STARTING_POSITION);
        const move = encodeMove0x88(E2_0x88, E4_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen("rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1");
        const move = encodeMove0x88(E7_0x88, E5_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
        );
      });
    });
  });

  describe("when the move is a promotion to a queen", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen("r1bqkb1r/pppp1pPp/2n5/8/8/5N2/P1P2PPP/q1BQKB1R w Kkq - 0 8");
        const move = encodeMove0x88(G7_0x88, H8_0x88, WHITE_QUEEN_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqkb1Q/pppp1p1p/2n5/8/8/5N2/P1P2PPP/q1BQKB1R b Kq - 0 8",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen("r1bqkb1r/pppp1pPp/2n5/8/8/5N2/PpP2PPP/R1BQKB1R b KQkq - 0 7");
        const move = encodeMove0x88(B2_0x88, A1_0x88, BLACK_QUEEN_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqkb1r/pppp1pPp/2n5/8/8/5N2/P1P2PPP/q1BQKB1R w Kkq - 0 8",
        );
      });
    });
  });

  describe("when the move is a promotion to a rook", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen("r1bqkb1r/pppp1pPp/2n5/8/8/5N2/P1P2PPP/q1BQKB1R w Kkq - 0 8");
        const move = encodeMove0x88(G7_0x88, H8_0x88, WHITE_ROOK_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqkb1R/pppp1p1p/2n5/8/8/5N2/P1P2PPP/q1BQKB1R b Kq - 0 8",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen("r1bqkb1r/pppp1pPp/2n5/8/8/5N2/PpP2PPP/R1BQKB1R b KQkq - 0 7");
        const move = encodeMove0x88(B2_0x88, A1_0x88, BLACK_ROOK_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqkb1r/pppp1pPp/2n5/8/8/5N2/P1P2PPP/r1BQKB1R w Kkq - 0 8",
        );
      });
    });
  });

  describe("when the move is a promotion to a bishop", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen("r1bqkb1r/pppp1pPp/2n5/8/8/5N2/P1P2PPP/q1BQKB1R w Kkq - 0 8");
        const move = encodeMove0x88(G7_0x88, H8_0x88, WHITE_BISHOP_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqkb1B/pppp1p1p/2n5/8/8/5N2/P1P2PPP/q1BQKB1R b Kq - 0 8",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen("r1bqkb1r/pppp1pPp/2n5/8/8/5N2/PpP2PPP/R1BQKB1R b KQkq - 0 7");
        const move = encodeMove0x88(B2_0x88, A1_0x88, BLACK_BISHOP_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqkb1r/pppp1pPp/2n5/8/8/5N2/P1P2PPP/b1BQKB1R w Kkq - 0 8",
        );
      });
    });
  });

  describe("when the move is a promotion to a knight", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen("r1bqkb1r/pppp1pPp/2n5/8/8/5N2/P1P2PPP/q1BQKB1R w Kkq - 0 8");
        const move = encodeMove0x88(G7_0x88, H8_0x88, WHITE_KNIGHT_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqkb1N/pppp1p1p/2n5/8/8/5N2/P1P2PPP/q1BQKB1R b Kq - 0 8",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen("r1bqkb1r/pppp1pPp/2n5/8/8/5N2/PpP2PPP/R1BQKB1R b KQkq - 0 7");
        const move = encodeMove0x88(B2_0x88, A1_0x88, BLACK_KNIGHT_0x88, CAPTURE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqkb1r/pppp1pPp/2n5/8/8/5N2/P1P2PPP/n1BQKB1R w Kkq - 0 8",
        );
      });
    });
  });

  describe("when the move is a kingside castle", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen("r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4");
        const move = encodeMove0x88(E1_0x88, G1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 4",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen(
          "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5",
        );
        const move = encodeMove0x88(E8_0x88, G8_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w - - 8 6",
        );
      });
    });
  });

  describe("when the move is a queenside castle", () => {
    describe("when the piece is white", () => {
      it("updates the FEN", () => {
        const fen = parseFen(
          "r3k2r/pppq1ppp/2np1n2/2b1p1B1/2B1P1b1/2NP1N2/PPPQ1PPP/R3K2R w KQkq - 4 8",
        );
        const move = encodeMove0x88(E1_0x88, C1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "r3k2r/pppq1ppp/2np1n2/2b1p1B1/2B1P1b1/2NP1N2/PPPQ1PPP/2KR3R b kq - 5 8",
        );
      });
    });

    describe("when the piece is black", () => {
      it("updates the FEN", () => {
        const fen = parseFen(
          "r3k2r/pppq1ppp/2np1n2/2b1p1B1/2B1P1b1/2NP1N2/PPPQ1PPP/2KR3R b kq - 5 8",
        );
        const move = encodeMove0x88(E8_0x88, C8_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88);

        expect(movePiece0x88(fen, move)).toEqualFen(
          "2kr3r/pppq1ppp/2np1n2/2b1p1B1/2B1P1b1/2NP1N2/PPPQ1PPP/2KR3R w - - 6 9",
        );
      });
    });
  });
});
