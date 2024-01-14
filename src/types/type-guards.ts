import {
  BLACK_BISHOP,
  BLACK_KING,
  BLACK_KNIGHT,
  BLACK_PAWN,
  BLACK_PIECES,
  BLACK_QUEEN,
  BLACK_ROOK,
  COLORS,
  FILES,
  PIECES,
  RANKS,
  SQUARES,
  SQUARE_COLORS,
  WHITE_BISHOP,
  WHITE_KING,
  WHITE_KNIGHT,
  WHITE_PAWN,
  WHITE_PIECES,
  WHITE_QUEEN,
  WHITE_ROOK,
} from "../constants";
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

/**
 * Determines if the provided value is pawn Piece.
 * @param value The value to check.
 * @returns Returns true if the value is a pawn Piece.
 */
export function isPawn(value: unknown): value is typeof WHITE_PAWN | typeof BLACK_PAWN {
  return value === WHITE_PAWN || value === BLACK_PAWN;
}

/**
 * Determines if the provided value is knight Piece.
 * @param value The value to check.
 * @returns Returns true if the value is a knight Piece.
 */
export function isKnight(value: unknown): value is typeof WHITE_KNIGHT | typeof BLACK_KNIGHT {
  return value === WHITE_KNIGHT || value === BLACK_KNIGHT;
}

/**
 * Determines if the provided value is bishop Piece.
 * @param value The value to check.
 * @returns Returns true if the value is a bishop Piece.
 */
export function isBishop(value: unknown): value is typeof WHITE_BISHOP | typeof BLACK_BISHOP {
  return value === WHITE_BISHOP || value === BLACK_BISHOP;
}

/**
 * Determines if the provided value is rook Piece.
 * @param value The value to check.
 * @returns Returns true if the value is a rook Piece.
 */
export function isRook(value: unknown): value is typeof WHITE_ROOK | typeof BLACK_ROOK {
  return value === WHITE_ROOK || value === BLACK_ROOK;
}

/**
 * Determines if the provided value is queen Piece.
 * @param value The value to check.
 * @returns Returns true if the value is a queen Piece.
 */
export function isQueen(value: unknown): value is typeof WHITE_QUEEN | typeof BLACK_QUEEN {
  return value === WHITE_QUEEN || value === BLACK_QUEEN;
}

/**
 * Determines if the provided value is king Piece.
 * @param value The value to check.
 * @returns Returns true if the value is a king Piece.
 */
export function isKing(value: unknown): value is typeof WHITE_KING | typeof BLACK_KING {
  return value === WHITE_KING || value === BLACK_KING;
}

/**
 * Determines if the provided value is a white Piece.
 * @param value The value to check.
 * @returns Returns true if the value is a white Piece.
 */
export function isWhitePiece(value: unknown): value is (typeof WHITE_PIECES)[number] {
  return WHITE_PIECES.includes(value as (typeof WHITE_PIECES)[number]);
}

/**
 * Determines if the provided value is a black Piece.
 * @param value The value to check.
 * @returns Returns true if the value is a black Piece.
 */
export function isBlackPiece(value: unknown): value is (typeof BLACK_PIECES)[number] {
  return BLACK_PIECES.includes(value as (typeof BLACK_PIECES)[number]);
}
