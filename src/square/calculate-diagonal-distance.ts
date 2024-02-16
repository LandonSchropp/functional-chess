import { Square } from "../types";
import { calculateTranslation } from "./calculate-translation";

/**
 * Calculates the distance between two squares on the chessboard with diagonal moves. This is the
 * number of squares a king would have to traverse to get from the first square to the second. In
 * mathematical terms, this is known as the [Chebyshev
 * distance](https://en.wikipedia.org/wiki/Chebyshev_distance).
 *
 * @param square1 The first square.
 * @param square2 The second square.
 * @returns This distance between the two squares with diagonal moves.
 */
export function calculateDiagonalDistance(square1: Square, square2: Square): number {
  const vector = calculateTranslation(square1, square2);
  return Math.max(Math.abs(vector[0]), Math.abs(vector[1]));
}
