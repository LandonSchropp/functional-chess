import { WHITE, BLACK } from "../../constants";
import { invertToArray } from "../object";

/** The 0x88 representation of white. */
export const WHITE_0x88 = 0b0000;

/** The 0x88 representation of black. */
export const BLACK_0x88 = 0b1000;

/** An array of the 0x88 colors. */
export const COLORS_0x88 = [WHITE_0x88, BLACK_0x88] as const;

/** A readonly object that converts a string color into its 0x88 representation. */
export const COLOR_TO_COLOR_0x88 = {
  [WHITE]: WHITE_0x88,
  [BLACK]: BLACK_0x88,
} as const;

/** A readonly map that converts a 0x88 color to its string representation. */
export const COLOR_0x88_TO_COLOR = invertToArray(COLOR_TO_COLOR_0x88);
