import { WHITE_0x88, BLACK_0x88 } from "./constants";
import { isPieceColor0x88 } from "./is-piece-color-0x88";
import { Piece0x88, NoPiece0x88, Color0x88 } from "./types";

/**
 * Determines if the piece is the opposite color color of the given color.
 *
 * @param piece The piece to check.
 * @param color The color to compare against.
 * @returns True if the piece is the opposite color of the given color. This will also return false
 *   if the given piece is empty.
 */
export function isPieceOppositeColor0x88(
  piece: Piece0x88 | NoPiece0x88,
  color: Color0x88,
): boolean {
  return isPieceColor0x88(piece, color === WHITE_0x88 ? BLACK_0x88 : WHITE_0x88);
}
