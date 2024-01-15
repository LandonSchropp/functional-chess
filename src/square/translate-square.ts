import { Square, Vector } from "../types";
import { isVectorInBounds } from "../utilities/vector";
import { convertCoordinatesToSquare } from "./convert-coordinates-to-square";
import { convertSquareToCoordinates } from "./convert-square-to-coordinates";

/**
 * Translates the square by the provided vector.
 * @param square The square to translate.
 * @param vector A vector indicating how to translate the file and rank of the square.
 * @returns The new square after applying the translation.
 * @throws Throws an error if the newly translated square is out of bounds.
 * @example
 * translateSquare("e5", [1, 2]); // "f7"
 */
export function translateSquare(square: Square, vector: Vector) {
  const [file, rank] = convertSquareToCoordinates(square);
  const translatedCoordinates: Vector = [file + vector[0], rank + vector[1]];

  if (!isVectorInBounds(translatedCoordinates)) {
    throw new Error(
      `When the square ${square} is translated by the vector ${vector}, the resulting ` +
        `coordinates are out of bounds: [${translatedCoordinates[0]}, ${translatedCoordinates[1]}]`,
    );
  }

  return convertCoordinatesToSquare(translatedCoordinates);
}
