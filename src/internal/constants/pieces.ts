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
} from "../../constants";
import { invertToArray } from "../object";
import { WHITE_0x88, BLACK_0x88 } from "./colors";

export const PAWN_0x88 = 0b0001;
export const KNIGHT_0x88 = 0b0010;
export const BISHOP_0x88 = 0b0011;
export const ROOK_0x88 = 0b0100;
export const QUEEN_0x88 = 0b0101;
export const KING_0x88 = 0b0110;

export const WHITE_PAWN_0x88 = WHITE_0x88 | PAWN_0x88;
export const WHITE_KNIGHT_0x88 = WHITE_0x88 | KNIGHT_0x88;
export const WHITE_BISHOP_0x88 = WHITE_0x88 | BISHOP_0x88;
export const WHITE_ROOK_0x88 = WHITE_0x88 | ROOK_0x88;
export const WHITE_QUEEN_0x88 = WHITE_0x88 | QUEEN_0x88;
export const WHITE_KING_0x88 = WHITE_0x88 | KING_0x88;
export const BLACK_PAWN_0x88 = BLACK_0x88 | PAWN_0x88;
export const BLACK_KNIGHT_0x88 = BLACK_0x88 | KNIGHT_0x88;
export const BLACK_BISHOP_0x88 = BLACK_0x88 | BISHOP_0x88;
export const BLACK_ROOK_0x88 = BLACK_0x88 | ROOK_0x88;
export const BLACK_QUEEN_0x88 = BLACK_0x88 | QUEEN_0x88;
export const BLACK_KING_0x88 = BLACK_0x88 | KING_0x88;

/** Represents the lack of a piece. */
export const NO_PIECE_0x88 = 0;

/** A readonly object that converts a string piece into its 0x88 representation. */
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

/** A readonly map that converts a 0x88 piece to its string representation. */
export const PIECE_0x88_TO_PIECE = invertToArray(PIECE_TO_PIECE_0x88);

/** An array of all of the possible 0x88 pieces. */
export const PIECES_0x88 = Object.values(PIECE_TO_PIECE_0x88);
