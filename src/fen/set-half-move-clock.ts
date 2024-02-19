import { transformFen } from "../internal/transform-fen";
import { Fen0x88 } from "../internal/types";

/**
 * Sets the half move clock for the FEN.
 *
 * @param fen The FEN.
 * @param halfMoveClock The half move clock for the FEN.
 * @returns The updated FEN.
 */
export const setHalfMoveClock = transformFen((fen: Fen0x88, halfMoveClock: number): Fen0x88 => {
  return [fen[0], fen[1], fen[2], fen[3], halfMoveClock, fen[5]];
});
