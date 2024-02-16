import { BLACK, STARTING_POSITION, WHITE } from "../constants";
import { parseFen } from "../fen";
import { Color } from "../types";
import { WHITE_0x88, COLOR_TO_COLOR_0x88 } from "./constants";
import { deriveFromFen } from "./derive-from-fen";
import { Fen0x88 } from "./types";
import { describe, it, expect } from "bun:test";

describe("deriveFromFen", () => {
  describe("when the derivation function does not have additional arguments", () => {
    const getColor = deriveFromFen((fen: Fen0x88): Color => {
      return fen[1] === WHITE_0x88 ? WHITE : BLACK;
    });

    describe("when the derivation function is called with a string FEN", () => {
      it("returns the transformed FEN string", () => {
        expect(getColor(STARTING_POSITION)).toEqual(WHITE);
      });
    });

    describe("when the derivation function is called with a Fen0x88", () => {
      it("returns the transformed FEN0x88", () => {
        const fen = parseFen(STARTING_POSITION);
        expect(getColor(fen)).toEqual(WHITE);
      });
    });
  });

  describe("when the derivation function has additional arguments", () => {
    const isColor = deriveFromFen((fen: Fen0x88, color: Color): boolean => {
      return fen[1] === COLOR_TO_COLOR_0x88[color];
    });

    describe("when the derivation function is called with a string FEN", () => {
      it("returns the transformed FEN0x88", () => {
        expect(isColor(STARTING_POSITION, BLACK)).toEqual(false);
      });
    });

    describe("when the derivation function is called with a Fen0x88", () => {
      it("returns the transformed FEN0x88", () => {
        const fen = parseFen(STARTING_POSITION);
        expect(isColor(fen, BLACK)).toEqual(false);
      });
    });
  });
});
