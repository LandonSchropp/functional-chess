/** A flag that indicates that the move is a capture. */
export const CAPTURE_FLAG = 0b0000_0001_0000_0000_0000_0000_0000_0000;

/** A flag that indicates that the move is a double pawn move. */
export const DOUBLE_PAWN_FLAG = 0b0000_0010_0000_0000_0000_0000_0000_0000;

/** A flag that indicates that the move is an en passant capture. */
export const EN_PASSANT_FLAG = 0b0000_0100_0000_0000_0000_0000_0000_0000;

/** A flag that indicates that player castled during the move. */
export const CASTLE_FLAG = 0b0000_1000_0000_0000_0000_0000_0000_0000;
