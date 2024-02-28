import { Fen0x88 } from "../types";
import {
  A1_0x88,
  A8_0x88,
  BLACK_0x88,
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
  WHITE_0x88,
  WHITE_KINGSIDE_0x88,
  WHITE_QUEENSIDE_0x88,
} from "./constants";
import { CASTLE_FLAG_0x88, DOUBLE_PAWN_FLAG_0x88, EN_PASSANT_FLAG_0x88 } from "./constants/moves";
import { decodeMove0x88 } from "./decode-move-0x88";
import { Board0x88, Move0x88 } from "./types";

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
  let castlingRights = fen[2];
  const [from, to, promotion, flags] = decodeMove0x88(move);

  // Move the piece (with promotion if necessary)
  board[to] = promotion || board[from];
  board[from] = NO_PIECE_0x88;

  // Remove the pawn during an en passant capture, if necessary
  if (flags & EN_PASSANT_FLAG_0x88) {
    board[to + color === WHITE_0x88 ? BOARD_WIDTH_0x88 : -BOARD_WIDTH_0x88] = NO_PIECE_0x88;
  }

  // Set the end passant square
  const enPassantSquare =
    flags & DOUBLE_PAWN_FLAG_0x88
      ? to + (color === WHITE_0x88 ? -BOARD_WIDTH_0x88 : BOARD_WIDTH_0x88)
      : NO_SQUARE_0x88;

  // Handle castling
  if (flags & CASTLE_FLAG_0x88) {
    switch (to) {
      // White kingside castling
      case G1_0x88:
        board[F1_0x88] = board[H1_0x88];
        board[H1_0x88] = NO_PIECE_0x88;
        castlingRights &= ~WHITE_KINGSIDE_0x88;
        castlingRights &= ~WHITE_QUEENSIDE_0x88;
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

  // TODO: Update the king position (if necessary)

  return [
    board,
    fen[1] === WHITE_0x88 ? BLACK_0x88 : WHITE_0x88,
    castlingRights,
    enPassantSquare,
    fen[4],
    fen[5],
  ];
}
