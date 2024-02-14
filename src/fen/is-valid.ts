import { validateFen } from "chess.js";

/**
 * Checks if the FEN is valid.
 *
 * @param fen The FEN to check.
 * @returns Returns true if the FEN is valid and false if it isn't.
 */
export function isValid(fen: string): boolean {
  return validateFen(fen).ok;
}
