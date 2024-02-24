import { SIDE_TO_SIDE_0x88 } from "../internal/constants";
import { deriveFromFen } from "../internal/derive-from-fen";
import { Fen0x88, Side } from "../types";

/**
 * Returns true if the provided can castle.
 *
 * @param fen The FEN.
 * @param side The side to check.
 * @returns True if the side can castle.
 */
export const getCastlingRight = deriveFromFen((fen: Fen0x88, side: Side): boolean => {
  return !!(fen[2] & SIDE_TO_SIDE_0x88[side]!);
});
