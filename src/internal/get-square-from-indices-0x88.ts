import { BOARD_WIDTH_0x88 } from "./constants";
import { Square0x88 } from "./types";

/**
 * Returns the index of a square for an 0x88 board. This function intentionally does not check if
 * the indices are in bounds because it's an internal function.
 *
 * @private
 * @param rankIndex - The rank index.
 * @param fileIndex - The file index.
 * @returns The index of the square.
 */
export function getSquareFromIndices0x88(rankIndex: number, fileIndex: number): Square0x88 {
  return (rankIndex * BOARD_WIDTH_0x88 + fileIndex) as Square0x88;
}
