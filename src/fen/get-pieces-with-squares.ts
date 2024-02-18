import {
  OUT_OF_BOUNDS_0x88,
  PIECE_0x88_TO_PIECE,
  SQUARE_0x88_TO_SQUARE,
} from "../internal/constants";
import { deriveFromFen } from "../internal/derive-from-fen";
import { Fen0x88, Piece0x88, Square0x88 } from "../internal/types";
import { Piece, Square } from "../types";

type PieceWithSquare = { square: Square; piece: Piece };

/**
 * Returns an array all of the pieces and their squares in the FEN.
 *
 * @param fen The FEN to parse.
 * @returns An array of objects representing the pieces in the position. Each object contains two
 *   properties: the `piece` and the `square`.
 */
export const getPiecesWithSquares = deriveFromFen((fen: Fen0x88): PieceWithSquare[] => {
  const piecesWithSquares: PieceWithSquare[] = [];

  for (let square = 0; square < fen[0].length; square++) {
    if (square & OUT_OF_BOUNDS_0x88) {
      continue;
    }

    if (fen[0][square]) {
      piecesWithSquares.push({
        square: SQUARE_0x88_TO_SQUARE.get(square as Square0x88)!,
        piece: PIECE_0x88_TO_PIECE.get(fen[0][square] as Piece0x88)!,
      });
    }
  }

  return piecesWithSquares;
});
