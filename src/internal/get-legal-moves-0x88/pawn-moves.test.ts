import { parseFen } from "../../fen";
import {
  E2_0x88,
  E3_0x88,
  E4_0x88,
  NO_PIECE_0x88,
  E7_0x88,
  E6_0x88,
  E5_0x88,
  E8_0x88,
  WHITE_KNIGHT_0x88,
  WHITE_BISHOP_0x88,
  WHITE_ROOK_0x88,
  WHITE_QUEEN_0x88,
  E1_0x88,
  BLACK_KNIGHT_0x88,
  BLACK_BISHOP_0x88,
  BLACK_ROOK_0x88,
  BLACK_QUEEN_0x88,
  D5_0x88,
  D4_0x88,
  F5_0x88,
  F4_0x88,
  D6_0x88,
  D3_0x88,
  F6_0x88,
  F3_0x88,
  A4_0x88,
  A5_0x88,
  H4_0x88,
  H5_0x88,
} from "../constants";
import { DOUBLE_PAWN_FLAG_0x88, CAPTURE_FLAG_0x88, EN_PASSANT_FLAG_0x88 } from "../constants/moves";
import { encodeMove0x88 } from "../encode-move-0x88";
import { getLegalMoves0x88 } from "../get-legal-moves-0x88";
import { expect, describe, it } from "bun:test";

