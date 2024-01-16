import { map, pipe, reverse } from "remeda";
import { BOARD_SIZE } from "../constants";
import { convertCoordinatesToSquare } from "../square";
import { Piece, Square } from "../types";
import { chessJsPieceToPiece, createChess } from "../utilities/chess-js";

/**
 * Returns a 2D array of the board.
 * @param fen The FEN to parse.
 * @returns A 2D array of the board. The coordinates of the board use "a1" as the `[0][0]` element.
 * Each square contains an object, with a `square` property and a `piece` property. Empty squares
 * are represented with `null`.
 */
export function getBoard(fen: string): { square: Square; piece: Piece | null }[][] {
  return pipe(
    createChess(fen).board(),
    map.indexed((rank, rankIndex) => {
      return rank.map((piece, fileIndex) => ({
        square: convertCoordinatesToSquare([fileIndex, BOARD_SIZE - rankIndex - 1]),
        piece: piece && chessJsPieceToPiece(piece),
      }));
    }),
    reverse(),
  );
}
