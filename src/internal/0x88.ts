import { BOARD_SIZE } from "../constants";
import { InvalidFenError } from "../errors";
import {
  BOARD_WIDTH_0x88,
  EMPTY_SQUARE_0x88,
  PIECE_0x88_TO_PIECE_ASCII,
  PIECE_0x88_TO_PIECE_UNICODE,
  PIECE_TO_PIECE_0x88,
} from "../internal/constants";
import { Board0x88, EmptySquare0x88, Piece0x88 } from "../internal/types";
import { isPiece } from "../types";

/**
 * A regular expression to match a FEN string. This is not meant to be comprehensive.
 */
const FEN_REGEX = new RegExp(
  [
    "^",
    "([1-8pnbrqkPNBRQK/]+)",
    "\\s+",
    "([wb])",
    "\\s+",
    "([kqKQ]+|-)",
    "\\s+",
    "([a-h][1-8]|-)",
    "\\s+",
    "(\\d+)",
    "\\s+",
    "(\\d+)",
    "$",
  ].join(""),
);

const UNOCCUPIED_SQUARES = Array.from(
  { length: BOARD_WIDTH_0x88 - BOARD_SIZE },
  () => EMPTY_SQUARE_0x88,
) as EmptySquare0x88[];

/**
 * Returns the index of a square for an 0x88 board.
 * @param rankIndex - The rank index.
 * @param fileIndex - The file index.
 * @returns The index of the square.
 * @private
 */
export function getIndex0x88(rankIndex: number, fileIndex: number): number {
  return rankIndex * BOARD_WIDTH_0x88 + fileIndex;
}

/**
 * Returns a piece from a 0x88 board.
 * @param board - The 0x88 board.
 * @param rankIndex - The rank index.
 * @param fileIndex - The file index.
 * @returns An 0x88 piece or an 0x88 empty square.
 * @private
 */
export function getPiece0x88(
  board: Board0x88,
  rankIndex: number,
  fileIndex: number,
): Piece0x88 | EmptySquare0x88 {
  return board[getIndex0x88(rankIndex, fileIndex)] as Piece0x88 | EmptySquare0x88;
}

/**
 * Converts a 0x88 board to its ASCII string representation.
 * @param board - The 0x88 board.
 * @returns The ASCII string representation of the 0x88 board.
 * @private
 */
export function toAscii(board: Board0x88): string {
  return Array.from({ length: BOARD_SIZE }, (_, rankIndex) => {
    return Array.from({ length: BOARD_SIZE }, (_, fileIndex) => {
      return PIECE_0x88_TO_PIECE_ASCII.get(
        getPiece0x88(board, BOARD_SIZE - rankIndex - 1, fileIndex),
      );
    }).join("");
  }).join("\n");
}

/**
 * Converts a 0x88 board to its unicode string representation.
 * @param board - The 0x88 board.
 * @returns The unicode string representation of the 0x88 board.
 * @private
 */
export function toUnicode(board: Board0x88): string {
  return Array.from({ length: BOARD_SIZE }, (_, rankIndex) => {
    return Array.from({ length: BOARD_SIZE }, (_, fileIndex) => {
      return PIECE_0x88_TO_PIECE_UNICODE.get(
        getPiece0x88(board, BOARD_SIZE - rankIndex - 1, fileIndex),
      );
    }).join("");
  }).join("\n");
}

function parseRank(fen: string, rank: string): (Piece0x88 | EmptySquare0x88)[] {
  const pieces: (Piece0x88 | EmptySquare0x88)[] = rank.split("").flatMap((char) => {
    if (isPiece(char)) {
      return PIECE_TO_PIECE_0x88[char];
    }

    if (/[1-8]/.test(char)) {
      return Array.from({ length: Number(char) }, () => EMPTY_SQUARE_0x88);
    }

    throw new InvalidFenError(
      `The position in the FEN '${fen}' contains the invalid character '${char}'.`,
    );
  });

  if (pieces.length !== BOARD_SIZE) {
    throw new InvalidFenError(
      `The pieces and empty squares in one of the ranks in the FEN '${fen}' doesn't add up ` +
        `to ${BOARD_SIZE}.`,
    );
  }

  return [...pieces, ...UNOCCUPIED_SQUARES];
}

/**
 * Parses a FEN string into a 0x88 board.
 * @param fen - The FEN string.
 * @returns The 0x88 board.
 */
// TODO: This should represent the complete FEN state, not just the position.
export function parseFen(fen: string): Board0x88 {
  if (!FEN_REGEX.test(fen)) {
    throw new InvalidFenError(`The FEN string '${fen}' could not be parsed.`);
  }

  const position = fen.split(/\s+/)[0];

  const board = new Uint8Array(
    position
      .split("/")
      .map((rank) => parseRank(fen, rank))
      .toReversed()
      .flat(),
  );

  if (board.length !== BOARD_WIDTH_0x88 * BOARD_SIZE) {
    throw new InvalidFenError(`The FEN '${fen}' does not have ${BOARD_SIZE} ranks.`);
  }

  return board;
}
