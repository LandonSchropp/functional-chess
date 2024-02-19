import { BLACK, STARTING_POSITION, WHITE } from "../constants";
import { setColor } from "../fen/set-color";
import { parseFen } from "./parse-fen";
import { expect, it, describe } from "bun:test";

describe("setColor", () => {
  describe("when the color is the same", () => {
    it("returns the same FEN", () => {
      expect(setColor(STARTING_POSITION, WHITE)).toEqual(STARTING_POSITION);
    });
  });

  describe("when the color is different", () => {
    it("when the color is different", () => {
      expect(setColor(STARTING_POSITION, BLACK)).toEqual(STARTING_POSITION.replace(WHITE, BLACK));
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("sets the color", () => {
      expect(setColor(parseFen(STARTING_POSITION), BLACK)).toEqual(
        parseFen(STARTING_POSITION.replace(WHITE, BLACK)),
      );
    });
  });
});
