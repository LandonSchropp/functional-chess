import { STARTING_POSITION } from "../constants";
import { parseFen } from "../fen";
import { getHalfMoveClock } from "../fen/get-half-move-clock";
import { expect, it, describe } from "bun:test";

describe("getHalfMoveClock", () => {
  describe("when the FEN's half move clock is 0", () => {
    it("returns the half move clock", () => {
      expect(getHalfMoveClock(STARTING_POSITION)).toEqual(0);
    });
  });

  describe("when the FEN's half move clock is not 0", () => {
    it("returns the half move clock", () => {
      expect(getHalfMoveClock(STARTING_POSITION.replace("0", "15"))).toEqual(15);
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("returns the the half move clock", () => {
      expect(getHalfMoveClock(parseFen(STARTING_POSITION))).toEqual(0);
    });
  });
});
