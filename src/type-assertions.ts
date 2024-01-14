import { isColor, isFile, isPiece, isRank, isSquare, isSquareColor, isVector } from "./type-guards";

/**
 * A helper function or creating type assertions.
 */
function assertType<T>(
  guard: (value: unknown) => value is T,
  typeName: string,
): (value: unknown) => asserts value is T {
  return (value: unknown) => {
    if (guard(value) === false) {
      throw new Error(`Expected '${value}' to have type ${typeName}.`);
    }
  };
}

/**
 * Asserts that the provided value is a Vector.
 * @param value The value to check.
 * @throws Throws an error if the value is not a Vector.
 */
export const assertVector = assertType(isVector, "Vector");

/**
 * Asserts that the provided value is a Rank.
 * @param value The value to check.
 * @throws Throws an error if the value is not a Rank.
 */
export const assertRank = assertType(isRank, "Rank");

/**
 * Asserts that the provided value is a File.
 * @param value The value to check.
 * @throws Throws an error if the value is not a File.
 */
export const assertFile = assertType(isFile, "File");

/**
 * Asserts that the provided value is a SquareColor.
 * @param value The value to check.
 * @throws Throws an error if the value is not a SquareColor.
 */
export const assertSquareColor = assertType(isSquareColor, "SquareColor");

/**
 * Asserts that the provided value is a Square.
 * @param value The value to check.
 * @throws Throws an error if the value is not a Square.
 */
export const assertSquare = assertType(isSquare, "Square");

/**
 * Asserts that the provided value is a Color.
 * @param value The value to check.
 * @throws Throws an error if the value is not a Color.
 */
export const assertColor = assertType(isColor, "Color");

/**
 * Asserts that the provided value is a Piece.
 * @param value The value to check.
 * @throws Throws an error if the value is not a Piece.
 */
export const assertPiece = assertType(isPiece, "Piece");
