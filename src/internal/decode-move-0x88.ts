import { Move0x88, NoPiece0x88, Piece0x88, Square0x88 } from "./types";

/**
 * Decodes a move.
 *
 * @param move - The move to decode.
 * @returns A tuple containing the parts of the move.
 */
export function decodeMove0x88(
  move: Move0x88,
): [from: Square0x88, to: Square0x88, promotedPiece: Piece0x88 | NoPiece0x88, flags: number] {
  return [
    (move & 0xff) as Square0x88,
    ((move >> 8) & 0xff) as Square0x88,
    ((move >> 16) & 0xff) as Piece0x88 | NoPiece0x88,
    (move >> 24) & 0xff,
  ];
}
