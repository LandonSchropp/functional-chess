import { CAPTURE_FLAG, CASTLE_FLAG, DOUBLE_PAWN_FLAG, EN_PASSANT_FLAG } from "./constants/moves";
import { Move0x88, NoPiece0x88, Piece0x88, Square0x88 } from "./types";

/**
 * Encodes a move from a set of parameters into a single Move0x88 value.
 *
 * @param from - The from square.
 * @param to - The to square.
 * @param promotedPiece - The piece that the pawn is promoted to. A value of NO_PIECE_0x88 indicates
 *   that the move is not a promotion.
 * @param capture - True if the move is a capture.
 * @param doublePawn - True if the move is a double pawn move.
 * @param enPassant - True if the move is an en passant capture.
 * @param castle - True if the move is a castle.
 * @returns The encoded move.
 */
export function encodeMove0x88(
  from: Square0x88,
  to: Square0x88,
  promotedPiece: Piece0x88 | NoPiece0x88,
  capture: boolean,
  doublePawn: boolean,
  enPassant: boolean,
  castle: boolean,
): Move0x88 {
  console.log(from.toString(2), to.toString(2), promotedPiece.toString(2));

  return (
    from |
    (to << 8) |
    (promotedPiece << 16) |
    (capture ? CAPTURE_FLAG : 0) |
    (doublePawn ? DOUBLE_PAWN_FLAG : 0) |
    (enPassant ? EN_PASSANT_FLAG : 0) |
    (castle ? CASTLE_FLAG : 0)
  );
}
