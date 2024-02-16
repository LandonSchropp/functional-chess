import { BOARD_WIDTH_0x88, OUT_OF_BOUNDS_0x88 } from "./constants";
import { Square0x88 } from "./types";

/**
 * Returns the index of a square for an 0x88 board.
 *
 * @private
 * @param rankIndex - The rank index.
 * @param fileIndex - The file index.
 * @returns The index of the square.
 */
export function getSquareFromIndices0x88(rankIndex: number, fileIndex: number): Square0x88 {
  const square = rankIndex * BOARD_WIDTH_0x88 + fileIndex;

  if (square & OUT_OF_BOUNDS_0x88) {
    throw new Error(`The indices '${rankIndex}' and '${fileIndex}' are out of bounds.`);
  }

  return square as Square0x88;
}
