import { BLACK_PAWN, STARTING_POSITION, WHITE_PAWN } from "../constants";
import { parseFen } from "./parse-fen";
import { setPiece } from "./set-piece";
import { expect, it, describe } from "bun:test";

describe("setPiece", () => {
  describe("when the square contains a piece", () => {
    describe("when the piece is the same as the piece already on the square", () => {
      it("returns the same fen", () => {
        expect(setPiece(STARTING_POSITION, "b2", WHITE_PAWN)).toEqual(STARTING_POSITION);
      });
    });

    describe("when the piece is different from the piece already on the square", () => {
      it("returns the new fen", () => {
        expect(setPiece(STARTING_POSITION, "b2", BLACK_PAWN)).toEqual(
          STARTING_POSITION.replace("PPPPPPPP", "PpPPPPPP"),
        );
      });
    });

    describe("when the piece is null", () => {
      it("removes the piece", () => {
        expect(setPiece(STARTING_POSITION, "b2", null)).toEqual(
          STARTING_POSITION.replace("PPPPPPPP", "P1PPPPPP"),
        );
      });
    });
  });

  describe("when the square is empty", () => {
    describe("when the piece is null", () => {
      it("returns the same fen", () => {
        expect(setPiece(STARTING_POSITION, "b3", null)).toEqual(STARTING_POSITION);
      });
    });

    describe("when the piece is not null", () => {
      it("sets the piece", () => {
        expect(setPiece(STARTING_POSITION, "b3", WHITE_PAWN)).toEqual(
          STARTING_POSITION.replace("8/8/8/8", "8/8/8/1P6"),
        );
      });
    });
  });

  describe("when the fen is a Fen0x88", () => {
    it("sets the piece", () => {
      it("returns the new fen", () => {
        expect(setPiece(parseFen(STARTING_POSITION), "b2", BLACK_PAWN)).toEqual(
          parseFen(STARTING_POSITION.replace("PPPPPPPP", "PpPPPPPP")),
        );
      });
    });
  });
});
