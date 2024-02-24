import { setPiece } from "../fen/set-piece";
import { transformFen } from "../internal/transform-fen";
import { Fen0x88, Square } from "../types";

/**
 * Removes a piece from the board.
 *
 * @param fen The fen to remove the piece from.
 * @param square The square to remove the piece from.
 * @returns The new fen.
 */
export const removePiece = transformFen((fen: Fen0x88, square: Square): Fen0x88 => {
  return setPiece(fen, square, null);
});
