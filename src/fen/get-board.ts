import { BOARD_SIZE } from "../constants";
import { convertCoordinatesToSquare } from "../square";
import { Board } from "../types";
import { chessJsPieceToPiece, createChess } from "../utilities/chess-js";
import { map, pipe, reverse } from "remeda";

/**
 * Returns a 2D array of the board.
 * @param fen The FEN to parse.
 * @returns A 2D array of the board. The coordinates of the board use `"a1"` as the `[0][0]`
 * element. Each value in the 2D array is an object with a `square` property and a `piece` property.
 * If the square in the FEN is empty, the corresponding value in the array has its piece set to
 * `null`.
 */
export function getBoard(fen: string): Board {
  return pipe(
    createChess(fen).board(),
    map.indexed((rank, rankIndex) => {
      return rank.map((piece, fileIndex) => ({
        square: convertCoordinatesToSquare([fileIndex, BOARD_SIZE - rankIndex - 1]),
        piece: piece && chessJsPieceToPiece(piece),
      }));
    }),
    reverse(),
  ) as Board;
}
