import { COLORS_0x88, EMPTY_SQUARE_0x88, PIECES_0x88, SIDES_0x88, SQUARES_0x88 } from "./constants";

/** A 0x88 color. */
export type Color0x88 = (typeof COLORS_0x88)[number];

/** A 0x88 square. */
export type Square0x88 = (typeof SQUARES_0x88)[number];

/** A 0x88 piece. */
export type Piece0x88 = (typeof PIECES_0x88)[number];

/** A 0x88 side. */
export type Side0x88 = (typeof SIDES_0x88)[number];

/** A 0x88 empty square */
export type EmptySquare0x88 = typeof EMPTY_SQUARE_0x88;

/**
 * A 0x88 game board.
 *
 * @private
 */
export type Board0x88 = Uint8Array;

/** A parsed FEN */
export type Fen0x88 = [
  position: Board0x88,
  color: Color0x88,
  castling: number,
  enPassant: Square0x88 | EmptySquare0x88,
  halfMove: number,
  fullMove: number,
];
