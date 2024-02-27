import {
  COLORS_0x88,
  NO_SQUARE_0x88,
  NO_PIECE_0x88,
  PIECES_0x88,
  SIDES_0x88,
  SQUARES_0x88,
} from "./constants";
import { FLAGS_0x88 } from "./constants/moves";

/** A utility type that creates a tuple of a given length and type. */
type Tuple<T, N extends number, R extends T[] = []> = R["length"] extends N
  ? R
  : Tuple<T, N, [T, ...R]>;

/** A 0x88 color. */
export type Color0x88 = (typeof COLORS_0x88)[number];

/** A 0x88 square. */
export type Square0x88 = (typeof SQUARES_0x88)[number];

/** A 0x88 piece. */
export type Piece0x88 = (typeof PIECES_0x88)[number];

/** A 0x88 side. */
export type Side0x88 = (typeof SIDES_0x88)[number];

/** A 0x88 empty piece */
export type NoPiece0x88 = typeof NO_PIECE_0x88;

/** A empty square */
export type NoSquare0x88 = typeof NO_SQUARE_0x88;

/** All of the possible values for an en passant square. */
export type EnPassantSquare = Square0x88 | NoSquare0x88;

/** A 0x88 board. This is used to keep track of piece placement within a chessboard. */
export type Board0x88 = Tuple<Piece0x88 | NoPiece0x88, 128>;

/**
 * A 0x88 Move. This is a 32-bit number that represents all of the properties in a move. It's
 * encoded as follows:
 *
 *     XXXX LEDC PPPP PPPP TTTT TTTT FFFF FFFF
 *
 * - `F`: The from square
 * - `T`: The to square
 * - `P`: The promoted piece
 * - `C`: Capture flag
 * - `D`: Double pawn flag
 * - `E`: En passant flag
 * - `L`: Castle flag
 * - `X`: Unused
 */
export type Move0x88 = number;

/** A flag that can be set on a move. */
export type Flag0x88 = (typeof FLAGS_0x88)[number];
