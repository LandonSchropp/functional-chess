import {
  EMPTY_PIECE_0x88,
  WHITE_0x88,
  WHITE_KING_0x88,
  BLACK_0x88,
  BLACK_PAWN_0x88,
} from "./constants";
import { Piece0x88, EmptyPiece0x88, Color0x88 } from "./types";

/**
 * Determines if the piece is the same color as the given color.
 *
 * @param piece The piece to check.
 * @param color The color to compare against.
 * @returns True if the piece is the same color as the given color. This will also return false if
 *   the given piece is empty.
 */
export function isPieceColor0x88(piece: Piece0x88 | EmptyPiece0x88, color: Color0x88): boolean {
  return (
    piece !== EMPTY_PIECE_0x88 &&
    ((color === WHITE_0x88 && piece <= WHITE_KING_0x88) ||
      (color === BLACK_0x88 && piece >= BLACK_PAWN_0x88))
  );
}
