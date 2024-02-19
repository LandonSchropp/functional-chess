import { COLOR_TO_COLOR_0x88 } from "../internal/constants";
import { transformFen } from "../internal/transform-fen";
import { Fen0x88 } from "../internal/types";
import { Color } from "../types";

/**
 * Sets the active color for the FEN.
 *
 * @param fen The FEN.
 * @param color The Active color for the FEN.
 * @returns The updated FEN.
 */
export const setColor = transformFen((fen: Fen0x88, color: Color): Fen0x88 => {
  return [fen[0], COLOR_TO_COLOR_0x88[color], fen[2], fen[3], fen[4], fen[5]];
});
