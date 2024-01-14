import { COLORS, FILES, PIECES, RANKS, SQUARES, SQUARE_COLORS } from "../constants";
import { Color, File, Piece, Rank, Square, SquareColor, Vector } from "./types";

/**
 * Determines if the provided value is a Vector.
 * @param value The value to check.
 * @returns Returns true if the value is a Vector and false otherwise.
 */
export function isVector(value: unknown): value is Vector {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === "number" &&
    typeof value[1] === "number"
  );
}

/**
 * Determines if the provided value is a Color.
 * @param value The value to check.
 * @returns Returns true if the value is a Color and false otherwise.
 */
export function isColor(value: unknown): value is Color {
  return COLORS.includes(value as Color);
}

/**
 * Determines if the provided value is a File.
 * @param value The value to check.
 * @returns Returns true if the value is a File and false otherwise.
 */
export function isFile(value: unknown): value is File {
  return FILES.includes(value as File);
}

/**
 * Determines if the provided value is a Rank.
 * @param value The value to check.
 * @returns Returns true if the value is a Rank and false otherwise.
 */
export function isRank(value: unknown): value is Rank {
  return RANKS.includes(value as Rank);
}

/**
 * Determines if the provided value is a SquareColor.
 * @param value The value to check.
 * @returns Returns true if the value is a SquareColor and false otherwise.
 */
export function isSquareColor(value: unknown): value is SquareColor {
  return SQUARE_COLORS.includes(value as SquareColor);
}

/**
 * Determines if the provided value is a Square.
 * @param value The value to check.
 * @returns Returns true if the value is a Square and false otherwise.
 */
export function isSquare(value: unknown): value is Square {
  return SQUARES.includes(value as Square);
}

/**
 * Determines if the provided value is a Piece.
 * @param value The value to check.
 * @returns Returns true if the value is a Piece and false otherwise.
 */
export function isPiece(value: unknown): value is Piece {
  return PIECES.includes(value as Piece);
}
