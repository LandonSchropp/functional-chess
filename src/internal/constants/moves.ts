/** A flag that indicates that the move is a capture. */
export const CAPTURE_FLAG_0x88 = 0b0000_0001_0000_0000_0000_0000_0000_0000;

/** A flag that indicates that the move is a double pawn move. */
export const DOUBLE_PAWN_FLAG_0x88 = 0b0000_0010_0000_0000_0000_0000_0000_0000;

/** A flag that indicates that the move is an en passant capture. */
export const EN_PASSANT_FLAG_0x88 = 0b0000_0100_0000_0000_0000_0000_0000_0000;

/** A flag that indicates that player castled during the move. */
export const CASTLE_FLAG_0x88 = 0b0000_1000_0000_0000_0000_0000_0000_0000;

/** All of the possible flags that can be set on a move. */
export const FLAGS_0x88 = [
  CAPTURE_FLAG_0x88,
  DOUBLE_PAWN_FLAG_0x88,
  EN_PASSANT_FLAG_0x88,
  CASTLE_FLAG_0x88,
] as const;
