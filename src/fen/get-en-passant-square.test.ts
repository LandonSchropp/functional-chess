import { STARTING_POSITION } from "../constants";
import { getEnPassantSquare } from "../fen/get-en-passant-square";
import { parseFen } from "./parse-fen";
import { expect, it, describe } from "bun:test";

describe("getEnPassantSquare", () => {
  describe("when the FEN has an en passant square", () => {
    it("returns white", () => {
      expect(getEnPassantSquare(STARTING_POSITION.replace("-", "e3"))).toEqual("e3");
    });
  });

  describe("when the fEN does not have an en passant square", () => {
    it("returns null", () => {
      expect(getEnPassantSquare(STARTING_POSITION)).toBeNull();
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("returns the en passant square", () => {
      expect(getEnPassantSquare(parseFen(STARTING_POSITION.replace("-", "e3")))).toEqual("e3");
    });
  });
});
