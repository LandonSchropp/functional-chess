import { EMPTY_POSITION, STARTING_POSITION } from "../constants";
import { parseFen } from "./parse-fen";
import { toFen } from "./to-fen";
import { describe, it, expect } from "bun:test";

describe("toFen", () => {
  describe("when the FEN is the starting position", () => {
    it("should return a FEN representing the position", () => {
      expect(toFen(parseFen(STARTING_POSITION))).toEqualFen(STARTING_POSITION);
    });
  });

  describe("when the FEN is an empty position", () => {
    it("should return a FEN representing the position", () => {
      expect(toFen(parseFen(EMPTY_POSITION))).toEqualFen(EMPTY_POSITION);
    });
  });

  describe("when the FEN has a mix of castling rights", () => {
    it("should return a FEN representing the position", () => {
      const fen = STARTING_POSITION.replace("KQ", "");
      expect(toFen(parseFen(fen))).toEqualFen(fen);
    });
  });

  describe("when the FEN has an en passant square", () => {
    it("should return a FEN representing the position", () => {
      const fen = STARTING_POSITION.replace("-", "e3");
      expect(toFen(parseFen(fen))).toEqualFen(fen);
    });
  });
});
