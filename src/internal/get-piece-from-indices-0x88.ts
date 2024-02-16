import { getSquareFromIndices0x88 } from "./get-square-from-indices-0x88";
import { Board0x88, Piece0x88, EmptySquare0x88 } from "./types";

/**
 * Returns a piece from a 0x88 board.
 *
 * @private
 * @param board - The 0x88 board.
 * @param rankIndex - The rank index.
 * @param fileIndex - The file index.
 * @returns An 0x88 piece or an 0x88 empty square.
 */
export function getPieceFromIndices0x88(
  board: Board0x88,
  rankIndex: number,
  fileIndex: number,
): Piece0x88 | EmptySquare0x88 {
  return board[getSquareFromIndices0x88(rankIndex, fileIndex)] as Piece0x88 | EmptySquare0x88;
}
