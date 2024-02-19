import {
  BLACK,
  BOARD_SIZE,
  EMPTY_POSITION,
  STARTING_POSITION,
  WHITE,
  WHITE_PAWN,
} from "../constants";
import { UnparsableFenError } from "../errors";
import {
  WHITE_ROOK_0x88,
  WHITE_KNIGHT_0x88,
  WHITE_BISHOP_0x88,
  WHITE_QUEEN_0x88,
  WHITE_KING_0x88,
  BOARD_WIDTH_0x88,
  EMPTY_PIECE_0x88,
  WHITE_PAWN_0x88,
  BLACK_PAWN_0x88,
  BLACK_ROOK_0x88,
  BLACK_KNIGHT_0x88,
  BLACK_BISHOP_0x88,
  BLACK_QUEEN_0x88,
  BLACK_KING_0x88,
  WHITE_0x88,
  BLACK_0x88,
  SQUARE_TO_SQUARE_0x88,
  EMPTY_EN_PASSANT_SQUARE_0x88,
} from "../internal/constants";
import { Board0x88 } from "../internal/types";
import { parseFen } from "./parse-fen";
import { expect, it, describe } from "bun:test";

const WHITESPACE = "\t \n\r\v\f";

// TODO: Remove this when Bun released the fix for the issue #8243
const TypedInvalidFenError = UnparsableFenError as unknown as Error;

const STARTING_POSITION_BOARD_0x88: Board0x88 = [
  WHITE_ROOK_0x88,
  WHITE_KNIGHT_0x88,
  WHITE_BISHOP_0x88,
  WHITE_QUEEN_0x88,
  WHITE_KING_0x88,
  WHITE_BISHOP_0x88,
  WHITE_KNIGHT_0x88,
  WHITE_ROOK_0x88,
  ...new Array(BOARD_WIDTH_0x88 - BOARD_SIZE).fill(EMPTY_PIECE_0x88),
  ...new Array(BOARD_SIZE).fill(WHITE_PAWN_0x88),
  ...new Array(BOARD_WIDTH_0x88 - BOARD_SIZE).fill(EMPTY_PIECE_0x88),
  ...new Array(BOARD_WIDTH_0x88 * 4).fill(EMPTY_PIECE_0x88),
  ...new Array(BOARD_SIZE).fill(BLACK_PAWN_0x88),
  ...new Array(BOARD_WIDTH_0x88 - BOARD_SIZE).fill(EMPTY_PIECE_0x88),
  BLACK_ROOK_0x88,
  BLACK_KNIGHT_0x88,
  BLACK_BISHOP_0x88,
  BLACK_QUEEN_0x88,
  BLACK_KING_0x88,
  BLACK_BISHOP_0x88,
  BLACK_KNIGHT_0x88,
  BLACK_ROOK_0x88,
  ...new Array(BOARD_WIDTH_0x88 - BOARD_SIZE).fill(EMPTY_PIECE_0x88),
] as Board0x88;

