import { STARTING_POSITION } from "../constants";
import { parseFen } from "./parse-fen";
import { toUnicode } from "./to-unicode";
import { describe, it, expect } from "bun:test";
import dedent from "ts-dedent";

const STARTING_POSITION_UNICODE = dedent`
  ♖♘♗♕♔♗♘♖
  ♙♙♙♙♙♙♙♙
  ········
  ········
  ········
  ········
  ♟︎♟︎♟︎♟︎♟︎♟︎♟︎♟︎
  ♜♞♝♛♚♝♞♜
`;

describe("toUnicode", () => {
  describe("when the FEN is a string", () => {
    it("returns the UNICODE string representation of a board", () => {
      expect(toUnicode(STARTING_POSITION)).toBe(STARTING_POSITION_UNICODE);
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("returns the UNICODE string representation of a board", () => {
      const fen = parseFen(STARTING_POSITION);
      expect(toUnicode(fen)).toBe(STARTING_POSITION_UNICODE);
    });
  });
});
