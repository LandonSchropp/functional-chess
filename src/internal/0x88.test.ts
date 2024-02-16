import { toUnicode } from "./0x88";
import { expect, it, describe } from "bun:test";
import dedent from "ts-dedent";

describe("toUnicode", () => {
  it("returns the UNICODE string representation of a board", () => {
    const expected = dedent`
      ♖♘♗♕♔♗♘♖
      ♙♙♙♙♙♙♙♙
      ········
      ········
      ········
      ········
      ♟︎♟︎♟︎♟︎♟︎♟︎♟︎♟︎
      ♜♞♝♛♚♝♞♜
    `;

    expect(toUnicode(STARTING_POSITION_BOARD_0x88)).toBe(expected);
  });
});
