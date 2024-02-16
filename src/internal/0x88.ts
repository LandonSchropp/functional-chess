import { BOARD_SIZE } from "../constants";
import { PIECE_0x88_TO_PIECE_ASCII, PIECE_0x88_TO_PIECE_UNICODE } from "../internal/constants";
import { Board0x88 } from "../internal/types";
import { getPieceFromIndices0x88 } from "./get-piece-from-indices-0x88";

/**
 * Converts a 0x88 board to its ASCII string representation.
 *
 * @private
 * @param board - The 0x88 board.
 * @returns The ASCII string representation of the 0x88 board.
 */
export function toAscii(board: Board0x88): string {
  return Array.from({ length: BOARD_SIZE }, (_, rankIndex) => {
    return Array.from({ length: BOARD_SIZE }, (_, fileIndex) => {
      return PIECE_0x88_TO_PIECE_ASCII.get(
        getPieceFromIndices0x88(board, BOARD_SIZE - rankIndex - 1, fileIndex),
      );
    }).join("");
  }).join("\n");
}

/**
 * Converts a 0x88 board to its unicode string representation.
 *
 * @private
 * @param board - The 0x88 board.
 * @returns The unicode string representation of the 0x88 board.
 */
export function toUnicode(board: Board0x88): string {
  return Array.from({ length: BOARD_SIZE }, (_, rankIndex) => {
    return Array.from({ length: BOARD_SIZE }, (_, fileIndex) => {
      return PIECE_0x88_TO_PIECE_UNICODE.get(
        getPieceFromIndices0x88(board, BOARD_SIZE - rankIndex - 1, fileIndex),
      );
    }).join("");
  }).join("\n");
}
