import { Fen0x88 } from "../types";
import {
  A1_0x88,
  A2_0x88,
  A7_0x88,
  A8_0x88,
  BLACK_0x88,
  BLACK_KINGSIDE_0x88,
  BLACK_QUEENSIDE_0x88,
  BOARD_WIDTH_0x88,
  C1_0x88,
  C8_0x88,
  D1_0x88,
  D8_0x88,
  E1_0x88,
  E8_0x88,
  NO_PIECE_0x88,
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
  WHITE_QUEENSIDE_0x88,
  PAWN_0x88,
  BISHOP_0x88,
  QUEEN_0x88,
  KNIGHT_0x88,
  ROOK_0x88,
  KING_0x88,
} from "./constants";
import {
  CAPTURE_FLAG_0x88,
  CASTLE_FLAG_0x88,
  DOUBLE_PAWN_FLAG_0x88,
  EN_PASSANT_FLAG_0x88,
} from "./constants/moves";
import { BISHOP_OFFSETS, KING_OFFSETS, KNIGHT_OFFSETS, ROOK_OFFSETS } from "./constants/offsets";
import { encodeMove0x88 } from "./encode-move-0x88";
import { isSquareAttacked0x88 } from "./is-square-attacked-0x88";
import { movePiece0x88 } from "./move-piece-0x88";
import { Color0x88, Move0x88, Side0x88, Square0x88 } from "./types";

/** Returns true if the provided move would leave the king is check. */
function isKingInCheckAfterMove(fen: Fen0x88, move: Move0x88): boolean {
  const fenAfterMove = movePiece0x88(fen, move);

  // TODO: It would be more efficient to keep track of this square instead.
  const kingSquare = fenAfterMove[0].findIndex((piece) => {
    return piece & KING_0x88 && piece & fen[1];
  }) as Square0x88;

  return isSquareAttacked0x88(fenAfterMove, kingSquare, fenAfterMove[1]);
}

/**
 * This is a helper method that's similar to encodeMove0x88, except it generates an array of all
 * possible pawn promotions.
 */
function encodeMoveWithPromotions0x88(
  fromSquare: Square0x88,
  toSquare: Square0x88,
  color: Color0x88,
  flags: number = 0,
): Move0x88[] {
  return [QUEEN_0x88, ROOK_0x88, BISHOP_0x88, KNIGHT_0x88].map((promotionPiece) =>
    encodeMove0x88(fromSquare, toSquare, color | promotionPiece, flags),
  );
}

