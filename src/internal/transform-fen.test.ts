import { BLACK, STARTING_POSITION, WHITE } from "../constants";
import { parseFen } from "../fen";
import { Color, Fen0x88 } from "../types";
import { WHITE_0x88, BLACK_0x88 } from "./constants";
import { transformFen } from "./transform-fen";
import { describe, it, expect } from "bun:test";

describe("transformFen", () => {
  describe("when the transformation function does not have additional arguments", () => {
    const flipColor = transformFen((fen: Fen0x88): Fen0x88 => {
      return [
        fen[0],
        fen[1] === WHITE_0x88 ? BLACK_0x88 : WHITE_0x88,
        fen[2],
        fen[3],
        fen[4],
        fen[5],
      ];
    });

    describe("when the transformation function is called with a string FEN", () => {
      it("returns the transformed FEN string", () => {
        const expected = STARTING_POSITION.replace(WHITE, BLACK);
        expect(flipColor(STARTING_POSITION)).toEqualFen(expected);
      });
    });

    describe("when the transformation function is called with a Fen0x88", () => {
      it("returns the transformed FEN0x88", () => {
        const fen = parseFen(STARTING_POSITION);
        const expected: Fen0x88 = [fen[0], BLACK_0x88, fen[2], fen[3], fen[4], fen[5]];

        expect(flipColor(fen)).toEqualFen(expected);
      });
    });
  });

  describe("when the transformation function has additional arguments", () => {
    const setColor = transformFen((fen: Fen0x88, color: Color): Fen0x88 => {
      return [fen[0], color === BLACK ? BLACK_0x88 : WHITE_0x88, fen[2], fen[3], fen[4], fen[5]];
    });

    describe("when the transformation function is called with a string FEN", () => {
      it("returns the transformed FEN0x88", () => {
        const expected = STARTING_POSITION.replace(WHITE, BLACK);
        expect(setColor(STARTING_POSITION, BLACK)).toEqualFen(expected);
      });
    });

    describe("when the transformation function is called with a Fen0x88", () => {
      it("returns the transformed FEN0x88", () => {
        const fen = parseFen(STARTING_POSITION);
        const expected: Fen0x88 = [fen[0], BLACK_0x88, fen[2], fen[3], fen[4], fen[5]];

        expect(setColor(fen, BLACK)).toEqualFen(expected);
      });
    });
  });
});
