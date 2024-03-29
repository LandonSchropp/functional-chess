import { parseFen } from "../../fen";
import {
  NO_PIECE_0x88,
  E1_0x88,
  G1_0x88,
  E8_0x88,
  G8_0x88,
  F8_0x88,
  F1_0x88,
  C1_0x88,
  C8_0x88,
  D1_0x88,
  D8_0x88,
} from "../constants";
import { CASTLE_FLAG_0x88 } from "../constants/moves";
import { encodeMove0x88 } from "../encode-move-0x88";
import { getLegalMoves0x88 } from "../get-legal-moves-0x88";
import { expect, describe, it } from "bun:test";

describe("getLegalMoves0x88 (empty squares)", () => {
  describe("when the king is attempting to castling kingside", () => {
    describe("when the king is not attacked", () => {
      describe("when the king has castling rights", () => {
        describe("when the player is white", () => {
          it("includes the castling move", () => {
            const fen = parseFen("r2qk2r/3ppp2/8/8/8/8/3PPP2/R2QK2R w KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
              encodeMove0x88(E1_0x88, F1_0x88, NO_PIECE_0x88),
              encodeMove0x88(E1_0x88, G1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
            ]);
          });
        });

        describe("when the player is black", () => {
          it("includes the castling move", () => {
            const fen = parseFen("r2qk2r/3ppp2/8/8/8/8/3PPP2/R2QK2R b KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
              encodeMove0x88(E8_0x88, F8_0x88, NO_PIECE_0x88),
              encodeMove0x88(E8_0x88, G8_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
            ]);
          });
        });
      });

      describe("when the king does not have castling rights", () => {
        describe("when the player is white", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r2qk2r/3ppp2/8/8/8/8/3PPP2/R2QK2R w Qkq - 0 1");
            expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
              encodeMove0x88(E1_0x88, F1_0x88, NO_PIECE_0x88),
            ]);
          });
        });

        describe("when the player is black", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r2qk2r/3ppp2/8/8/8/8/3PPP2/R2QK2R b KQq - 0 1");
            expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
              encodeMove0x88(E8_0x88, F8_0x88, NO_PIECE_0x88),
            ]);
          });
        });
      });
    });

    describe("when the king is attacked", () => {
      describe("when the attack is blocked", () => {
        describe("when the king has castling rights", () => {
          describe("when the player is white", () => {
            it("includes the castling move", () => {
              const fen = parseFen("r2qk2r/3ppp2/4r3/8/8/8/3PPP2/R2QK2R w KQkq - 0 1");
              expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
                encodeMove0x88(E1_0x88, F1_0x88, NO_PIECE_0x88),
                encodeMove0x88(E1_0x88, G1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
              ]);
            });
          });

          describe("when the player is black", () => {
            it("includes the castling move", () => {
              const fen = parseFen("r2qk2r/3ppp2/8/8/8/4R3/3PPP2/R2QK2R b KQkq - 0 1");
              expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
                encodeMove0x88(E8_0x88, F8_0x88, NO_PIECE_0x88),
                encodeMove0x88(E8_0x88, G8_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
              ]);
            });
          });
        });

        describe("when the king does not have castling rights", () => {
          describe("when the player is white", () => {
            it("does not include the castling move", () => {
              const fen = parseFen("r2qk2r/3ppp2/4r3/8/8/8/3PPP2/R2QK2R w Qkq - 0 1");
              expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
                encodeMove0x88(E1_0x88, F1_0x88, NO_PIECE_0x88),
              ]);
            });
          });

          describe("when the player is black", () => {
            it("does not include the castling move", () => {
              const fen = parseFen("r2qk2r/3ppp2/8/8/8/4R3/3PPP2/R2QK2R b KQq - 0 1");
              expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
                encodeMove0x88(E8_0x88, F8_0x88, NO_PIECE_0x88),
              ]);
            });
          });
        });
      });

      describe("when the attack is not blocked", () => {
        describe("when the player is white", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r2qk2r/3ppp2/4r3/8/8/8/3P1P2/R2QK2R w KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
              encodeMove0x88(E1_0x88, F1_0x88, NO_PIECE_0x88),
            ]);
          });
        });

        describe("when the player is black", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r2qk2r/3p1p2/8/8/8/4R3/3PPP2/R2QK2R b KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
              encodeMove0x88(E8_0x88, F8_0x88, NO_PIECE_0x88),
            ]);
          });
        });
      });
    });

    describe("when the king would castle through check", () => {
      describe("when the attack is blocked", () => {
        describe("when the king has castling rights", () => {
          describe("when the player is white", () => {
            it("includes the castling move", () => {
              const fen = parseFen("r2qk2r/3pppp1/7B/8/8/7b/3PPPP1/R2QK2R w KQkq - 0 1");
              expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
                encodeMove0x88(E1_0x88, F1_0x88, NO_PIECE_0x88),
                encodeMove0x88(E1_0x88, G1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
              ]);
            });
          });

          describe("when the player is black", () => {
            it("includes the castling move", () => {
              const fen = parseFen("r2qk2r/3pppp1/7B/8/8/7b/3PPPP1/R2QK2R b KQkq - 0 1");
              expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
                encodeMove0x88(E8_0x88, F8_0x88, NO_PIECE_0x88),
                encodeMove0x88(E8_0x88, G8_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
              ]);
            });
          });
        });

        describe("when the king does not have castling rights", () => {
          describe("when the player is white", () => {
            it("does not include the castling move", () => {
              const fen = parseFen("r2qk2r/3pppp1/7B/8/8/7b/3PPPP1/R2QK2R w Qkq - 0 1");
              expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
                encodeMove0x88(E1_0x88, F1_0x88, NO_PIECE_0x88),
              ]);
            });
          });

          describe("when the player is black", () => {
            it("does not include the castling move", () => {
              const fen = parseFen("r2qk2r/3pppp1/7B/8/8/7b/3PPPP1/R2QK2R b KQq - 0 1");
              expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
                encodeMove0x88(E8_0x88, F8_0x88, NO_PIECE_0x88),
              ]);
            });
          });
        });
      });

      describe("when the attack is not blocked", () => {
        describe("when the player is white", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r2qk2r/3ppp2/7B/8/8/7b/3PPP2/R2QK2R w KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([]);
          });
        });

        describe("when the player is black", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r2qk2r/3ppp2/7B/8/8/7b/3PPP2/R2QK2R b KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([]);
          });
        });
      });
    });

    describe("when the king would castle into check", () => {
      describe("when the attack is blocked", () => {
        describe("when the king has castling rights", () => {
          describe("when the player is white", () => {
            it("includes the castling move", () => {
              const fen = parseFen("r2qk1rr/3ppp2/8/8/8/8/3PPPP1/R2QK2R w KQkq - 0 1");
              expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
                encodeMove0x88(E1_0x88, F1_0x88, NO_PIECE_0x88),
                encodeMove0x88(E1_0x88, G1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
              ]);
            });
          });

          describe("when the player is black", () => {
            it("includes the castling move", () => {
              const fen = parseFen("r2qk2r/3pppp1/8/8/8/8/3PPP2/R2QK1RR b KQkq - 0 1");
              expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
                encodeMove0x88(E8_0x88, F8_0x88, NO_PIECE_0x88),
                encodeMove0x88(E8_0x88, G8_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
              ]);
            });
          });
        });

        describe("when the king does not have castling rights", () => {
          describe("when the player is white", () => {
            it("does not include the castling move", () => {
              const fen = parseFen("r2qk1rr/3ppp2/8/8/8/8/3PPPP1/R2QK2R w Qkq - 0 1");
              expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
                encodeMove0x88(E1_0x88, F1_0x88, NO_PIECE_0x88),
              ]);
            });
          });

          describe("when the player is black", () => {
            it("does not include the castling move", () => {
              const fen = parseFen("r2qk2r/3pppp1/8/8/8/8/3PPP2/R2QK1RR b KQq - 0 1");
              expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
                encodeMove0x88(E8_0x88, F8_0x88, NO_PIECE_0x88),
              ]);
            });
          });
        });
      });

      describe("when the attack is not blocked", () => {
        describe("when the player is white", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r2qk1rr/3ppp2/8/8/8/8/3PPP2/R2QK2R w KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
              encodeMove0x88(E1_0x88, F1_0x88, NO_PIECE_0x88),
            ]);
          });
        });

        describe("when the player is black", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r2qk2r/3ppp2/7N/8/8/8/3PPP2/R2QK2R b KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
              encodeMove0x88(E8_0x88, F8_0x88, NO_PIECE_0x88),
            ]);
          });
        });
      });
    });

    describe("when the through square is not empty", () => {
      describe("when the player is white", () => {
        it("includes the castling move", () => {
          const fen = parseFen("r2qkb1r/3ppp2/8/8/8/8/3PPP2/R2QKB1R w KQkq - 0 1");
          expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([]);
        });
      });

      describe("when the player is black", () => {
        it("includes the castling move", () => {
          const fen = parseFen("r2qkb1r/3ppp2/8/8/8/8/3PPP2/R2QKB1R b KQkq - 0 1");
          expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([]);
        });
      });
    });

    describe("when the target square is not empty", () => {
      describe("when the player is white", () => {
        it("includes the castling move", () => {
          const fen = parseFen("r2qk1nr/3ppp2/8/8/8/8/3PPP2/R2QK1NR w KQkq - 0 1");
          expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
            encodeMove0x88(E1_0x88, F1_0x88, NO_PIECE_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("includes the castling move", () => {
          const fen = parseFen("r2qk1nr/3ppp2/8/8/8/8/3PPP2/R2QK1NR b KQkq - 0 1");
          expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
            encodeMove0x88(E8_0x88, F8_0x88, NO_PIECE_0x88),
          ]);
        });
      });
    });
  });

  describe("when the king is attempting to castling queenside", () => {
    describe("when the king is not attacked", () => {
      describe("when the king has castling rights", () => {
        describe("when the player is white", () => {
          it("includes the castling move", () => {
            const fen = parseFen("r3kb1r/3ppp2/8/8/8/8/3PPP2/R3KB1R w KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
              encodeMove0x88(E1_0x88, D1_0x88, NO_PIECE_0x88),
              encodeMove0x88(E1_0x88, C1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
            ]);
          });
        });

        describe("when the player is black", () => {
          it("includes the castling move", () => {
            const fen = parseFen("r3kb1r/3ppp2/8/8/8/8/3PPP2/R3KB1R b KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
              encodeMove0x88(E8_0x88, D8_0x88, NO_PIECE_0x88),
              encodeMove0x88(E8_0x88, C8_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
            ]);
          });
        });
      });

      describe("when the king does not have castling rights", () => {
        describe("when the player is white", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r3kb1r/3ppp2/8/8/8/8/3PPP2/R3KB1R w Kkq - 0 1");
            expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
              encodeMove0x88(E1_0x88, D1_0x88, NO_PIECE_0x88),
            ]);
          });
        });

        describe("when the player is black", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r3kb1r/3ppp2/8/8/8/8/3PPP2/R3KB1R b KQk - 0 1");
            expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
              encodeMove0x88(E8_0x88, D8_0x88, NO_PIECE_0x88),
            ]);
          });
        });
      });
    });

    describe("when the king is attacked", () => {
      describe("when the attack is blocked", () => {
        describe("when the king has castling rights", () => {
          describe("when the player is white", () => {
            it("includes the castling move", () => {
              const fen = parseFen("r3kb1r/3ppp2/4r3/8/8/8/3PPP2/R3KB1R w KQkq - 0 1");
              expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
                encodeMove0x88(E1_0x88, D1_0x88, NO_PIECE_0x88),
                encodeMove0x88(E1_0x88, C1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
              ]);
            });
          });

          describe("when the player is black", () => {
            it("includes the castling move", () => {
              const fen = parseFen("r3kb1r/3ppp2/8/8/8/4R3/3PPP2/R3KB1R b KQkq - 0 1");
              expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
                encodeMove0x88(E8_0x88, D8_0x88, NO_PIECE_0x88),
                encodeMove0x88(E8_0x88, C8_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
              ]);
            });
          });
        });

        describe("when the king does not have castling rights", () => {
          describe("when the player is white", () => {
            it("does not include the castling move", () => {
              const fen = parseFen("r3kb1r/3ppp2/4r3/8/8/8/3PPP2/R3KB1R w Kkq - 0 1");
              expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
                encodeMove0x88(E1_0x88, D1_0x88, NO_PIECE_0x88),
              ]);
            });
          });

          describe("when the player is black", () => {
            it("does not include the castling move", () => {
              const fen = parseFen("r3kb1r/3ppp2/8/8/8/4R3/3PPP2/R3KB1R b KQk - 0 1");
              expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
                encodeMove0x88(E8_0x88, D8_0x88, NO_PIECE_0x88),
              ]);
            });
          });
        });
      });

      describe("when the attack is not blocked", () => {
        describe("when the player is white", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r3kb1r/3ppp2/4r3/8/8/8/3P1P2/R3KB1R w KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
              encodeMove0x88(E1_0x88, D1_0x88, NO_PIECE_0x88),
            ]);
          });
        });

        describe("when the player is black", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r3kb1r/3p1p2/8/8/8/4R3/3PPP2/R3KB1R b KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
              encodeMove0x88(E8_0x88, D8_0x88, NO_PIECE_0x88),
            ]);
          });
        });
      });
    });

    describe("when the king would castle through check", () => {
      describe("when the attack is blocked", () => {
        describe("when the king has castling rights", () => {
          describe("when the player is white", () => {
            it("includes the castling move", () => {
              const fen = parseFen("r3kb1r/2pppp2/1B6/8/8/1b6/2PPPP2/R3KB1R w KQkq - 0 1");
              expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
                encodeMove0x88(E1_0x88, D1_0x88, NO_PIECE_0x88),
                encodeMove0x88(E1_0x88, C1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
              ]);
            });
          });

          describe("when the player is black", () => {
            it("includes the castling move", () => {
              const fen = parseFen("r3kb1r/2pppp2/1B6/8/8/1b6/2PPPP2/R3KB1R b KQkq - 0 1");
              expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
                encodeMove0x88(E8_0x88, D8_0x88, NO_PIECE_0x88),
                encodeMove0x88(E8_0x88, C8_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
              ]);
            });
          });
        });

        describe("when the king does not have castling rights", () => {
          describe("when the player is white", () => {
            it("does not include the castling move", () => {
              const fen = parseFen("r3kb1r/2pppp2/1B6/8/8/1b6/2PPPP2/R3KB1R w Kkq - 0 1");
              expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
                encodeMove0x88(E1_0x88, D1_0x88, NO_PIECE_0x88),
              ]);
            });
          });

          describe("when the player is black", () => {
            it("does not include the castling move", () => {
              const fen = parseFen("r3kb1r/2pppp2/1B6/8/8/1b6/2PPPP2/R3KB1R b KQk - 0 1");
              expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
                encodeMove0x88(E8_0x88, D8_0x88, NO_PIECE_0x88),
              ]);
            });
          });
        });
      });

      describe("when the attack is not blocked", () => {
        describe("when the player is white", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r3kb1r/3ppp2/1B6/8/8/1b6/3PPP2/R3KB1R w KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([]);
          });
        });

        describe("when the player is black", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r3kb1r/3ppp2/1B6/8/8/1b6/3PPP2/R3KB1R b KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([]);
          });
        });
      });
    });

    describe("when the king would castle into check", () => {
      describe("when the attack is blocked", () => {
        describe("when the king has castling rights", () => {
          describe("when the player is white", () => {
            it("includes the castling move", () => {
              const fen = parseFen("r1r1kb1r/3ppp2/8/8/8/8/2PPPP2/R3KB1R w KQkq - 0 1");
              expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
                encodeMove0x88(E1_0x88, D1_0x88, NO_PIECE_0x88),
                encodeMove0x88(E1_0x88, C1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
              ]);
            });
          });

          describe("when the player is black", () => {
            it("includes the castling move", () => {
              const fen = parseFen("r3kb1r/2pppp2/8/8/8/8/3PPP2/R1R1KB1R b KQkq - 0 1");
              expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
                encodeMove0x88(E8_0x88, D8_0x88, NO_PIECE_0x88),
                encodeMove0x88(E8_0x88, C8_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88),
              ]);
            });
          });
        });

        describe("when the king does not have castling rights", () => {
          describe("when the player is white", () => {
            it("does not include the castling move", () => {
              const fen = parseFen("r1r1kb1r/3ppp2/8/8/8/8/2PPPP2/R3KB1R w Kkq - 0 1");
              expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
                encodeMove0x88(E1_0x88, D1_0x88, NO_PIECE_0x88),
              ]);
            });
          });

          describe("when the player is black", () => {
            it("does not include the castling move", () => {
              const fen = parseFen("r3kb1r/2pppp2/8/8/8/8/3PPP2/R1R1KB1R b KQk - 0 1");
              expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
                encodeMove0x88(E8_0x88, D8_0x88, NO_PIECE_0x88),
              ]);
            });
          });
        });
      });

      describe("when the attack is not blocked", () => {
        describe("when the player is white", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r1r1kb1r/3ppp2/8/8/8/8/3PPP2/R3KB1R w KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
              encodeMove0x88(E1_0x88, D1_0x88, NO_PIECE_0x88),
            ]);
          });
        });

        describe("when the player is black", () => {
          it("does not include the castling move", () => {
            const fen = parseFen("r3kb1r/3ppp2/1N6/8/8/8/3PPP2/R3KB1R b KQkq - 0 1");
            expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
              encodeMove0x88(E8_0x88, D8_0x88, NO_PIECE_0x88),
            ]);
          });
        });
      });
    });

    describe("when the through square is not empty", () => {
      describe("when the player is white", () => {
        it("includes the castling move", () => {
          const fen = parseFen("r2qkb1r/3ppp2/8/8/8/8/3PPP2/R2QKB1R w KQkq - 0 1");
          expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([]);
        });
      });

      describe("when the player is black", () => {
        it("includes the castling move", () => {
          const fen = parseFen("r2qkb1r/3ppp2/8/8/8/8/3PPP2/R2QKB1R b KQkq - 0 1");
          expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([]);
        });
      });
    });

    describe("when the target square is not empty", () => {
      describe("when the player is white", () => {
        it("includes the castling move", () => {
          const fen = parseFen("r1b1kb1r/3ppp2/8/8/8/8/3PPP2/R1B1KB1R w KQkq - 0 1");
          expect(getLegalMoves0x88(fen, E1_0x88)).toMatchMoves([
            encodeMove0x88(E1_0x88, D1_0x88, NO_PIECE_0x88),
          ]);
        });
      });

      describe("when the player is black", () => {
        it("includes the castling move", () => {
          const fen = parseFen("r1b1kb1r/3ppp2/8/8/8/8/3PPP2/R1B1KB1R b KQkq - 0 1");
          expect(getLegalMoves0x88(fen, E8_0x88)).toMatchMoves([
            encodeMove0x88(E8_0x88, D8_0x88, NO_PIECE_0x88),
          ]);
        });
      });
    });
  });
});
