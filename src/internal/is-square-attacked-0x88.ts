import {
  BISHOP_0x88,
  KING_0x88,
  KNIGHT_0x88,
  OUT_OF_BOUNDS_0x88,
  PAWN_0x88,
  QUEEN_0x88,
  ROOK_0x88,
  WHITE_0x88,
} from "../internal/constants";
import { Color0x88, Square0x88 } from "../internal/types";
import { Fen0x88 } from "../types";
import {
  KNIGHT_OFFSETS,
  KING_OFFSETS,
  BISHOP_OFFSETS,
  ROOK_OFFSETS,
  BLACK_PAWN_CAPTURE_OFFSETS,
  WHITE_PAWN_CAPTURE_OFFSETS,
} from "./constants/offsets";

/**
 * Determines if the given square is currently attacked by the provided color. Since this is an
 * internal function and is intended for use with `getLegalMovesForSquare0x88`, it doesn't check for
 * the color of the piece on the square.
 *
 * @private
 * @param fen - The FEN.
 * @param square - The square to check.
 * @param color - The color of the attacking side.
 * @returns True if the square is attacked.
 */
export function isSquareAttacked0x88(fen: Fen0x88, square: Square0x88, color: Color0x88): boolean {
  const board = fen[0];

  // Pawns
  for (const offset of color === WHITE_0x88
    ? WHITE_PAWN_CAPTURE_OFFSETS
    : BLACK_PAWN_CAPTURE_OFFSETS) {
    const fromSquare = square + offset;

    if (
      !(fromSquare & OUT_OF_BOUNDS_0x88) &&
      board[fromSquare] & PAWN_0x88 &&
      board[fromSquare] & color
    ) {
      return true;
    }
  }

  // Knights
  for (const offset of KNIGHT_OFFSETS) {
    const fromSquare = square + offset;

    if (
      !(fromSquare & OUT_OF_BOUNDS_0x88) &&
      board[fromSquare] & KNIGHT_0x88 &&
      board[fromSquare] & color
    ) {
      return true;
    }
  }

  // Kings
  for (const offset of KING_OFFSETS) {
    const fromSquare = square + offset;

    if (
      !(fromSquare & OUT_OF_BOUNDS_0x88) &&
      board[fromSquare] & KING_0x88 &&
      board[fromSquare] & color
    ) {
      return true;
    }
  }

  // Bishops and queens
  for (const offset of BISHOP_OFFSETS) {
    let fromSquare = square + offset;

    // Loop through the attack ray until we can't go any further
    while (!(fromSquare & OUT_OF_BOUNDS_0x88)) {
      // If we hit a bishop or queen, we're done!
      if (
        !(fromSquare & OUT_OF_BOUNDS_0x88) &&
        (board[fromSquare] & BISHOP_0x88 || board[fromSquare] & QUEEN_0x88) &&
        board[fromSquare] & color
      ) {
        return true;
      }

      // Break if we hit a different piece
      if (board[fromSquare]) {
        break;
      }

      // Increment the target square by the offset
      fromSquare += offset;
    }
  }

  // Rooks and queens
  for (const offset of ROOK_OFFSETS) {
    let fromSquare = square + offset;

    // Loop over the attack ray until we're out of bounds
    while (!(fromSquare & OUT_OF_BOUNDS_0x88)) {
      // If we hit a rook or queen, we're done!
      if (
        !(fromSquare & OUT_OF_BOUNDS_0x88) &&
        (board[fromSquare] & ROOK_0x88 || board[fromSquare] & QUEEN_0x88) &&
        board[fromSquare] & color
      ) {
        return true;
      }

      // Break if we hit a different piece
      if (board[fromSquare]) {
        break;
      }

      // Increment the target square by the offset
      fromSquare += offset;
    }
  }

  return false;
}
