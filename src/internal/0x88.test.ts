import { BOARD_SIZE, STARTING_POSITION, WHITE_PAWN } from "../constants";
import { InvalidFenError } from "../errors";
import { parseFen, toAscii, toUnicode } from "./0x88";
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

// TODO: Fix this when Bun released the fix for the issue #8243
const TypedInvalidFenError = InvalidFenError as unknown as Error;

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

describe("parseFen", () => {
  describe("when the FEN has less than 6 parts", () => {
    it("raises an UnparsableFenError", () => {
      const fen = STARTING_POSITION.replace(/1$/, "");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the FEN has more than 6 parts", () => {
    it("raises an UnparsableFenError", () => {
      const fen = `${STARTING_POSITION} 1`;
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the position contains invalid characters", () => {
    it("raises an UnparsableFenError", () => {
      const fen = STARTING_POSITION.replace(WHITE_PAWN, "x");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the position has too few ranks", () => {
    it("raises an UnparsableFenError", () => {
      const fen = STARTING_POSITION.replace("8/", "");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the position has too many ranks", () => {
    it("raises an UnparsableFenError", () => {
      const fen = STARTING_POSITION.replace("8", "8/8");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when one of the position's ranks contains too few pieces and empty squares", () => {
    it("raises an UnparsableFenError", () => {
      const fen1 = STARTING_POSITION.replace("8", "7");
      expect(() => parseFen(fen1)).toThrow(TypedInvalidFenError);

      const fen2 = STARTING_POSITION.replace(WHITE_PAWN, "");
      expect(() => parseFen(fen2)).toThrow(TypedInvalidFenError);

      const fen3 = STARTING_POSITION.replace("8", `2${WHITE_PAWN}2${WHITE_PAWN}1`);
      expect(() => parseFen(fen3)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when one of the position's ranks contains too many pieces and empty squares", () => {
    it("raises an UnparsableFenError", () => {
      const fen1 = STARTING_POSITION.replace("8", "9");
      expect(() => parseFen(fen1)).toThrow(TypedInvalidFenError);

      const fen2 = STARTING_POSITION.replace(WHITE_PAWN, `${WHITE_PAWN}${WHITE_PAWN}`);
      expect(() => parseFen(fen2)).toThrow(TypedInvalidFenError);

      const fen3 = STARTING_POSITION.replace("8", `2${WHITE_PAWN}2${WHITE_PAWN}3`);
      expect(() => parseFen(fen3)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the FEN is valid", () => {
    it("parses the FEN", () => {
      expect(parseFen(STARTING_POSITION)).toEqual(STARTING_POSITION_BOARD_0x88);
    });
  });
});
