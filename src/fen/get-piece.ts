import { Piece, Square } from "../types";
import { chessJsPieceToPiece, createChess } from "../utilities/chess-js";

/**
 * Returns the piece at the square.
 *
 * @param fen The FEN to parse.
 * @param square The square to get the piece from.
 * @returns The piece on the square, or `null` if there is no piece.
 */
export function getPiece(fen: string, square: Square): Piece | null {
  const piece = createChess(fen).get(square);
  return piece ? chessJsPieceToPiece(piece) : null;
}
