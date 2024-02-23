import {
  A2_0x88,
  A7_0x88,
  BLACK_0x88,
  BLACK_PAWN_0x88,
  BOARD_WIDTH_0x88,
  EMPTY_PIECE_0x88,
  H2_0x88,
  H7_0x88,
  OUT_OF_BOUNDS_0x88,
  WHITE_0x88,
  WHITE_KING_0x88,
  WHITE_PAWN_0x88,
} from "./constants";
import { Fen0x88, Square0x88 } from "./types";

function generateLegalPawnMoves0x88(fen: Fen0x88, square: Square0x88): Square0x88[] {
  const [board, color, , enPassantSquare] = fen;
  const piece = board[square];

  // If the piece is not a pawn, ignore it
  if (piece !== WHITE_PAWN_0x88 && piece !== BLACK_PAWN_0x88) {
    return [];
  }

  const moves: Square0x88[] = [];
  const rankOffset = color === WHITE_0x88 ? BOARD_WIDTH_0x88 : -BOARD_WIDTH_0x88;

  // Pawn moving forward one square
  const oneSquareForward = square + rankOffset;

  if (!(oneSquareForward & OUT_OF_BOUNDS_0x88) && board[oneSquareForward]) {
    moves.push(oneSquareForward as Square0x88);
  }

  // Pawn moving forward two squares
  const twoSquaresForward = square + rankOffset * 2;
  const secondRankASquare = color === WHITE_0x88 ? A2_0x88 : A7_0x88;
  const secondRankHSquare = color === WHITE_0x88 ? H2_0x88 : H7_0x88;

  if (square >= secondRankASquare && square <= secondRankHSquare && !board[twoSquaresForward]) {
    moves.push(twoSquaresForward as Square0x88);
  }

  // Pawn moving diagonally
  const diagonals = [square + rankOffset - 1, square + rankOffset + 1];

  for (const target of diagonals) {
    // Ensure the square is on the board
    if (target & OUT_OF_BOUNDS_0x88) {
      continue;
    }

    // Normal capture
    if (
      (color === WHITE_0x88 && board[target] >= BLACK_PAWN_0x88) ||
      (color === BLACK_0x88 && board[target] <= WHITE_KING_0x88)
    ) {
      moves.push(target as Square0x88);
    }

    // En passant capture
    if (board[target] === enPassantSquare) {
      moves.push(target as Square0x88);
    }
  }

  return moves;
}

/**
 * This is an internal helper function that generates all of the legal squares that can be moved to
 * from a given square.
 */
export function getLegalMoves0x88(fen: Fen0x88, square: Square0x88): Square0x88[] {
  const piece = fen[0][square];
  const color = fen[1];

  // Ensure the square is not empty
  if (piece === EMPTY_PIECE_0x88) {
    return [];
  }

  // Ensure the piece is the correct color
  if (
    (color === WHITE_0x88 && piece >= BLACK_PAWN_0x88) ||
    (color === BLACK_0x88 && piece <= WHITE_KING_0x88)
  ) {
    return [];
  }

  return [...generateLegalPawnMoves0x88(fen, square)];
}
