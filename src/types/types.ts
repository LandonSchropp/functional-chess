import { COLORS, FILES, PIECES, RANKS, SIDES, SQUARES } from "../constants";
import { Board0x88, Color0x88, EnPassantSquare } from "../internal/types";

// Match
export type Vector = [number, number];

// Chess
export type Color = (typeof COLORS)[number];
export type File = (typeof FILES)[number];
export type Rank = (typeof RANKS)[number];
export type Square = (typeof SQUARES)[number];
export type Piece = (typeof PIECES)[number];
export type Side = (typeof SIDES)[number];

/*
 * Represents a move on a chessboard.
 */
export type Move = {
  /** The piece that was moved. */
  piece: Piece;

  /** The square the piece was moved from. */
  from: Square;

  /** The square the piece was moved to. */
  to: Square;

  /** The piece that was captures, if applicable. */
  capture: Piece | null;

  /** The piece the pawn was promoted to, if applicable. */
  promotion: Piece | null;

  /** The algebraic notation of the move. */
  algebraic: string;
};

type Tuple8<T> = [T, T, T, T, T, T, T, T];

/**
 * A chessboard represented as a 2D array. Please note, the coordinates 0, 0 represent the _bottom
 * left_ of the board.
 */
export type Board = Tuple8<Tuple8<Piece | null>>;

/**
 * An internal representation of a parsed FEN, stored as arrays of integers for efficiency. This is
 * not meant to be read directly—rather, you should convert it to another format using one of the
 * `to` functions, such as `toFen`.
 */
export type Fen0x88 = [
  board: Board0x88,
  color: Color0x88,
  castlingRights: number,
  enPassantSquare: EnPassantSquare,
  halfMoveClock: number,
  fullMoveNumber: number,
];
