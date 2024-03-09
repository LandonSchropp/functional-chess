import { STARTING_POSITION } from "../constants";
import { setHalfMoveClock } from "../fen/set-half-move-clock";
import { parseFen } from "./parse-fen";
import { expect, it, describe } from "bun:test";

describe("setHalfMoveClock", () => {
  describe("when the halfMoveClock is the same", () => {
    it("returns the same FEN", () => {
      expect(setHalfMoveClock(STARTING_POSITION, 0)).toEqualFen(STARTING_POSITION);
    });
  });

  describe("when the halfMoveClock is different", () => {
    it("when the halfMoveClock is different", () => {
      expect(setHalfMoveClock(STARTING_POSITION, 5)).toEqualFen(
        STARTING_POSITION.replace("0", "5"),
      );
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("sets the halfMoveClock", () => {
      expect(setHalfMoveClock(parseFen(STARTING_POSITION), 5)).toEqualFen(
        parseFen(STARTING_POSITION.replace("0", "5")),
      );
    });
  });
});
