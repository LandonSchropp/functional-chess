import { Square, Vector } from "../types";
import { convertSquareToCoordinates } from "./convert-square-to-coordinates";

/**
 * Returns the vector between one square and another.
 *
 * @param from The square to get the vector from.
 * @param to The square to get the vector to.
 * @returns The vector between the two squares.
 */
export function getVectorBetweenSquares(from: Square, to: Square): Vector {
  const [fromFile, fromRank] = convertSquareToCoordinates(from);
  const [toFile, toRank] = convertSquareToCoordinates(to);

  return [toFile - fromFile, toRank - fromRank];
}
