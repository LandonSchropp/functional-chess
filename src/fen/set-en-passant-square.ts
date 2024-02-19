import { EMPTY_EN_PASSANT_SQUARE_0x88, SQUARE_TO_SQUARE_0x88 } from "../internal/constants";
import { transformFen } from "../internal/transform-fen";
import { Fen0x88 } from "../internal/types";
import { Square } from "../types";

/**
 * Sets the en passant square for the FEN.
 *
 * @param fen The FEN.
 * @param square The en passant square for the FEN, or null if the square should be set to none.
 * @returns The updated FEN.
 */
export const setEnPassantSquare = transformFen((fen: Fen0x88, square: Square | null): Fen0x88 => {
  return [
    fen[0],
    fen[1],
    fen[2],
    square === null ? EMPTY_EN_PASSANT_SQUARE_0x88 : SQUARE_TO_SQUARE_0x88[square],
    fen[4],
    fen[5],
  ];
});
