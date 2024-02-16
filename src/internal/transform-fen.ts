import { toFen, parseFen } from "../fen";
import { Fen0x88 } from "./types";

/* eslint "@typescript-eslint/no-explicit-any": "off" */

/**
 * Wraps a Fen0x88 transformation function, returning a similar function whose FEN parameter can be
 * either a Fen0x88 or a string.
 *
 * @typeParam A - The type of the additional arguments that the transformation function accepts.
 * @param fen - The FEN string or Fen0x88 to be transformed.
 * @param fn - The transformation function that takes a Fen0x88 (and optional additional arguments)
 *   and returns a Fen0x88.
 * @returns The FEN transformation function which can accept either a string FEN or a Fen0x88
 *   object.
 */
export function transformFen<A extends any[]>(
  fn: (fen: Fen0x88, ...args: A) => Fen0x88,
): ((fen: Fen0x88, ...args: A) => Fen0x88) & ((fen: string, ...args: A) => string) {
  return ((fen: string | Fen0x88, ...args: A) => {
    if (typeof fen !== "string") {
      return fn(fen, ...args);
    }

    return toFen(fn(parseFen(fen), ...args));
  }) as ((fen: Fen0x88, ...args: A) => Fen0x88) & ((fen: string, ...args: A) => string);
}