describe("getLegalMoves0x88 (pawn moves)", () => {
  describe("when the pawn is on its starting square and is not blocked", () => {
    describe("when the player is white", () => {
      it("returns the single and double pawn moves", () => {
        const fen = parseFen("8/k7/8/8/8/8/K3P3/8 w - - 0 1");
        expect(getLegalMoves0x88(fen, E2_0x88)).toMatchMoves([
          encodeMove0x88(E2_0x88, E3_0x88),
          encodeMove0x88(E2_0x88, E4_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88),
        ]);
      });
    });

    describe("when the player is black", () => {
      it("returns the single and double pawn moves", () => {
        const fen = parseFen("8/k3p3/8/8/8/8/K7/8 b - - 0 1");
        expect(getLegalMoves0x88(fen, E7_0x88)).toMatchMoves([
          encodeMove0x88(E7_0x88, E6_0x88),
          encodeMove0x88(E7_0x88, E5_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88),
        ]);
      });
    });
  });

  describe("when the pawn is on its starting square and the double pawn move is blocked", () => {
    describe("when the player is white", () => {
      it("returns the single and double pawn moves", () => {
        const fen = parseFen("8/k7/8/8/4p3/8/K3P3/8 w - - 0 1");
        expect(getLegalMoves0x88(fen, E2_0x88)).toMatchMoves([encodeMove0x88(E2_0x88, E3_0x88)]);
      });
    });

    describe("when the player is black", () => {
      it("returns the single and double pawn moves", () => {
        const fen = parseFen("8/k3p3/8/4P3/8/8/K7/8 b - - 0 1");
        expect(getLegalMoves0x88(fen, E7_0x88)).toMatchMoves([encodeMove0x88(E7_0x88, E6_0x88)]);
      });
    });
  });

  describe("when the pawn is on its starting square and both pawn moves are blocked", () => {
    describe("when the player is white", () => {
      it("returns an empty array", () => {
        const fen = parseFen("8/k7/8/8/8/4p3/K3P3/8 w - - 0 1");
        expect(getLegalMoves0x88(fen, E2_0x88)).toMatchMoves([]);
      });
    });

    describe("when the player is black", () => {
      it("returns an empty array", () => {
        const fen = parseFen("8/k3p3/4P3/8/8/8/K7/8 b - - 0 1");
        expect(getLegalMoves0x88(fen, E7_0x88)).toMatchMoves([]);
      });
    });
  });

  describe("when the pawn is not on its starting square and is is not blocked", () => {
    describe("when the player is white", () => {
      it("returns the pawn move", () => {
        const fen = parseFen("8/k3p3/8/4P3/8/8/K7/8 w - - 0 1");
        expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([encodeMove0x88(E5_0x88, E6_0x88)]);
      });
    });

    describe("when the player is black", () => {
      it("returns the pawn move", () => {
        const fen = parseFen("8/k7/8/8/4p3/8/K3P3/8 b - - 0 1");
        expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([encodeMove0x88(E4_0x88, E3_0x88)]);
      });
    });
  });

  describe("when the pawn is not on its starting square and is blocked", () => {
    describe("when the player is white", () => {
      it("returns an empty array", () => {
        const fen = parseFen("8/k7/4p3/4P3/8/8/K7/8 w - - 0 1");
        expect(getLegalMoves0x88(fen, E2_0x88)).toMatchMoves([]);
      });
    });

    describe("when the player is black", () => {
      it("returns an empty array", () => {
        const fen = parseFen("8/k7/8/8/4p3/4P3/K7/8 b - - 0 1");
        expect(getLegalMoves0x88(fen, E7_0x88)).toMatchMoves([]);
      });
    });
  });

  describe("when the pawn is on the rank before it would promote and is not blocked", () => {
    describe("when the player is white", () => {
      it("returns all of the possible promotion moves", () => {
        const fen = parseFen("8/k3P3/8/8/8/8/K7/8 w - - 0 1");

        expect(getLegalMoves0x88(fen, E7_0x88)).toMatchMoves([
          encodeMove0x88(E7_0x88, E8_0x88, WHITE_KNIGHT_0x88),
          encodeMove0x88(E7_0x88, E8_0x88, WHITE_BISHOP_0x88),
          encodeMove0x88(E7_0x88, E8_0x88, WHITE_ROOK_0x88),
          encodeMove0x88(E7_0x88, E8_0x88, WHITE_QUEEN_0x88),
        ]);
      });
    });

    describe("when the player is black", () => {
      it("returns all of the possible promotion moves", () => {
        const fen = parseFen("8/k7/8/8/8/8/K3p3/8 b - - 0 1");

        expect(getLegalMoves0x88(fen, E2_0x88)).toMatchMoves([
          encodeMove0x88(E2_0x88, E1_0x88, BLACK_KNIGHT_0x88),
          encodeMove0x88(E2_0x88, E1_0x88, BLACK_BISHOP_0x88),
          encodeMove0x88(E2_0x88, E1_0x88, BLACK_ROOK_0x88),
          encodeMove0x88(E2_0x88, E1_0x88, BLACK_QUEEN_0x88),
        ]);
      });
    });
  });

  describe("when the pawn is on the rank before it would promote but is blocked", () => {
    describe("when the player is white", () => {
      it("returns an empty array", () => {
        const fen = parseFen("4b3/k3P3/8/8/8/8/K7/8 w - - 0 1");
        expect(getLegalMoves0x88(fen, E7_0x88)).toMatchMoves([]);
      });
    });

    describe("when the player is black", () => {
      it("returns an empty array", () => {
        const fen = parseFen("8/k7/8/8/8/8/K3p3/4B3 b - - 0 1");
        expect(getLegalMoves0x88(fen, E2_0x88)).toMatchMoves([]);
      });
    });
  });

  describe("when the pawn is not on its starting square, can't promote and is not blocked", () => {
    describe("when the player is white", () => {
      it("returns the pawn move", () => {
        const fen = parseFen("8/k7/8/8/4P3/8/K7/8 w - - 0 1");
        expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([encodeMove0x88(E4_0x88, E5_0x88)]);
      });
    });

    describe("when the player is black", () => {
      it("returns the pawn move", () => {
        const fen = parseFen("8/k7/8/4p3/8/8/K7/8 b - - 0 1");
        expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([encodeMove0x88(E5_0x88, E4_0x88)]);
      });
    });
  });

  describe("when the pawn can legally capture to the left", () => {
    describe("when the player is white", () => {
      it("returns the capture", () => {
        const fen = parseFen("8/k7/8/3pb3/4P3/8/K7/8 w - - 0 1");

        expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([
          encodeMove0x88(E4_0x88, D5_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
        ]);
      });
    });

    describe("when the player is black", () => {
      it("returns the capture", () => {
        const fen = parseFen("8/k7/8/4p3/3PB3/8/K7/8 b - - 0 1");

        expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([
          encodeMove0x88(E5_0x88, D4_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
        ]);
      });
    });
  });

  describe("when the pawn can legally capture to the right", () => {
    describe("when the player is white", () => {
      it("returns the capture", () => {
        const fen = parseFen("8/k7/8/4bp2/4P3/8/K7/8 w - - 0 1");

        expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([
          encodeMove0x88(E4_0x88, F5_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
        ]);
      });
    });

    describe("when the player is black", () => {
      it("returns the capture", () => {
        const fen = parseFen("8/k7/8/4p3/4BP2/8/K7/8 b - - 0 1");

        expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([
          encodeMove0x88(E5_0x88, F4_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88),
        ]);
      });
    });
  });

  describe("when the pawn can not legally capture to the left", () => {
    describe("when the player is white", () => {
      it("returns an empty array", () => {
        const fen = parseFen("8/k7/8/3Pb3/4P3/8/K7/8 w - - 0 1");

        expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([]);
      });
    });

    describe("when the player is black", () => {
      it("returns the capture", () => {
        const fen = parseFen("8/k7/8/4p3/3pB3/8/K7/8 b - - 0 1");

        expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([]);
      });
    });
  });

  describe("when the pawn can not legally capture to the right", () => {
    describe("when the player is white", () => {
      it("returns an empty array", () => {
        const fen = parseFen("8/k7/8/4bP2/4P3/8/K7/8 w - - 0 1");

        expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([]);
      });
    });

    describe("when the player is black", () => {
      it("returns the capture", () => {
        const fen = parseFen("8/k7/8/4p3/4Bp2/8/K7/8 b - - 0 1");

        expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([]);
      });
    });
  });

  describe("when the pawn can en passant capture to the left", () => {
    describe("when the player is white", () => {
      it("returns the capture", () => {
        const fen = parseFen("8/k7/4n3/3pP3/8/8/K7/8 w - d6 0 2");

        expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([
          encodeMove0x88(E5_0x88, D6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88 | EN_PASSANT_FLAG_0x88),
        ]);
      });
    });

    describe("when the player is black", () => {
      it("returns the capture", () => {
        const fen = parseFen("8/k7/8/8/3Pp3/4N3/K7/8 b - d3 0 2");

        expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([
          encodeMove0x88(E4_0x88, D3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88 | EN_PASSANT_FLAG_0x88),
        ]);
      });
    });
  });

  describe("when the pawn can en passant capture to the right", () => {
    describe("when the player is white", () => {
      it("returns the capture", () => {
        const fen = parseFen("8/k7/4n3/4Pp2/8/8/K7/8 w - f6 0 2");

        expect(getLegalMoves0x88(fen, E5_0x88)).toMatchMoves([
          encodeMove0x88(E5_0x88, F6_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88 | EN_PASSANT_FLAG_0x88),
        ]);
      });
    });

    describe("when the player is black", () => {
      it("returns the capture", () => {
        const fen = parseFen("8/k7/8/8/4pP2/4N3/K7/8 b - f3 0 2");

        expect(getLegalMoves0x88(fen, E4_0x88)).toMatchMoves([
          encodeMove0x88(E4_0x88, F3_0x88, NO_PIECE_0x88, CAPTURE_FLAG_0x88 | EN_PASSANT_FLAG_0x88),
        ]);
      });
    });
  });

  describe("when the pawn is on the a file and can't capture", () => {
    describe("when the player is white", () => {
      it("returns an empty array", () => {
        const fen = parseFen("8/k7/8/P7/p7/8/K7/8 w - - 0 1");
        expect(getLegalMoves0x88(fen, A4_0x88)).toMatchMoves([]);
      });
    });

    describe("when the player is black", () => {
      it("returns an empty array", () => {
        const fen = parseFen("8/k7/8/P7/p7/8/K7/8 b - - 0 1");
        expect(getLegalMoves0x88(fen, A5_0x88)).toMatchMoves([]);
      });
    });
  });

  describe("when the pawn is on the h file and can't capture", () => {
    describe("when the player is white", () => {
      it("returns an empty array", () => {
        const fen = parseFen("8/k7/8/7P/7p/8/K7/8 w - - 0 1");
        expect(getLegalMoves0x88(fen, H4_0x88)).toMatchMoves([]);
      });
    });

    describe("when the player is black", () => {
      it("returns an empty array", () => {
        const fen = parseFen("8/k7/8/7P/7p/8/K7/8 b - - 0 1");
        expect(getLegalMoves0x88(fen, H5_0x88)).toMatchMoves([]);
      });
    });
  });
});
