/* eslint "@typescript-eslint/no-explicit-any": "off" */
import { parseFen } from "../fen";
import { Fen0x88 } from "../types";

/**
 * Wraps a function that derives a value from a FEN, returning a similar function whose FEN
 * parameter can be either a Fen0x88 or a string.
 *
 * @typeParam A - The type of the additional arguments that the transformation function accepts.
 * @typeParam R - The type of the value derived from the FEN.
 * @param fen - The FEN string or Fen0x88 to be transformed.
 * @param fn - The transformation function that takes a Fen0x88 (and optional additional arguments)
 *   and returns a Fen0x88.
 * @returns The FEN transformation function which can accept either a string FEN or a Fen0x88
 *   object.
 */
export function deriveFromFen<A extends any[], R>(
  fn: (fen: Fen0x88, ...args: A) => R,
): (fen: Fen0x88 | string, ...args: A) => R {
  return (fen: string | Fen0x88, ...args: A) => {
    return fn(typeof fen === "string" ? parseFen(fen) : fen, ...args);
  };
}
