import {
  A2_0x88,
  A7_0x88,
  BLACK_0x88,
  BLACK_KINGSIDE_0x88,
  BLACK_KING_0x88,
  BLACK_PAWN_0x88,
  BLACK_QUEENSIDE_0x88,
  BOARD_WIDTH_0x88,
  C1_0x88,
  C8_0x88,
  D1_0x88,
  D8_0x88,
  E1_0x88,
  E8_0x88,
  EMPTY_PIECE_0x88,
  F1_0x88,
  F8_0x88,
  G1_0x88,
  G8_0x88,
  H2_0x88,
  H7_0x88,
  OUT_OF_BOUNDS_0x88,
  WHITE_0x88,
  WHITE_KINGSIDE_0x88,
  WHITE_KING_0x88,
  WHITE_PAWN_0x88,
  WHITE_QUEENSIDE_0x88,
} from "./constants";
import { isSquareAttacked0x88 } from "./is-square-attacked-0x88";
import { Fen0x88, Side0x88, Square0x88 } from "./types";

function getLegalPawnMoves0x88(fen: Fen0x88, square: Square0x88): Square0x88[] {
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

/** Determines if the player is allowed to castle based on the castling rights and the position. */
function canCastle(
  fen: Fen0x88,
  side: Side0x88,
  throughSquare: Square0x88,
  targetSquare: Square0x88,
): boolean {
  const [board, color, castlingRights] = fen;
  const oppositeColor = color === WHITE_0x88 ? BLACK_0x88 : WHITE_0x88;

  // Ensure the castling right is available
  if (!(castlingRights & side)) {
    return false;
  }

  // Ensure the squares are empty
  if (board[throughSquare] || board[targetSquare]) {
    return false;
  }

  // Ensure the king and the through square are not attacked (the destination square will be checked
  // later).
  if (
    isSquareAttacked0x88(fen, throughSquare, oppositeColor) ||
    isSquareAttacked0x88(fen, targetSquare, oppositeColor)
  ) {
    return false;
  }

  return true;
}

// TODO: Add non-castling moves to this function.
function getLegalKingMoves0x88(fen: Fen0x88, square: Square0x88): Square0x88[] {
  const [board, color] = fen;
  const piece = board[square];

  // If the piece is not a king, ignore it
  if (piece !== WHITE_KING_0x88 && piece !== BLACK_KING_0x88) {
    return [];
  }

  const moves: Square0x88[] = [];

  // Castling
  if (color === WHITE_0x88 && square === E1_0x88) {
    if (canCastle(fen, WHITE_KINGSIDE_0x88, F1_0x88, G1_0x88)) {
      moves.push(G1_0x88);
    }

    if (canCastle(fen, WHITE_QUEENSIDE_0x88, D1_0x88, C1_0x88)) {
      moves.push(C1_0x88);
    }
  } else if (color === BLACK_0x88 && square === E8_0x88) {
    if (canCastle(fen, BLACK_KINGSIDE_0x88, F8_0x88, G8_0x88)) {
      moves.push(G8_0x88);
    }

    if (canCastle(fen, BLACK_QUEENSIDE_0x88, D8_0x88, C8_0x88)) {
      moves.push(C8_0x88);
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

  return [...getLegalPawnMoves0x88(fen, square), ...getLegalKingMoves0x88(fen, square)];
}
