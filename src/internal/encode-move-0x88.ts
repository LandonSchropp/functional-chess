import { NO_PIECE_0x88 } from "./constants";
import { Move0x88, NoPiece0x88, Piece0x88, Square0x88 } from "./types";

/**
 * Encodes a move from a set of parameters into a single Move0x88 value.
 *
 * @param from - The from square.
 * @param to - The to square.
 * @param promotedPiece - The piece that the pawn is promoted to. A value of NO_PIECE_0x88 indicates
 *   that the move is not a promotion.
 * @param flags - The flags for the move. These should be the flag constants combined using the
 *   bitwise `|` operator.
 * @returns The encoded move.
 */
export function encodeMove0x88(
  from: Square0x88,
  to: Square0x88,
  promotedPiece: Piece0x88 | NoPiece0x88 = NO_PIECE_0x88,
  flags: number = 0,
): Move0x88 {
  return from | (to << 8) | (promotedPiece << 16) | (flags << 24);
}
