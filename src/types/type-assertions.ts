import {
  BLACK_BISHOP,
  BLACK_KING,
  BLACK_KNIGHT,
  BLACK_PAWN,
  BLACK_QUEEN,
  BLACK_ROOK,
  WHITE_BISHOP,
  WHITE_KING,
  WHITE_KNIGHT,
  WHITE_PAWN,
  WHITE_QUEEN,
  WHITE_ROOK,
} from "../constants";
import {
  isBishop,
  isBlackPiece,
  isColor,
  isFile,
  isKing,
  isKnight,
  isMove,
  isPawn,
  isPiece,
  isQueen,
  isRank,
  isRook,
  isSide,
  isSquare,
  isSquareColor,
  isVector,
  isWhitePiece,
} from "./type-guards";

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

/**
 * Asserts that the provided value is a pawn Piece.
 * @param value The value to check.
 * @throws Throws an error if the value is not a pawn Piece.
 */
export const assertPawn = assertType(isPawn, `"${WHITE_PAWN}" or "${BLACK_PAWN}"`);

/**
 * Asserts that the provided value is a knight Piece.
 * @param value The value to check.
 * @throws Throws an error if the value is not a knight Piece.
 */
export const assertKnight = assertType(isKnight, `"${WHITE_KNIGHT}" or "${BLACK_KNIGHT}"`);

/**
 * Asserts that the provided value is a bishop Piece.
 * @param value The value to check.
 * @throws Throws an error if the value is not a bishop Piece.
 */
export const assertBishop = assertType(isBishop, `"${WHITE_BISHOP}" or "${BLACK_BISHOP}"`);

/**
 * Asserts that the provided value is a rook Piece.
 * @param value The value to check.
 * @throws Throws an error if the value is not a rook Piece.
 */
export const assertRook = assertType(isRook, `"${WHITE_ROOK}" or "${BLACK_ROOK}"`);

/**
 * Asserts that the provided value is a queen Piece.
 * @param value The value to check.
 * @throws Throws an error if the value is not a queen Piece.
 */
export const assertQueen = assertType(isQueen, `"${WHITE_QUEEN}" or "${BLACK_QUEEN}"`);

/**
 * Asserts that the provided value is a king Piece.
 * @param value The value to check.
 * @throws Throws an error if the value is not a king Piece.
 */
export const assertKing = assertType(isKing, `"${WHITE_KING}" or "${BLACK_KING}"`);

/**
 * Asserts that the provided value is a white Piece.
 * @param value The value to check.
 * @throws Throws an error if the value is not a white Piece.
 */
export const assertWhitePiece = assertType(
  isWhitePiece,
  `"${WHITE_PAWN}", "${WHITE_KNIGHT}", "${WHITE_BISHOP}", "${WHITE_ROOK}", "${WHITE_QUEEN}", or "${WHITE_KING}"`,
);

/**
 * Asserts that the provided value is a black Piece.
 * @param value The value to check.
 * @throws Throws an error if the value is not a black Piece.
 */
export const assertBlackPiece = assertType(
  isBlackPiece,
  `"${BLACK_PAWN}", "${BLACK_KNIGHT}", "${BLACK_BISHOP}", "${BLACK_ROOK}", "${BLACK_QUEEN}", or "${BLACK_KING}"`,
);

/**
 * Asserts that the provided value is a Side.
 * @param value The value to check.
 * @throws Throws an error if the value is not a Side.
 */
export const assertSide = assertType(isSide, "Side");

/**
 * Asserts that the provided value is a Move.
 * @param value The value to check.
 * @throws Throws an error if the value is not a Move.
 */
export const assertMove = assertType(isMove, "Move");
