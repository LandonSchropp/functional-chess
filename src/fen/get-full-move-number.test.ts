import { STARTING_POSITION } from "../constants";
import { parseFen } from "../fen";
import { getFullMoveNumber } from "../fen/get-full-move-number";
import { expect, it, describe } from "bun:test";

describe("getFullMoveNumber", () => {
  describe("when the FEN's full move number is 1", () => {
    it("returns the full move number", () => {
      expect(getFullMoveNumber(STARTING_POSITION)).toEqual(1);
    });
  });

  describe("when the FEN's full move number is not 1", () => {
    it("returns the full move number", () => {
      expect(getFullMoveNumber(STARTING_POSITION.replace("1", "15"))).toEqual(15);
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("returns the the full move number", () => {
      expect(getFullMoveNumber(parseFen(STARTING_POSITION))).toEqual(1);
    });
  });
});
