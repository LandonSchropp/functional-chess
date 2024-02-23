import { BOARD_WIDTH_0x88 } from "./board";

/** Offsets that can be added to a square to determine legal white pawn captures moves. */
export const WHITE_PAWN_CAPTURE_OFFSETS = [-BOARD_WIDTH_0x88 - 1, -BOARD_WIDTH_0x88 + 1];

/** Offsets that can be added to a square to determine legal black pawn captures moves. */
export const BLACK_PAWN_CAPTURE_OFFSETS = [BOARD_WIDTH_0x88 - 1, BOARD_WIDTH_0x88 + 1];

/** Offsets that can be added to a square to determine legal knight moves. */
export const KNIGHT_OFFSETS = [
  -BOARD_WIDTH_0x88 * 2 - 1,
  -BOARD_WIDTH_0x88 * 2 + 1,
  -BOARD_WIDTH_0x88 - 2,
  -BOARD_WIDTH_0x88 + 2,
  BOARD_WIDTH_0x88 - 2,
  BOARD_WIDTH_0x88 + 2,
  BOARD_WIDTH_0x88 * 2 - 1,
  BOARD_WIDTH_0x88 * 2 + 1,
];

/** Offsets that can be added to a square to determine legal pawn moves. */
export const BISHOP_OFFSETS = [...WHITE_PAWN_CAPTURE_OFFSETS, ...BLACK_PAWN_CAPTURE_OFFSETS];

/** Offsets that can be added to a square to determine legal rook moves. */
export const ROOK_OFFSETS = [-1, -BOARD_WIDTH_0x88, 1, BOARD_WIDTH_0x88];

/** Offsets that can be added to a square to determine legal king moves. */
export const KING_OFFSETS = [...BISHOP_OFFSETS, ...ROOK_OFFSETS];
