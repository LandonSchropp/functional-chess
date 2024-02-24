import { BOARD_SIZE } from "../constants";
import {
  BLACK_BISHOP_0x88,
  BLACK_KING_0x88,
  BLACK_KNIGHT_0x88,
  BLACK_PAWN_0x88,
  BLACK_QUEEN_0x88,
  BLACK_ROOK_0x88,
  NO_PIECE_0x88,
  WHITE_BISHOP_0x88,
  WHITE_KING_0x88,
  WHITE_KNIGHT_0x88,
  WHITE_PAWN_0x88,
  WHITE_QUEEN_0x88,
  WHITE_ROOK_0x88,
} from "../internal/constants";
import { convertIndicesToSquare0x88 } from "../internal/convert-indices-to-square-0x88";
import { deriveFromFen } from "../internal/derive-from-fen";
import { invertToArray } from "../internal/object";
import { Fen0x88 } from "../internal/types";

export const PIECE_0x88_TO_PIECE_UNICODE = invertToArray({
  "♟︎": WHITE_PAWN_0x88,
  "♞": WHITE_KNIGHT_0x88,
  "♝": WHITE_BISHOP_0x88,
  "♜": WHITE_ROOK_0x88,
  "♛": WHITE_QUEEN_0x88,
  "♚": WHITE_KING_0x88,
  "♙": BLACK_PAWN_0x88,
  "♘": BLACK_KNIGHT_0x88,
  "♗": BLACK_BISHOP_0x88,
  "♖": BLACK_ROOK_0x88,
  "♕": BLACK_QUEEN_0x88,
  "♔": BLACK_KING_0x88,
  "·": NO_PIECE_0x88,
} as const);

/**
 * Converts a FEN's position to its Unicode string representation.
 *
 * @param fen - The FEN.
 * @returns The Unicode string representation of the FEN.
 */
export const toUnicode = deriveFromFen((fen: Fen0x88): string => {
  return Array.from({ length: BOARD_SIZE }, (_, rankIndex) => {
    return Array.from({ length: BOARD_SIZE }, (_, fileIndex) => {
      const piece0x88 = fen[0][convertIndicesToSquare0x88(BOARD_SIZE - rankIndex - 1, fileIndex)];
      return PIECE_0x88_TO_PIECE_UNICODE[piece0x88];
    }).join("");
  }).join("\n");
});
