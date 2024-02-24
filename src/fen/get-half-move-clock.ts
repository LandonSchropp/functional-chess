import { deriveFromFen } from "../internal/derive-from-fen";
import { Fen0x88 } from "../types";

/**
 * Returns the half move clock for the FEN.
 *
 * @param fen The FEN.
 * @returns The half move clock for the FEN.
 */
export const getHalfMoveClock = deriveFromFen((fen: Fen0x88): number => {
  return fen[4];
});
