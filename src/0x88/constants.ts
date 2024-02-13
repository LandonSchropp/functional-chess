import {
  WHITE_PAWN,
  WHITE_KNIGHT,
  WHITE_BISHOP,
  WHITE_ROOK,
  WHITE_QUEEN,
  WHITE_KING,
  BLACK_PAWN,
  BLACK_KNIGHT,
  BLACK_BISHOP,
  BLACK_ROOK,
  BLACK_QUEEN,
  BLACK_KING,
} from "../constants";
import { invert } from "../internal/readonly-map";

/**
 * A readonly object that converts a string square into its 0x88 representation.
 */
// prettier-ignore
export const SQUARE_TO_SQUARE_0x88 = {
  a8: 0x70, b8: 0x71, c8: 0x72, d8: 0x73, e8: 0x74, f8: 0x75, g8: 0x76, h8: 0x77,
  a7: 0x60, b7: 0x61, c7: 0x62, d7: 0x63, e7: 0x64, f7: 0x65, g7: 0x66, h7: 0x67,
  a6: 0x50, b6: 0x51, c6: 0x52, d6: 0x53, e6: 0x54, f6: 0x55, g6: 0x56, h6: 0x57,
  a5: 0x40, b5: 0x41, c5: 0x42, d5: 0x43, e5: 0x44, f5: 0x45, g5: 0x46, h5: 0x47,
  a4: 0x30, b4: 0x31, c4: 0x32, d4: 0x33, e4: 0x34, f4: 0x35, g4: 0x36, h4: 0x37,
  a3: 0x20, b3: 0x21, c3: 0x22, d3: 0x23, e3: 0x24, f3: 0x25, g3: 0x26, h3: 0x27,
  a2: 0x10, b2: 0x11, c2: 0x12, d2: 0x13, e2: 0x14, f2: 0x15, g2: 0x16, h2: 0x17,
  a1: 0x00, b1: 0x01, c1: 0x02, d1: 0x03, e1: 0x04, f1: 0x05, g1: 0x06, h1: 0x07,
} as const;

/**
 * A readonly map that converts a 0x88 square to its string representation.
 */
export const SQUARE_0x88_TO_SQUARE = invert(SQUARE_TO_SQUARE_0x88);

/**
 * An array of all of the possible 0x88 squares.
 */
export const SQUARES_0x88 = Object.values(SQUARE_TO_SQUARE_0x88);

export const WHITE_PAWN_0x88 = 1;
export const WHITE_KNIGHT_0x88 = 2;
export const WHITE_BISHOP_0x88 = 3;
export const WHITE_ROOK_0x88 = 4;
export const WHITE_QUEEN_0x88 = 5;
export const WHITE_KING_0x88 = 6;
export const BLACK_PAWN_0x88 = 7;
export const BLACK_KNIGHT_0x88 = 8;
export const BLACK_BISHOP_0x88 = 9;
export const BLACK_ROOK_0x88 = 10;
export const BLACK_QUEEN_0x88 = 11;
export const BLACK_KING_0x88 = 12;

/**
 * A readonly object that converts a string piece into its 0x88 representation.
 */
export const PIECE_TO_PIECE_0x88 = {
  [WHITE_PAWN]: WHITE_PAWN_0x88,
  [WHITE_KNIGHT]: WHITE_KNIGHT_0x88,
  [WHITE_BISHOP]: WHITE_BISHOP_0x88,
  [WHITE_ROOK]: WHITE_ROOK_0x88,
  [WHITE_QUEEN]: WHITE_QUEEN_0x88,
  [WHITE_KING]: WHITE_KING_0x88,
  [BLACK_PAWN]: BLACK_PAWN_0x88,
  [BLACK_KNIGHT]: BLACK_KNIGHT_0x88,
  [BLACK_BISHOP]: BLACK_BISHOP_0x88,
  [BLACK_ROOK]: BLACK_ROOK_0x88,
  [BLACK_QUEEN]: BLACK_QUEEN_0x88,
  [BLACK_KING]: BLACK_KING_0x88,
} as const;

/**
 * A readonly map that converts a 0x88 piece to its string representation.
 */
export const PIECES_0x88_TO_PIECES = invert(PIECE_TO_PIECE_0x88);

/**
 * An array of all of the possible 0x88 pieces.
 */
export const PIECES_0x88 = Object.values(PIECE_TO_PIECE_0x88);
