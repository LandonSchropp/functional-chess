import {
  BLACK_BISHOP_0x88,
  BLACK_KING_0x88,
  BLACK_KNIGHT_0x88,
  BLACK_PAWN_0x88,
  BLACK_QUEEN_0x88,
  BLACK_ROOK_0x88,
  OUT_OF_BOUNDS_0x88,
  WHITE_0x88,
  WHITE_BISHOP_0x88,
  WHITE_KING_0x88,
  WHITE_KNIGHT_0x88,
  WHITE_PAWN_0x88,
  WHITE_QUEEN_0x88,
  WHITE_ROOK_0x88,
} from "../internal/constants";
import { Color0x88, Fen0x88, Square0x88 } from "../internal/types";
import {
  KNIGHT_OFFSETS,
  KING_OFFSETS,
  BISHOP_OFFSETS,
  ROOK_OFFSETS,
  BLACK_PAWN_CAPTURE_OFFSETS,
  WHITE_PAWN_CAPTURE_OFFSETS,
} from "./constants/offsets";

/**
 * Determines if the given square is currently attacked by the provided color.
 *
 * @param fen - The FEN.
 * @param square - The square to check.
 * @param color - The color of the attacking side.
 * @returns True if the square is attacked.
 */
export function isSquareAttacked0x88(fen: Fen0x88, square: Square0x88, color: Color0x88): boolean {
  const board = fen[0];

  // Pawns
  const pawn = color === WHITE_0x88 ? WHITE_PAWN_0x88 : BLACK_PAWN_0x88;

  for (const offset of color === WHITE_0x88
    ? WHITE_PAWN_CAPTURE_OFFSETS
    : BLACK_PAWN_CAPTURE_OFFSETS) {
    const target = square + offset;

    if (!(target & OUT_OF_BOUNDS_0x88) && board[target] === pawn) {
      return true;
    }
  }

  // Knights
  const knight = color === WHITE_0x88 ? WHITE_KNIGHT_0x88 : BLACK_KNIGHT_0x88;

  for (const offset of KNIGHT_OFFSETS) {
    const target = square + offset;

    if (!(target & OUT_OF_BOUNDS_0x88) && board[target] === knight) {
      return true;
    }
  }

  // Kings
  const king = color === WHITE_0x88 ? WHITE_KING_0x88 : BLACK_KING_0x88;

  for (const offset of KING_OFFSETS) {
    const target = square + offset;

    if (!(target & OUT_OF_BOUNDS_0x88) && board[target] === king) {
      return true;
    }
  }

  // Bishops and queens
  const bishop = color === WHITE_0x88 ? WHITE_BISHOP_0x88 : BLACK_BISHOP_0x88;
  const queen = color === WHITE_0x88 ? WHITE_QUEEN_0x88 : BLACK_QUEEN_0x88;

  for (const offset of BISHOP_OFFSETS) {
    let target = square + offset;

    // Loop over the attack ray until we're out of bounds
    while (!(target & OUT_OF_BOUNDS_0x88)) {
      // If we hit a bishop or queen, we're done!
      if ((!(target & OUT_OF_BOUNDS_0x88) && board[target] === bishop) || board[target] === queen) {
        return true;
      }

      // Break if we hit a different piece
      if (board[target]) {
        break;
      }

      // Increment the target square by the offset
      target += offset;
    }
  }

  // Rooks and queens
  const rook = color === WHITE_0x88 ? WHITE_ROOK_0x88 : BLACK_ROOK_0x88;

  for (const offset of ROOK_OFFSETS) {
    let target = square + offset;

    // Loop over the attack ray until we're out of bounds
    while (!(target & OUT_OF_BOUNDS_0x88)) {
      // If we hit a rook or queen, we're done!
      if ((!(target & OUT_OF_BOUNDS_0x88) && board[target] === rook) || board[target] === queen) {
        return true;
      }

      // Break if we hit a different piece
      if (board[target]) {
        break;
      }

      // Increment the target square by the offset
      target += offset;
    }
  }

  return false;
}
