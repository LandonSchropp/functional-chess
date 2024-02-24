import { transformFen } from "../internal/transform-fen";
import { Fen0x88 } from "../types";

/**
 * Sets the half move clock for the FEN.
 *
 * @param fen The FEN.
 * @param fullMoveNumber The full move mumber for the FEN.
 * @returns The updated FEN.
 */
export const setFullMoveNumber = transformFen((fen: Fen0x88, fullMoveNumber: number): Fen0x88 => {
  return [fen[0], fen[1], fen[2], fen[3], fen[4], fullMoveNumber];
});
