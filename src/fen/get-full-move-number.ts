import { deriveFromFen } from "../internal/derive-from-fen";
import { Fen0x88 } from "../internal/types";

/**
 * Returns the full move number for the FEN.
 *
 * @param fen The FEN.
 * @returns The full move number for the FEN.
 */
export const getFullMoveNumber = deriveFromFen((fen: Fen0x88): number => {
  return fen[5];
});
