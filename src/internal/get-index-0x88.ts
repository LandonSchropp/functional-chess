import { BOARD_WIDTH_0x88 } from "./constants";

/**
 * Returns the index of a square for an 0x88 board. Since this is an internal function, it does not
 * check the bounds of the rank and file indices.
 *
 * @private
 * @param rankIndex - The rank index.
 * @param fileIndex - The file index.
 * @returns The index of the square.
 */
export function getIndex0x88(rankIndex: number, fileIndex: number): number {
  return rankIndex * BOARD_WIDTH_0x88 + fileIndex;
}
