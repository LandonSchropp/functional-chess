import { Square, Vector } from "../types";

const A_CHAR_CODE = 97;

/**
 * Converts a square to its coordinates.
 *
 * @param square The square to convert.
 * @returns The coordinates of the square, with the file first and the rank second.
 */
export function convertSquareToCoordinates(square: Square): Vector {
  return [square.charCodeAt(0) - A_CHAR_CODE, Number(square[1]) - 1];
}
