import { Square, Vector } from "../types";
import { convertSquareToCoordinates } from "./convert-square-to-coordinates";

/**
 * Returns the translation vector from one square to another.
 *
 * @param from The square to get the translation from.
 * @param to The square to get the translation to.
 * @returns The translation between the two squares.
 */
export function calculateTranslation(from: Square, to: Square): Vector {
  const [fromFile, fromRank] = convertSquareToCoordinates(from);
  const [toFile, toRank] = convertSquareToCoordinates(to);

  return [toFile - fromFile, toRank - fromRank];
}
