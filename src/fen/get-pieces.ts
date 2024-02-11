import { Piece, Square } from "../types";
import { getBoard } from "./get-board";
import { filter, flatten, isNil, pipe } from "remeda";

/**
 * Returns an array all of the pieces in the FEN.
 * @param fen The FEN to parse.
 * @returns An array of the pieces in the FEN. Each value in the array is an object with a `square`
 * property and a `piece` property.
 */
export function getPieces(fen: string): { square: Square; piece: Piece }[] {
  return pipe(
    fen,
    getBoard,
    flatten(),
    filter(({ piece }) => !isNil(piece)),
  ) as { square: Square; piece: Piece }[];
}
