import { STARTING_POSITION } from "../constants";
import { setFullMoveNumber } from "../fen/set-full-move-number";
import { parseFen } from "./parse-fen";
import { expect, it, describe } from "bun:test";

describe("setFullMoveNumber", () => {
  describe("when the fullMoveNumber is the same", () => {
    it("returns the same FEN", () => {
      expect(setFullMoveNumber(STARTING_POSITION, 1)).toEqualFen(STARTING_POSITION);
    });
  });

  describe("when the fullMoveNumber is different", () => {
    it("when the fullMoveNumber is different", () => {
      expect(setFullMoveNumber(STARTING_POSITION, 5)).toEqualFen(
        STARTING_POSITION.replace("1", "5"),
      );
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("sets the fullMoveNumber", () => {
      expect(setFullMoveNumber(parseFen(STARTING_POSITION), 5)).toEqualFen(
        parseFen(STARTING_POSITION.replace("1", "5")),
      );
    });
  });
});
