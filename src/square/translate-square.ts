import { OutOfBoundsError } from "../errors";
import { isVectorInBounds } from "../internal/vector";
import { Square, Vector } from "../types";
import { convertCoordinatesToSquare } from "./convert-coordinates-to-square";
import { convertSquareToCoordinates } from "./convert-square-to-coordinates";

/**
 * Translates the square by the provided vector.
 *
 * @example TranslateSquare("e5", [1, 2]); // "f7"
 *
 * @param square The square to translate.
 * @param translation A vector indicating how to translate the file and rank of the square.
 * @returns The new square after applying the translation.
 * @throws Throws an error if the newly translated square is out of bounds.
 */
export function translateSquare(square: Square, translation: Vector) {
  const [file, rank] = convertSquareToCoordinates(square);
  const translatedCoordinates: Vector = [file + translation[0], rank + translation[1]];

  if (!isVectorInBounds(translatedCoordinates)) {
    throw new OutOfBoundsError(
      `When the square ${square} is translated by the vector ${translation}, the resulting ` +
        `coordinates are out of bounds: [${translatedCoordinates[0]}, ${translatedCoordinates[1]}]`,
    );
  }

  return convertCoordinatesToSquare(translatedCoordinates);
}
