import { STARTING_POSITION } from "../constants";
import { setEnPassantSquare } from "../fen/set-en-passant-square";
import { parseFen } from "./parse-fen";
import { expect, it, describe } from "bun:test";

describe("setEnPassantSquare", () => {
  describe("when the en passant square is null", () => {
    it("returns sets the en passant square to none", () => {
      expect(setEnPassantSquare(STARTING_POSITION.replace("-", "e3"), null)).toEqual(
        STARTING_POSITION,
      );
    });
  });

  describe("when the en passant square is a square", () => {
    it("sets the en passant square", () => {
      expect(setEnPassantSquare(STARTING_POSITION, "e3")).toEqual(
        STARTING_POSITION.replace("-", "e3"),
      );
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("sets the enpassantsquare", () => {
      expect(setEnPassantSquare(parseFen(STARTING_POSITION), "e3")).toEqual(
        parseFen(STARTING_POSITION.replace("-", "e3")),
      );
    });
  });
});
