import { BOARD_SIZE } from "../constants";
import { NO_PIECE_0x88, PIECE_0x88_TO_PIECE } from "../internal/constants";
import { convertIndicesToSquare0x88 } from "../internal/convert-indices-to-square-0x88";
import { deriveFromFen } from "../internal/derive-from-fen";
import { Fen0x88 } from "../internal/types";
import { Board } from "../types";

/**
 * Returns a 2D array of the board.
 *
 * @param fen The FEN to parse.
 * @returns A 2D array of the board. The coordinates of the board use `[0][0]` coordinate as the
 *   `a7` square so the board is visually displayed in-order.
 */
export const toBoard = deriveFromFen((fen: Fen0x88): Board => {
  const board = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null)) as Board;

  for (let rankIndex = 0; rankIndex < BOARD_SIZE; rankIndex++) {
    for (let fileIndex = 0; fileIndex < BOARD_SIZE; fileIndex++) {
      const piece = fen[0][convertIndicesToSquare0x88(BOARD_SIZE - rankIndex - 1, fileIndex)];

      if (piece !== NO_PIECE_0x88) {
        board[BOARD_SIZE - rankIndex - 1][fileIndex] = PIECE_0x88_TO_PIECE[piece]!;
      }
    }
  }

  return board;
});
