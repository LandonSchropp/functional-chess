import { SIDES_0x88, SIDE_0x88_TO_SIDE } from "../internal/constants";
import { deriveFromFen } from "../internal/derive-from-fen";
import { Fen0x88 } from "../internal/types";
import { Side } from "../types";

/**
 * Returns the sides that can castle for the FEN.
 *
 * @param fen The FEN.
 * @returns The sides that can castle.
 */
export const getCastlingRights = deriveFromFen((fen: Fen0x88): Side[] => {
  return SIDES_0x88.filter((side) => fen[2] & side).map((side) => SIDE_0x88_TO_SIDE[side]!);
});
