import {
  A1_0x88,
  A2_0x88,
  A7_0x88,
  A8_0x88,
  BLACK_0x88,
  BLACK_KINGSIDE_0x88,
  BLACK_KING_0x88,
  BLACK_KNIGHT_0x88,
  BLACK_PAWN_0x88,
  BLACK_QUEENSIDE_0x88,
  BLACK_ROOK_0x88,
  BOARD_WIDTH_0x88,
  C1_0x88,
  C8_0x88,
  D1_0x88,
  D8_0x88,
  E1_0x88,
  E8_0x88,
  F1_0x88,
  F8_0x88,
  G1_0x88,
  G8_0x88,
  H1_0x88,
  H2_0x88,
  H7_0x88,
  H8_0x88,
  OUT_OF_BOUNDS_0x88,
  WHITE_0x88,
  WHITE_KINGSIDE_0x88,
  WHITE_KING_0x88,
  WHITE_KNIGHT_0x88,
  WHITE_PAWN_0x88,
  WHITE_QUEENSIDE_0x88,
  WHITE_ROOK_0x88,
} from "./constants";
import { KING_OFFSETS, KNIGHT_OFFSETS } from "./constants/offsets";
import { isPieceColor0x88 } from "./is-piece-color-0x88";
import { isSquareAttacked0x88 } from "./is-square-attacked-0x88";
import { Color0x88, EmptyPiece0x88, Fen0x88, Piece0x88, Side0x88, Square0x88 } from "./types";

/**
 * Determines if the piece is the opposite color color of the given color.
 *
 * @param piece The piece to check.
 * @param color The color to compare against.
 * @returns True if the piece is the opposite color of the given color. This will also return false
 *   if the given piece is empty.
 */
function isPieceOppositeColor0x88(piece: Piece0x88 | EmptyPiece0x88, color: Color0x88): boolean {
  return isPieceColor0x88(piece, color === WHITE_0x88 ? BLACK_0x88 : WHITE_0x88);
}

/** Returns all of the legal squares that a pawn can move to from a given square. */
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
    if (isPieceOppositeColor0x88(board[target], color)) {
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
  rookSquare: Square0x88,
): boolean {
  const [board, color, castlingRights] = fen;
  const oppositeColor = color === WHITE_0x88 ? BLACK_0x88 : WHITE_0x88;

  // Ensure the castling right is available
  if (!(castlingRights & side)) {
    return false;
  }

  // Ensure the rook is on the correct square
  if (board[rookSquare] !== (color === WHITE_0x88 ? WHITE_ROOK_0x88 : BLACK_ROOK_0x88)) {
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

/** Returns all of the legal squares that a knight can move to from a given square. */
function getLegalKnightMoves0x88(fen: Fen0x88, square: Square0x88): Square0x88[] {
  const [board, color] = fen;
  const piece = board[square];

  // If the piece is not a knight, ignore it
  if (piece !== WHITE_KNIGHT_0x88 && piece !== BLACK_KNIGHT_0x88) {
    return [];
  }

  const moves: Square0x88[] = [];

  for (const offset of KNIGHT_OFFSETS) {
    const target = (square + offset) as Square0x88;

    if (!(target & OUT_OF_BOUNDS_0x88) && !isPieceColor0x88(board[target], color)) {
      moves.push(target);
    }
  }

  return moves;
}

/** Returns all of the legal squares that a king can move to from a given square, including castling. */
function getLegalKingMoves0x88(fen: Fen0x88, square: Square0x88): Square0x88[] {
  const [board, color] = fen;
  const piece = board[square];

  // If the piece is not a king, ignore it
  if (piece !== WHITE_KING_0x88 && piece !== BLACK_KING_0x88) {
    return [];
  }

  const moves: Square0x88[] = [];

  // Normal moves
  for (const offset of KING_OFFSETS) {
    const target = (square + offset) as Square0x88;

    if (!(target & OUT_OF_BOUNDS_0x88) && !isPieceColor0x88(board[target], color)) {
      moves.push(target);
    }
  }

  // Castling
  if (color === WHITE_0x88 && square === E1_0x88) {
    if (canCastle(fen, WHITE_KINGSIDE_0x88, F1_0x88, G1_0x88, H1_0x88)) {
      moves.push(G1_0x88);
    }

    if (canCastle(fen, WHITE_QUEENSIDE_0x88, D1_0x88, C1_0x88, A1_0x88)) {
      moves.push(C1_0x88);
    }
  } else if (color === BLACK_0x88 && square === E8_0x88) {
    if (canCastle(fen, BLACK_KINGSIDE_0x88, F8_0x88, G8_0x88, H8_0x88)) {
      moves.push(G8_0x88);
    }

    if (canCastle(fen, BLACK_QUEENSIDE_0x88, D8_0x88, C8_0x88, A8_0x88)) {
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
  // Ensure the square is not empty and the piece is the correct color
  if (!isPieceColor0x88(fen[0][square], fen[1])) {
    return [];
  }

  return [
    ...getLegalPawnMoves0x88(fen, square),
    ...getLegalKnightMoves0x88(fen, square),
    ...getLegalKingMoves0x88(fen, square),
  ];
}
