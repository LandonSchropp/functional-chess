import { map, pipe, reverse } from "remeda";
import { Piece } from "../types";
import { chessJsPieceToPiece, createChess } from "../utilities/chess-js";

/**
 * Returns a 2D array of the board.
 * @param fen The FEN string to parse.
 * @returns A 2D array of the board with "a1" as the first element. Empty squares are represented as
 * `null`.
 */
export function getBoardFromFen(fen: string): (Piece | null)[][] {
  return pipe(
    createChess(fen).board(),
    map(map((piece) => piece && chessJsPieceToPiece(piece))),
    reverse(),
  );
}
