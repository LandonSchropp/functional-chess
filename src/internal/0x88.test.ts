import { BOARD_SIZE } from "../constants";
import { toAscii, toUnicode } from "./0x88";
import {
  BLACK_BISHOP_0x88,
  BLACK_KING_0x88,
  BLACK_KNIGHT_0x88,
  BLACK_PAWN_0x88,
  BLACK_QUEEN_0x88,
  BLACK_ROOK_0x88,
  BOARD_WIDTH_0x88,
  EMPTY_SQUARE_0x88,
  WHITE_BISHOP_0x88,
  WHITE_KING_0x88,
  WHITE_KNIGHT_0x88,
  WHITE_PAWN_0x88,
  WHITE_QUEEN_0x88,
  WHITE_ROOK_0x88,
} from "./constants";
import { expect, it, describe } from "bun:test";
import dedent from "ts-dedent";

const STARTING_POSITION_BOARD_0x88 = new Uint8Array([
  WHITE_ROOK_0x88,
  WHITE_KNIGHT_0x88,
  WHITE_BISHOP_0x88,
  WHITE_QUEEN_0x88,
  WHITE_KING_0x88,
  WHITE_BISHOP_0x88,
  WHITE_KNIGHT_0x88,
  WHITE_ROOK_0x88,
  ...Array.from({ length: BOARD_WIDTH_0x88 - BOARD_SIZE }, () => EMPTY_SQUARE_0x88),
  ...Array.from({ length: BOARD_SIZE }, () => WHITE_PAWN_0x88),
  ...Array.from({ length: BOARD_WIDTH_0x88 - BOARD_SIZE }, () => EMPTY_SQUARE_0x88),
  ...Array.from({ length: BOARD_WIDTH_0x88 * 4 }, () => EMPTY_SQUARE_0x88),
  ...Array.from({ length: BOARD_SIZE }, () => BLACK_PAWN_0x88),
  ...Array.from({ length: BOARD_WIDTH_0x88 - BOARD_SIZE }, () => EMPTY_SQUARE_0x88),
  BLACK_ROOK_0x88,
  BLACK_KNIGHT_0x88,
  BLACK_BISHOP_0x88,
  BLACK_QUEEN_0x88,
  BLACK_KING_0x88,
  BLACK_BISHOP_0x88,
  BLACK_KNIGHT_0x88,
  BLACK_ROOK_0x88,
  ...Array.from({ length: BOARD_WIDTH_0x88 - BOARD_SIZE }, () => EMPTY_SQUARE_0x88),
]);

describe("toAscii", () => {
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

    expect(toAscii(STARTING_POSITION_BOARD_0x88)).toBe(expected);
  });
});

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
