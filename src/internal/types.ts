import {
  COLORS_0x88,
  EMPTY_EN_PASSANT_SQUARE_0x88,
  EMPTY_SQUARE_0x88,
  PIECES_0x88,
  SIDES_0x88,
  SQUARES_0x88,
} from "./constants";

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
export type EmptySquare0x88 = typeof EMPTY_SQUARE_0x88;

/** A 0x88 empty en passant square */
export type EmptyEnPassantSquare0x88 = typeof EMPTY_EN_PASSANT_SQUARE_0x88;

/** All of the possible values for an en passant square. */
export type EnPassantSquare = Square0x88 | EmptyEnPassantSquare0x88;

/**
 * A 0x88 game board.
 *
 * @private
 */
export type Board0x88 = Tuple<Piece0x88 | EmptySquare0x88, 128>;

/** A parsed FEN represented with integers. */
export type Fen0x88 = [
  position: Board0x88,
  color: Color0x88,
  castling: number,
  enPassant: EnPassantSquare,
  halfMove: number,
  fullMove: number,
];
