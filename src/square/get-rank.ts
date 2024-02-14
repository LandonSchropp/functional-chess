import { Rank, Square } from "../types";

/**
 * Returns the rank of the square.
 *
 * @returns The rank of the square.
 */
export function getRank(square: Square): Rank {
  return square[1] as Rank;
}
