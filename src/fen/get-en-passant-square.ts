import { SQUARE_0x88_TO_SQUARE } from "../internal/constants";
import { deriveFromFen } from "../internal/derive-from-fen";
import { Fen0x88, Square } from "../types";

/**
 * Returns the en passant square for the FEN.
 *
 * @param fen The FEN.
 * @returns The en passant square for the FEN, or null if there is no en passant square.
 */
export const getEnPassantSquare = deriveFromFen((fen: Fen0x88): Square | null => {
  return SQUARE_0x88_TO_SQUARE[fen[3]] ?? null;
});
