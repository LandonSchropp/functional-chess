import { WHITE_KINGSIDE, WHITE_QUEENSIDE, BLACK_KINGSIDE, BLACK_QUEENSIDE } from "../../constants";
import { invertToArray } from "../object";

/** The 0x88 representation of white's kingside. */
export const WHITE_KINGSIDE_0x88 = 0b0001;

/** The 0x88 representation of white's queenside. */
export const WHITE_QUEENSIDE_0x88 = 0b0010;

/** The 0x88 representation of black's kingside. */
export const BLACK_KINGSIDE_0x88 = 0b0100;

/** The 0x88 representation of black's queenside. */
export const BLACK_QUEENSIDE_0x88 = 0b1000;

/** A combination of white's and black's kingsides. */
export const KINGSIDE_0x88 = WHITE_KINGSIDE_0x88 | BLACK_KINGSIDE_0x88;

/** A combination of white's and black's queensides. */
export const QUEENSIDE_0x88 = WHITE_QUEENSIDE_0x88 | BLACK_QUEENSIDE_0x88;

/** An array of the 0x88 colors. */
export const SIDES_0x88 = [
  WHITE_KINGSIDE_0x88,
  WHITE_QUEENSIDE_0x88,
  BLACK_KINGSIDE_0x88,
  BLACK_QUEENSIDE_0x88,
] as const;

/** A readonly object that converts a string side into its 0x88 representation. */
export const SIDE_TO_SIDE_0x88 = {
  [WHITE_KINGSIDE]: WHITE_KINGSIDE_0x88,
  [WHITE_QUEENSIDE]: WHITE_QUEENSIDE_0x88,
  [BLACK_KINGSIDE]: BLACK_KINGSIDE_0x88,
  [BLACK_QUEENSIDE]: BLACK_QUEENSIDE_0x88,
} as const;

/** A readonly map that converts a 0x88 side to its string representation. */
export const SIDE_0x88_TO_SIDE = invertToArray(SIDE_TO_SIDE_0x88);
