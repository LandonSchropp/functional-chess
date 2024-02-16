import { STARTING_POSITION } from "../constants";
import { parseFen } from "./parse-fen";
import { toAscii } from "./to-ascii";
import { describe, it, expect } from "bun:test";
import dedent from "ts-dedent";

describe("toAscii", () => {
  describe("when the FEN is a string", () => {
    it("returns the ASCII string representation of a board", () => {
      const expected = dedent`
        rnbqkbnr
        pppppppp
        ........
        ........
        ........
        ........
        PPPPPPPP
        RNBQKBNR
      `;

      expect(toAscii(STARTING_POSITION)).toBe(expected);
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("returns the ASCII string representation of a board", () => {
      const fen = parseFen(STARTING_POSITION);

      const expected = dedent`
        rnbqkbnr
        pppppppp
        ........
        ........
        ........
        ........
        PPPPPPPP
        RNBQKBNR
      `;

      expect(toAscii(fen)).toBe(expected);
    });
  });
});
