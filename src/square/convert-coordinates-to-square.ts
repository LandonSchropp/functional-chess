import { Square, Vector } from "../types";
import { isVectorInBounds } from "../utilities/vector";

const A_CHAR_CODE = 97;

/**
 * Converts the coordinates to a square.
 * @param square The coordinates to convert, with the file first and the rank second.
 * @returns The square represented by the coordinates.
 * @throws Throws an error if the coordinates are invalid.
 */
export function convertCoordinatesToSquare([file, rank]: Vector): Square {
  if (!isVectorInBounds([file, rank])) {
    throw new Error(`Invalid coordinates: [${file}, ${rank}]`);
  }

  return `${String.fromCharCode(A_CHAR_CODE + file)}${rank + 1}` as Square;
}
