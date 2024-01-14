import { FILES, PIECES, PLAYERS, RANKS, SQUARES, SQUARE_COLORS } from "./constants";
import { File, Piece, Player, Rank, Square, SquareColor } from "./types";

/**
 * Determines if the provided value is a Player.
 * @param value The value to check.
 * @returns Returns true if the value is a Player and false otherwise.
 */
export function isPlayer(value: unknown): value is Player {
  return PLAYERS.includes(value as Player);
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
 * Determines if the provided value is a File.
 * @param value The value to check.
 * @returns Returns true if the value is a File and false otherwise.
 */
export function isFile(value: unknown): value is File {
  return FILES.includes(value as File);
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
