import { SIDE_TO_SIDE_0x88 } from "../internal/constants";
import { transformFen } from "../internal/transform-fen";
import { Fen0x88, Side } from "../types";

/**
 * Sets the sides that can castle for the FEN.
 *
 * @param fen The FEN.
 * @param sides The sides that can castle.
 * @returns The updated FEN.
 */
export const setCastlingRights = transformFen((fen: Fen0x88, sides: readonly Side[]): Fen0x88 => {
  return [
    fen[0],
    fen[1],
    sides.reduce((accumulator, side) => accumulator | SIDE_TO_SIDE_0x88[side], 0),
    fen[3],
    fen[4],
    fen[5],
  ];
});
