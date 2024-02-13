import { BOARD_SIZE } from "../constants";
import {
  BOARD_WIDTH_0x88,
  PIECE_0x88_TO_PIECE_ASCII,
  PIECE_0x88_TO_PIECE_UNICODE,
} from "../internal/constants";
import { Board0x88, EmptySquare0x88, Piece0x88 } from "../internal/types";

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
