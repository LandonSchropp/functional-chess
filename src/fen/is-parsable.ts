import { InvalidFenError } from "../errors";
import { parseFen } from "./parse-fen";

/**
 * Returns true if the provided FEN can be parsed. This is not the same as the FEN being
 * _valid_—it's possible to parse a position that's not legal, like an empty board.
 *
 * @param fen The FEN to check.
 * @returns True if the FEN can be parsed.
 */
export function isParsable(fen: string): boolean {
  try {
    parseFen(fen);
    return true;
  } catch (error) {
    return !(error instanceof InvalidFenError);
  }
}
