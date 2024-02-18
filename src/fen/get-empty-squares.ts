import { OUT_OF_BOUNDS_0x88, SQUARE_0x88_TO_SQUARE } from "../internal/constants";
import { deriveFromFen } from "../internal/derive-from-fen";
import { Fen0x88, Square0x88 } from "../internal/types";
import { Square } from "../types";

/**
 * Returns the empty squares in the FEN.
 *
 * @param fen The FEN to parse.
 * @returns The empty squares in the FEN.
 */
export const getEmptySquares = deriveFromFen((fen: Fen0x88): Square[] => {
  const emptySquares: Square[] = [];

  for (let square = 0; square < fen[0].length; square++) {
    if (square & OUT_OF_BOUNDS_0x88) {
      continue;
    }

    if (!fen[0][square]) {
      emptySquares.push(SQUARE_0x88_TO_SQUARE.get(square as Square0x88)!);
    }
  }

  return emptySquares;
});
