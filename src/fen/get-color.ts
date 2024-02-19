import { COLOR_0x88_TO_COLOR } from "../internal/constants";
import { deriveFromFen } from "../internal/derive-from-fen";
import { Fen0x88 } from "../internal/types";
import { Color } from "../types";

/**
 * Returns the active color for the FEN.
 *
 * @param fen The FEN.
 * @returns The active color for the FEN.
 */
export const getColor = deriveFromFen((fen: Fen0x88): Color => {
  return COLOR_0x88_TO_COLOR[fen[1]]!;
});