describe("parseFen", () => {
  describe("when the FEN has less than 6 parts", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace(/1$/, "");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the FEN has more than 6 parts", () => {
    it("raises an InvalidFenError", () => {
      const fen = `${STARTING_POSITION} 1`;
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the position contains invalid characters", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace(WHITE_PAWN, "x");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the position has too few ranks", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace("8/", "");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the position has too many ranks", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace("8", "8/8");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when one of the position's ranks contains too few pieces and empty squares", () => {
    it("raises an InvalidFenError", () => {
      const fen1 = STARTING_POSITION.replace("8", "7");
      expect(() => parseFen(fen1)).toThrow(TypedInvalidFenError);

      const fen2 = STARTING_POSITION.replace(WHITE_PAWN, "");
      expect(() => parseFen(fen2)).toThrow(TypedInvalidFenError);

      const fen3 = STARTING_POSITION.replace("8", `2${WHITE_PAWN}2${WHITE_PAWN}1`);
      expect(() => parseFen(fen3)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when one of the position's ranks contains too many pieces and empty squares", () => {
    it("raises an InvalidFenError", () => {
      const fen1 = STARTING_POSITION.replace("8", "9");
      expect(() => parseFen(fen1)).toThrow(TypedInvalidFenError);

      const fen2 = STARTING_POSITION.replace(WHITE_PAWN, `${WHITE_PAWN}${WHITE_PAWN}`);
      expect(() => parseFen(fen2)).toThrow(TypedInvalidFenError);

      const fen3 = STARTING_POSITION.replace("8", `2${WHITE_PAWN}2${WHITE_PAWN}3`);
      expect(() => parseFen(fen3)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the position is the starting FEN", () => {
    it("parses the FEN", () => {
      expect(parseFen(STARTING_POSITION)).toEqual([
        STARTING_POSITION_BOARD_0x88,
        WHITE_0x88,
        0b1111,
        EMPTY_EN_PASSANT_SQUARE_0x88,
        0,
        1,
      ]);
    });
  });

  describe("when the position only contains two kings", () => {
    it("parses the FEN", () => {
      const fen = "7k/8/8/8/8/8/8/K7 w - - 0 1";

      expect(parseFen(fen)).toEqual([
        [
          WHITE_KING_0x88,
          ...new Array(BOARD_WIDTH_0x88 * BOARD_SIZE - BOARD_SIZE - 2).fill(EMPTY_PIECE_0x88),
          BLACK_KING_0x88,
          ...new Array(BOARD_WIDTH_0x88 - BOARD_SIZE).fill(EMPTY_PIECE_0x88),
        ] as Board0x88,
        WHITE_0x88,
        0b0000,
        EMPTY_EN_PASSANT_SQUARE_0x88,
        0,
        1,
      ]);
    });
  });

  describe("when the position is empty", () => {
    it("parses the FEN", () => {
      expect(parseFen(EMPTY_POSITION)).toEqual([
        new Array(BOARD_WIDTH_0x88 * BOARD_SIZE).fill(EMPTY_PIECE_0x88) as Board0x88,
        WHITE_0x88,
        0b0000,
        EMPTY_EN_PASSANT_SQUARE_0x88,
        0,
        1,
      ]);
    });
  });

  describe("when the position is illegal but parsable", () => {
    it("parses the FEN", () => {
      const fen =
        "KKKKKKKK/KKKKKKKK/KKKKKKKK/KKKKKKKK/KKKKKKKK/KKKKKKKK/KKKKKKKK/KKKKKKKK w - - 0 1";

      expect(parseFen(fen)).toEqual([
        new Array(BOARD_SIZE)
          .fill([
            ...new Array(BOARD_SIZE).fill(WHITE_KING_0x88),
            ...new Array(BOARD_WIDTH_0x88 - BOARD_SIZE).fill(EMPTY_PIECE_0x88),
          ])
          .flat() as Board0x88,
        WHITE_0x88,
        0b0000,
        EMPTY_EN_PASSANT_SQUARE_0x88,
        0,
        1,
      ]);
    });
  });

  describe("when the FEN contains leading whitespace", () => {
    it("parses the FEN", () => {
      expect(parseFen(`${WHITESPACE}${STARTING_POSITION}`)).toEqual([
        STARTING_POSITION_BOARD_0x88,
        WHITE_0x88,
        0b1111,
        EMPTY_EN_PASSANT_SQUARE_0x88,
        0,
        1,
      ]);
    });
  });

  describe("when the FEN contains trailing whitespace", () => {
    it("parses the FEN", () => {
      expect(parseFen(`${STARTING_POSITION}${WHITESPACE}`)).toEqual([
        STARTING_POSITION_BOARD_0x88,
        WHITE_0x88,
        0b1111,
        EMPTY_EN_PASSANT_SQUARE_0x88,
        0,
        1,
      ]);
    });
  });

  describe("when the FEN parts are separated by non-space characters", () => {
    it("parses the FEN", () => {
      expect(parseFen(STARTING_POSITION.replace(/\s+/, WHITESPACE))).toEqual([
        STARTING_POSITION_BOARD_0x88,
        WHITE_0x88,
        0b1111,
        EMPTY_EN_PASSANT_SQUARE_0x88,
        0,
        1,
      ]);
    });
  });

  describe("when the FEN's active color is white", () => {
    it("sets the active color of the FEN to white", () => {
      expect(parseFen(STARTING_POSITION)[1]).toEqual(WHITE_0x88);
    });
  });

  describe("when the FEN's active color is black", () => {
    it("sets the active color of the FEN to black", () => {
      const fen = STARTING_POSITION.replace(WHITE, BLACK);
      expect(parseFen(fen)[1]).toEqual(BLACK_0x88);
    });
  });

  describe("when the FEN contains a color that is not 'w' or 'b'", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace("w", "x");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the FEN's castling rights are empty", () => {
    it("sets the castling rights of the FEN to the correct bits", () => {
      const fen = STARTING_POSITION.replace("KQkq", "-");
      expect(parseFen(fen)[2]).toEqual(0b0000);
    });
  });

  describe("when the FEN's castling rights contain all sides", () => {
    it("sets the castling rights of the FEN to the correct bits", () => {
      expect(parseFen(STARTING_POSITION)[2]).toEqual(0b1111);
    });
  });

  describe("when the FEN's castling rights contain some of the sides", () => {
    it("sets the castling rights of the FEN to the correct bits", () => {
      const fen1 = STARTING_POSITION.replace("KQkq", "KQ");
      expect(parseFen(fen1)[2]).toEqual(0b0011);

      const fen2 = STARTING_POSITION.replace("KQkq", "kq");
      expect(parseFen(fen2)[2]).toEqual(0b1100);
    });
  });

  describe("when the FEN's castling rights contain an invalid character", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace("KQkq", "x");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the FEN's en passant square is empty", () => {
    it("sets the en passant square of the FEN to an empty en passant square", () => {
      expect(parseFen(STARTING_POSITION)[3]).toEqual(EMPTY_EN_PASSANT_SQUARE_0x88);
    });
  });

  describe("when the FEN's en passant square is a valid square", () => {
    it("sets the en passant square of the FEN to the correct square", () => {
      const fen = STARTING_POSITION.replace("-", "e3");
      expect(parseFen(fen)[3]).toEqual(SQUARE_TO_SQUARE_0x88["e3"]);
    });
  });

  describe("when the FEN's en passant square is an invalid square", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace("-", "x3");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the FEN's half move clock is 0", () => {
    it("sets the half move clock of the FEN to 0", () => {
      expect(parseFen(STARTING_POSITION)[4]).toEqual(0);
    });
  });

  describe("when the FEN's half move clock is a positive number", () => {
    it("sets the half move clock of the FEN to the correct number", () => {
      const fen = STARTING_POSITION.replace("0", "50");
      expect(parseFen(fen)[4]).toEqual(50);
    });
  });
  describe("when the FEN's half move clock is a negative number", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace("0", "-1");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the FEN's half move clock is a decimal", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace("0", "0.5");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the FEN's half move clock is not a number", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace("0", "x");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the FEN's full move number is 1", () => {
    it("sets the full move number of the FEN to 1", () => {
      expect(parseFen(STARTING_POSITION)[5]).toEqual(1);
    });
  });

  describe("when the FEN's full move number is greater than 1", () => {
    it("sets the full move number of the FEN to the correct number", () => {
      const fen = STARTING_POSITION.replace("1", "50");
      expect(parseFen(fen)[5]).toEqual(50);
    });
  });

  describe("when the FEN's full move number is less than 1", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace("1", "0");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the FEN's full move clock is a decimal", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace("1", "1.5");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });

  describe("when the FEN's full move number is not a number", () => {
    it("raises an InvalidFenError", () => {
      const fen = STARTING_POSITION.replace("1", "x");
      expect(() => parseFen(fen)).toThrow(TypedInvalidFenError);
    });
  });
});