/** Returns all of the legal squares that a pawn can move to from a given square. */
function getLegalPawnMoves0x88(fen: Fen0x88, square: Square0x88): Move0x88[] {
  const [board, color, , enPassantSquare] = fen;
  const piece = board[square];
  const moves: Move0x88[] = [];
  const oppositeColor = color === WHITE_0x88 ? BLACK_0x88 : WHITE_0x88;

  // If the piece is not a pawn, ignore it
  if (!(piece & PAWN_0x88)) {
    return moves;
  }

  const rankOffset = color === WHITE_0x88 ? BOARD_WIDTH_0x88 : -BOARD_WIDTH_0x88;

  // Pawn moving forward one square
  const oneSquare = (square + rankOffset) as Square0x88;

  if (!(oneSquare & OUT_OF_BOUNDS_0x88) && !board[oneSquare]) {
    if (
      (color === WHITE_0x88 && oneSquare >= A8_0x88) ||
      (color === BLACK_0x88 && oneSquare <= H1_0x88)
    ) {
      moves.push(...encodeMoveWithPromotions0x88(square, oneSquare, color));
    } else {
      moves.push(encodeMove0x88(square, oneSquare, NO_PIECE_0x88));
    }
  }

  // Pawn moving forward two squares
  const twoSquares = (square + rankOffset * 2) as Square0x88;

  if (!(twoSquares & OUT_OF_BOUNDS_0x88) && !board[oneSquare] && !board[twoSquares]) {
    if (color === WHITE_0x88 && square >= A2_0x88 && square <= H2_0x88) {
      moves.push(encodeMove0x88(square, twoSquares, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88));
    } else if (color === BLACK_0x88 && square >= A7_0x88 && square <= H7_0x88) {
      moves.push(encodeMove0x88(square, twoSquares, NO_PIECE_0x88, DOUBLE_PAWN_FLAG_0x88));
    }
  }

  // Pawn moving diagonally
  const diagonals = [square + rankOffset - 1, square + rankOffset + 1] as Square0x88[];

  for (const target of diagonals) {
    // Ensure the square is on the board
    if (target & OUT_OF_BOUNDS_0x88) {
      continue;
    }

    // Normal capture
    if (board[target] & oppositeColor) {
      if (
        (color === WHITE_0x88 && oneSquare >= A8_0x88) ||
        (color === BLACK_0x88 && oneSquare <= H1_0x88)
      ) {
        moves.push(...encodeMoveWithPromotions0x88(square, target, color, CAPTURE_FLAG_0x88));
      } else {
        moves.push(encodeMove0x88(square, target, NO_PIECE_0x88, CAPTURE_FLAG_0x88));
      }
    }

    // En passant capture
    if (target === enPassantSquare) {
      moves.push(
        encodeMove0x88(square, target, NO_PIECE_0x88, CAPTURE_FLAG_0x88 | EN_PASSANT_FLAG_0x88),
      );
    }
  }

  return moves;
}

/**
 * Determines if the player is allowed to castle to a specific side based on the castling rights and
 * the position.
 */
function canCastle(
  fen: Fen0x88,
  side: Side0x88,
  fromSquare: Square0x88,
  throughSquare: Square0x88,
  targetSquare: Square0x88,
  rookSquare: Square0x88,
): boolean {
  const [board, color, castlingRights] = fen;
  const oppositeColor = color === WHITE_0x88 ? BLACK_0x88 : WHITE_0x88;

  // Ensure the castling right is available
  const isCastlingRightAvailable = !!(castlingRights & side);

  // Ensure the rook is on the correct square
  const isRookOnCorrectSquare = !!(board[rookSquare] & (ROOK_0x88 | color));

  // Ensure the squares are empty
  const areSquaresEmpty = !board[throughSquare] && !board[targetSquare];

  // Ensure the king is not in check or castling through check (the target square will be checked
  // later when we ensure the resulting position is not illegal).
  const isKingOrThroughSquareNotAttacked =
    !isSquareAttacked0x88(fen, fromSquare, oppositeColor) &&
    !isSquareAttacked0x88(fen, throughSquare, oppositeColor);

  return (
    isCastlingRightAvailable &&
    isRookOnCorrectSquare &&
    areSquaresEmpty &&
    isKingOrThroughSquareNotAttacked
  );
}

/** Returns all of the legal squares for pieces that leap (the knight and king) from a given square. */
function getLegalLeapMoves0x88(fen: Fen0x88, square: Square0x88): Move0x88[] {
  const [board, color] = fen;
  const piece = board[square];
  const moves: Move0x88[] = [];

  // If the piece is not a king or knight, ignore it
  if (!(piece & (KING_0x88 | KNIGHT_0x88))) {
    return moves;
  }

  // Determine the offsets to use based on the piece type.
  const offsets = piece & KING_0x88 ? KING_OFFSETS : KNIGHT_OFFSETS;

  // Normal moves
  for (const offset of offsets) {
    const target = (square + offset) as Square0x88;

    if (!(target & OUT_OF_BOUNDS_0x88) && !(board[target] & color)) {
      moves.push(
        encodeMove0x88(square, target, NO_PIECE_0x88, board[target] ? CAPTURE_FLAG_0x88 : 0),
      );
    }
  }

  return moves;
}

