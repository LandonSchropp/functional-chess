import { NO_PIECE_0x88, PIECE_0x88_TO_PIECE, SQUARE_TO_SQUARE_0x88 } from "../internal/constants";
import { deriveFromFen } from "../internal/derive-from-fen";
import { Fen0x88, Piece, Square } from "../types";

/**
 * Returns the piece at the square.
 *
 * @param fen The FEN.
 * @param square The square to get the piece from.
 * @returns The piece on the square, or `null` if there is no piece.
 */
export const getPiece = deriveFromFen((fen: Fen0x88, square: Square): Piece | null => {
  const piece0x88 = fen[0][SQUARE_TO_SQUARE_0x88[square]];
  return piece0x88 === NO_PIECE_0x88 ? null : PIECE_0x88_TO_PIECE[piece0x88]!;
});
