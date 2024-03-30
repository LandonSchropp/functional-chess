import { parseFen } from "../../fen";
import {
  E2_0x88,
  E1_0x88,
  F1_0x88,
  F2_0x88,
  F3_0x88,
  E3_0x88,
  D3_0x88,
  D2_0x88,
  D1_0x88,
  E8_0x88,
  E7_0x88,
  E6_0x88,
  F6_0x88,
  F7_0x88,
  F8_0x88,
  D8_0x88,
  D7_0x88,
  D6_0x88,
  NO_PIECE_0x88,
} from "../constants";
import { CAPTURE_FLAG_0x88 } from "../constants/moves";
import { encodeMove0x88 } from "../encode-move-0x88";
import { getLegalMoves0x88 } from "../get-legal-moves-0x88";
import { expect, describe, it } from "bun:test";

describe("getLegalMoves0x88 (king moves)", () => {
  describe("when the target squares are empty", () => {
    describe("when the player is white", () => {
      it("includes the moves", () => {
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
      it("includes the moves", () => {
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

  describe("when the target squares are occupied by pieces of the same color", () => {
    describe("when the player is white", () => {
      it("does not include the moves", () => {
        const fen = parseFen("3rrr2/3rkr2/3rrr2/8/8/3RRR2/3RKR2/3RRR2 w - - 0 1");
        expect(getLegalMoves0x88(fen, E2_0x88)).toMatchMoves([]);
      });
    });

    describe("when the player is black", () => {
      it("does not include the moves", () => {
        const fen = parseFen("3rrr2/3rkr2/3rrr2/8/8/3RRR2/3RKR2/3RRR2 b - - 0 1");
        expect(getLegalMoves0x88(fen, E7_0x88)).toMatchMoves([]);
      });
    });
  });

  describe("when the target squares are occupied by pieces of the opposite color", () => {
    describe("when the player is white", () => {
      it("includes the moves", () => {
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
      it("includes the moves", () => {
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

  describe("when the target squares are occupied by pieces of the same color", () => {
    describe("when the player is white", () => {
      it("does not include the moves", () => {
        const fen = parseFen("R7/4k3/R7/3R1R2/3r1r2/r7/4K3/r7 w - - 0 1");
        expect(getLegalMoves0x88(fen, E2_0x88)).toMatchMoves([]);
      });
    });

    describe("when the player is black", () => {
      it("does not include the moves", () => {
        const fen = parseFen("R7/4k3/R7/3R1R2/3r1r2/r7/4K3/r7 b - - 0 1");
        expect(getLegalMoves0x88(fen, E7_0x88)).toMatchMoves([]);
      });
    });
  });
});