function getLegalCastlingMoves0x88(fen: Fen0x88, square: Square0x88): Move0x88[] {
  const [board, color] = fen;
  const piece = board[square];
  const moves: Move0x88[] = [];

  // If the piece is not a king, ignore it
  if (!(piece & KING_0x88)) {
    return moves;
  }

  if (color === WHITE_0x88 && square === E1_0x88) {
    if (canCastle(fen, WHITE_KINGSIDE_0x88, E1_0x88, F1_0x88, G1_0x88, H1_0x88)) {
      moves.push(encodeMove0x88(square, G1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88));
    }

    if (canCastle(fen, WHITE_QUEENSIDE_0x88, E1_0x88, D1_0x88, C1_0x88, A1_0x88)) {
      moves.push(encodeMove0x88(square, C1_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88));
    }
  } else if (color === BLACK_0x88 && square === E8_0x88) {
    if (canCastle(fen, BLACK_KINGSIDE_0x88, E8_0x88, F8_0x88, G8_0x88, H8_0x88)) {
      moves.push(encodeMove0x88(square, G8_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88));
    }

    if (canCastle(fen, BLACK_QUEENSIDE_0x88, E8_0x88, D8_0x88, C8_0x88, A8_0x88)) {
      moves.push(encodeMove0x88(square, C8_0x88, NO_PIECE_0x88, CASTLE_FLAG_0x88));
    }
  }

  return moves;
}

/**
 * Returns all of the legal squares for pieces that slide (the bishop, rook and queen) from a given
 * square.
 */
function getLegalSlidingMoves0x88(fen: Fen0x88, square: Square0x88): Move0x88[] {
  const [board, color] = fen;
  const piece = board[square];
  const moves: Move0x88[] = [];
  const oppositeColor = color === WHITE_0x88 ? BLACK_0x88 : WHITE_0x88;

  // If the piece is not a bishop, rook, or queen, ignore it
  if (!(piece & (BISHOP_0x88 | ROOK_0x88 | QUEEN_0x88))) {
    return moves;
  }

  // Determine the directions to use based on the piece type
  let offsets: number[];

  if (piece & BISHOP_0x88) {
    offsets = BISHOP_OFFSETS;
  } else if (piece & ROOK_0x88) {
    offsets = ROOK_OFFSETS;
  } else {
    offsets = KING_OFFSETS;
  }

  for (const offset of offsets) {
    let target = (square + offset) as Square0x88;

    // Loop through the attack ray until we can't go any further
    while (!(target & OUT_OF_BOUNDS_0x88)) {
      // When connecting with a piece of the same color, we're done
      if (board[target] & color) {
        break;
      }

      // When connecting with a piece of the opposite color add the move and then quit.
      if (board[target] & oppositeColor) {
        moves.push(encodeMove0x88(square, target, NO_PIECE_0x88, CAPTURE_FLAG_0x88));
        break;
      }

      // Otherwise, the square is empty, so add it to the list of moves.
      moves.push(encodeMove0x88(square, target, NO_PIECE_0x88));

      // Increment the target square by the offset
      target += offset;
    }
  }

  return moves;
}

/**
 * This is an internal helper function that generates all of the legal squares that can be moved to
 * from a given square.
 *
 * @private
 */
export function getLegalMovesForSquare0x88(fen: Fen0x88, square: Square0x88): Move0x88[] {
  // Ensure the square is not empty and the piece is the correct color
  if (!(fen[0][square] & fen[1])) {
    return [];
  }

  // Combine all of the potential moves from the different pieces.
  const moves = [
    ...getLegalPawnMoves0x88(fen, square),
    ...getLegalLeapMoves0x88(fen, square),
    ...getLegalCastlingMoves0x88(fen, square),
    ...getLegalSlidingMoves0x88(fen, square),
  ];

  // Filter out any moves that result in an illegal position.
  return moves.filter((move) => !isKingInCheckAfterMove(fen, move));
}
