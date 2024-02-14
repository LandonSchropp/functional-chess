import { Square } from "../types";
import { getBoard } from "./get-board";
import { filter, flatten, isNil, map, pipe, prop } from "remeda";

/**
 * Returns the empty squares in the FEN.
 *
 * @param fen The FEN to parse.
 * @returns The empty squares in the FEN.
 */
export function getEmptySquares(fen: string): Square[] {
  return pipe(
    fen,
    getBoard,
    flatten(),
    filter(({ piece }) => isNil(piece)),
    map(prop("square")),
  );
}
