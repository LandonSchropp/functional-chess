import { STARTING_POSITION } from "../constants";
import { parseFen } from "./parse-fen";
import { toAscii } from "./to-ascii";
import { describe, it, expect } from "bun:test";
import dedent from "ts-dedent";

const STARTING_POSITION_ASCII = dedent`
  rnbqkbnr
  pppppppp
  ........
  ........
  ........
  ........
  PPPPPPPP
  RNBQKBNR
`;

describe("toAscii", () => {
  describe("when the FEN is a string", () => {
    it("returns the ASCII string representation of a board", () => {
      expect(toAscii(STARTING_POSITION)).toBe(STARTING_POSITION_ASCII);
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("returns the ASCII string representation of a board", () => {
      const fen = parseFen(STARTING_POSITION);
      expect(toAscii(fen)).toBe(STARTING_POSITION_ASCII);
    });
  });
});
