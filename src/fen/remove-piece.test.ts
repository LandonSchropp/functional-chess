import { STARTING_POSITION } from "../constants";
import { parseFen } from "./parse-fen";
import { removePiece } from "./remove-piece";
import { expect, it, describe } from "bun:test";

describe("removePiece", () => {
  describe("when the square contains a piece", () => {
    it("removes the piece", () => {
      expect(removePiece(STARTING_POSITION, "b2")).toEqualFen(
        STARTING_POSITION.replace("PPPPPPPP", "P1PPPPPP"),
      );
    });
  });

  describe("when the square is empty", () => {
    it("returns the same fen", () => {
      expect(removePiece(STARTING_POSITION, "b3")).toEqualFen(STARTING_POSITION);
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("removes the piece", () => {
      expect(removePiece(parseFen(STARTING_POSITION), "b2")).toEqualFen(
        parseFen(STARTING_POSITION.replace("PPPPPPPP", "P1PPPPPP")),
      );
    });
  });
});
