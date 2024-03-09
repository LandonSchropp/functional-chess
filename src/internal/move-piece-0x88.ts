import { BOARD_SIZE } from "../constants";
import { Fen0x88 } from "../types";
import {
  A1_0x88,
  A8_0x88,
  BLACK_0x88,
  BLACK_KINGSIDE_0x88,
  BLACK_QUEENSIDE_0x88,
  BOARD_WIDTH_0x88,
  C1_0x88,
  C8_0x88,
  D1_0x88,
  D8_0x88,
  F1_0x88,
  F8_0x88,
  G1_0x88,
  G8_0x88,
  H1_0x88,
  H8_0x88,
  NO_PIECE_0x88,
  NO_SQUARE_0x88,
  PAWN_0x88,
  WHITE_0x88,
  WHITE_KINGSIDE_0x88,
  WHITE_QUEENSIDE_0x88,
} from "./constants";
import {
  CAPTURE_FLAG_0x88,
  CASTLE_FLAG_0x88,
  DOUBLE_PAWN_FLAG_0x88,
  EN_PASSANT_FLAG_0x88,
} from "./constants/moves";
import { decodeMove0x88 } from "./decode-move-0x88";
import { Board0x88, Move0x88 } from "./types";

const ALL_CASTLING_RIGHTS =
  WHITE_KINGSIDE_0x88 | WHITE_QUEENSIDE_0x88 | BLACK_KINGSIDE_0x88 | BLACK_QUEENSIDE_0x88;

/** Defines the updates to apply to castling rights when moving from a square. */
// TODO: Verify this generated data.
const CASTLING_UPDATES = [
  ~WHITE_QUEENSIDE_0x88,
  ...Array.from({ length: 3 }, () => ALL_CASTLING_RIGHTS),
  ~(WHITE_KINGSIDE_0x88 | WHITE_QUEENSIDE_0x88),
  ...Array.from({ length: 2 }, () => ALL_CASTLING_RIGHTS),
  ~WHITE_KINGSIDE_0x88,
  ...Array.from({ length: BOARD_SIZE }, () => ALL_CASTLING_RIGHTS),
  ...Array.from({ length: BOARD_WIDTH_0x88 * (BOARD_SIZE - 2) }, () => ALL_CASTLING_RIGHTS),
  ~BLACK_QUEENSIDE_0x88,
  ...Array.from({ length: 3 }, () => ALL_CASTLING_RIGHTS),
  ~(BLACK_KINGSIDE_0x88 | BLACK_QUEENSIDE_0x88),
  ...Array.from({ length: 2 }, () => ALL_CASTLING_RIGHTS),
  ~BLACK_KINGSIDE_0x88,
  ...Array.from({ length: BOARD_SIZE }, () => ALL_CASTLING_RIGHTS),
];

/**
 * Move a piece in a Fen0x88. This function does not care if the move results in an invalid
 * position—it's designed to make the move so the position can be checked afterward.
 *
 * @param fen The position to move a piece in.
 * @param move The move to make.
 * @returns The new position after the move.
 */
export function movePiece0x88(fen: Fen0x88, move: Move0x88): Fen0x88 {
  // TODO: Check that the position is invalid _before_ making the move. The code that will check if
  // the _move_ is valid will be handled at a higher level.

  const board: Board0x88 = [...fen[0]];
  const color = fen[1];
  let [, , castlingRights, , halfMoveClock, fullMoveNumber] = fen;
  const [from, to, promotion, flags] = decodeMove0x88(move);

  // Update the half move clock
  if (flags & CAPTURE_FLAG_0x88 || board[from] & PAWN_0x88) {
    halfMoveClock = 0;
  } else {
    halfMoveClock++;
  }

  // Update the full move clock
  if (color === BLACK_0x88) {
    fullMoveNumber++;
  }

  // Move the piece (with promotion if necessary)
  board[to] = promotion || board[from];
  board[from] = NO_PIECE_0x88;

  // Remove the pawn during an en passant capture, if necessary
  if (flags & EN_PASSANT_FLAG_0x88) {
    board[to + (color === WHITE_0x88 ? -BOARD_WIDTH_0x88 : BOARD_WIDTH_0x88)] = NO_PIECE_0x88;
  }

  // Set the en passant square
  const enPassantSquare =
    flags & DOUBLE_PAWN_FLAG_0x88
      ? to + (color === WHITE_0x88 ? -BOARD_WIDTH_0x88 : BOARD_WIDTH_0x88)
      : NO_SQUARE_0x88;

  // TODO: Update the king position (if necessary)

  // Castling
  if (flags & CASTLE_FLAG_0x88) {
    switch (to) {
      // White kingside castling
      case G1_0x88:
        board[F1_0x88] = board[H1_0x88];
        board[H1_0x88] = NO_PIECE_0x88;
        break;

      // White queenside castling
      case C1_0x88:
        board[D1_0x88] = board[A1_0x88];
        board[A1_0x88] = NO_PIECE_0x88;
        break;

      // Black kingside castling
      case G8_0x88:
        board[F8_0x88] = board[H8_0x88];
        board[H8_0x88] = NO_PIECE_0x88;
        break;

      // Black queenside castling
      case C8_0x88:
        board[D8_0x88] = board[A8_0x88];
        board[A8_0x88] = NO_PIECE_0x88;
        break;
    }
  }

  // Update the castling rights
  castlingRights &= CASTLING_UPDATES[from];
  castlingRights &= CASTLING_UPDATES[to];

  return [
    board,
    fen[1] === WHITE_0x88 ? BLACK_0x88 : WHITE_0x88,
    castlingRights,
    enPassantSquare,
    halfMoveClock,
    fullMoveNumber,
  ];
}
