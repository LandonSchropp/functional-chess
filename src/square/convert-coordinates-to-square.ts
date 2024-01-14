import { BOARD_SIZE } from "../constants";
import { Square, Vector } from "../types";

const A_CHAR_CODE = 97;

/**
 * Converts the coordinates to a square.
 * @param square The coordinates to convert, with the file first and the rank second.
 * @returns The square represented by the coordinates.
 * @throws Throws an error if the coordinates are invalid.
 */
export function convertCoordinatesToSquare([file, rank]: Vector): Square {
  if (file < 0 || file >= BOARD_SIZE || rank < 0 || rank >= BOARD_SIZE) {
    throw new Error(`Invalid coordinates: [${file}, ${rank}]`);
  }

  return `${String.fromCharCode(A_CHAR_CODE + file)}${rank + 1}` as Square;
}
