import { WHITE } from "../constants";
import {
  BLACK_BISHOP_0x88,
  BLACK_KING_0x88,
  BLACK_KNIGHT_0x88,
  BLACK_PAWN_0x88,
  BLACK_QUEEN_0x88,
  BLACK_ROOK_0x88,
  OUT_OF_BOUNDS_0x88,
  SQUARE_TO_SQUARE_0x88,
  WHITE_BISHOP_0x88,
  WHITE_KING_0x88,
  WHITE_KNIGHT_0x88,
  WHITE_PAWN_0x88,
  WHITE_QUEEN_0x88,
  WHITE_ROOK_0x88,
} from "../internal/constants";
import { deriveFromFen } from "../internal/derive-from-fen";
import { Fen0x88 } from "../internal/types";
import { Square, Color } from "../types";

const WHITE_PAWN_OFFSETS = [-15, -17];
const BLACK_PAWN_OFFSETS = [15, 17];
const KNIGHT_OFFSETS = [-33, -31, -18, -14, 14, 18, 31, 33];
const BISHOP_OFFSETS = [-15, -17, 15, 17];
const ROOK_OFFSETS = [-1, -16, 1, 16];
const KING_OFFSETS = [-1, -16, 1, 16, -15, -17, 15, 17];

/**
 * Determines if the given square is attacked by the provided color.
 *
 * @param fen - The FEN.
 * @param square - The square to check.
 * @param color - The color of the attacking side.
 * @returns True if the square is attacked.
 */
export const isSquareAttacked = deriveFromFen(
  (fen: Fen0x88, square: Square, color: Color): boolean => {
    const board = fen[0];
    const square0x88 = SQUARE_TO_SQUARE_0x88[square];

    // Pawns
    const pawn = color === WHITE ? WHITE_PAWN_0x88 : BLACK_PAWN_0x88;

    for (const offset of color === WHITE ? WHITE_PAWN_OFFSETS : BLACK_PAWN_OFFSETS) {
      const target = square0x88 + offset;

      if (!(target & OUT_OF_BOUNDS_0x88) && board[target] === pawn) {
        return true;
      }
    }

    // Knights
    const knight = color === WHITE ? WHITE_KNIGHT_0x88 : BLACK_KNIGHT_0x88;

    for (const offset of KNIGHT_OFFSETS) {
      const target = square0x88 + offset;

      if (!(target & OUT_OF_BOUNDS_0x88) && board[target] === knight) {
        return true;
      }
    }

    // Kings
    const king = color === WHITE ? WHITE_KING_0x88 : BLACK_KING_0x88;

    for (const offset of KING_OFFSETS) {
      const target = square0x88 + offset;

      if (!(target & OUT_OF_BOUNDS_0x88) && board[target] === king) {
        return true;
      }
    }

    // Bishops and queens
    const bishop = color === WHITE ? WHITE_BISHOP_0x88 : BLACK_BISHOP_0x88;
    const queen = color === WHITE ? WHITE_QUEEN_0x88 : BLACK_QUEEN_0x88;

    for (const offset of BISHOP_OFFSETS) {
      let target = square0x88 + offset;

      // Loop over the attack ray until we're out of bounds
      while (!(target & OUT_OF_BOUNDS_0x88)) {
        // If we hit a bishop or queen, we're done!
        if (
          (!(target & OUT_OF_BOUNDS_0x88) && board[target] === bishop) ||
          board[target] === queen
        ) {
          return true;
        }

        // Break if we hit a different piece
        if (board[target]) {
          break;
        }

        // Increment the target square0x88 by the offset
        target += offset;
      }
    }

    // Rooks and queens
    const rook = color === WHITE ? WHITE_ROOK_0x88 : BLACK_ROOK_0x88;

    for (const offset of ROOK_OFFSETS) {
      let target = square0x88 + offset;

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

        // Increment the target square0x88 by the offset
        target += offset;
      }
    }

    return false;
  },
);
