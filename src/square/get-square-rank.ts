import { Rank, Square } from "../types";

/**
 * Returns the rank of the square.
 * @returns The rank of the square.
 */
export function getSquareRank(square: Square): Rank {
  return square[1] as Rank;
}
