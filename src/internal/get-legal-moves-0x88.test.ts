import { STARTING_POSITION } from "../constants";
import { parseFen } from "../fen";
import {
  A2_0x88,
  A3_0x88,
  A4_0x88,
  B1_0x88,
  B2_0x88,
  B3_0x88,
  B4_0x88,
  C2_0x88,
  C3_0x88,
  C4_0x88,
  D2_0x88,
  D3_0x88,
  D4_0x88,
  E2_0x88,
  E3_0x88,
  E4_0x88,
  F2_0x88,
  F3_0x88,
  F4_0x88,
  G1_0x88,
  G2_0x88,
  G3_0x88,
  G4_0x88,
  H2_0x88,
  H3_0x88,
  H4_0x88,
  NO_PIECE_0x88,
} from "./constants";
import { DOUBLE_PAWN_FLAG_0x88 } from "./constants/moves";
import { encodeMove0x88 } from "./encode-move-0x88";
import { getLegalMoves0x88 } from "./get-legal-moves-0x88";
import { expect, describe, it } from "bun:test";

describe("getLegalMovesForSquare0x88 (king moves)", () => {
  describe("when the position has legal moves", () => {
    it("returns the moves", () => {
      const fen = parseFen(STARTING_POSITION);

      expect(getLegalMoves0x88(fen)).toMatchMoves([
        encodeMove0x88(A2_0x88, A3_0x88),
        encodeMove0x88(A2_0x88, A4_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88),
        encodeMove0x88(B2_0x88, B3_0x88),
        encodeMove0x88(B2_0x88, B4_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88),
        encodeMove0x88(C2_0x88, C3_0x88),
        encodeMove0x88(C2_0x88, C4_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88),
        encodeMove0x88(D2_0x88, D3_0x88),
        encodeMove0x88(D2_0x88, D4_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88),
        encodeMove0x88(E2_0x88, E3_0x88),
        encodeMove0x88(E2_0x88, E4_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88),
        encodeMove0x88(F2_0x88, F3_0x88),
        encodeMove0x88(F2_0x88, F4_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88),
        encodeMove0x88(G2_0x88, G3_0x88),
        encodeMove0x88(G2_0x88, G4_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88),
        encodeMove0x88(H2_0x88, H3_0x88),
        encodeMove0x88(H2_0x88, H4_0x88, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88),
        encodeMove0x88(B1_0x88, A3_0x88),
        encodeMove0x88(B1_0x88, C3_0x88),
        encodeMove0x88(G1_0x88, F3_0x88),
        encodeMove0x88(G1_0x88, H3_0x88),
      ]);
    });
  });

  // TODO: This library allows invalid positions to be parsed. However, invalid positions should
  // never have any legal moves.

  describe("when the player is checkmated", () => {
    it("returns an empty array", () => {
      const fen = parseFen("r1bqk1nr/ppppbQpp/2n5/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4");

      expect(getLegalMoves0x88(fen)).toMatchMoves([]);
    });
  });

  describe("when the player is stalemated", () => {
    it("returns an empty array", () => {
      const fen = parseFen("8/8/8/8/8/6k1/5q2/7K w - - 0 1");

      expect(getLegalMoves0x88(fen)).toMatchMoves([]);
    });
  });
});
