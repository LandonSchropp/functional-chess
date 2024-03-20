import { KINGS_PAWN_OPENING } from "../../../test/test-constants";
import { STARTING_POSITION } from "../../constants";
import { parseFen } from "../../fen";
import { A3_0x88, A6_0x88 } from "../constants";
import { getLegalMoves0x88 } from "../get-legal-moves-0x88";
import { expect, describe, it } from "bun:test";

describe("getLegalMoves0x88 (empty squares)", () => {
  describe("when the square is empty", () => {
    describe("when the player is white", () => {
      it("returns an empty array", () => {
        const fen = parseFen(STARTING_POSITION);
        expect(getLegalMoves0x88(fen, A3_0x88)).toMatchMoves([]);
      });
    });

    describe("when the player is black", () => {
      it("returns an empty array", () => {
        const fen = parseFen(KINGS_PAWN_OPENING);
        expect(getLegalMoves0x88(fen, A6_0x88)).toMatchMoves([]);
      });
    });
  });
});
