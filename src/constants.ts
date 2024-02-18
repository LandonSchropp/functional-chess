// Board
export const BOARD_SIZE = 8;

// Colors
export const WHITE = "w";
export const BLACK = "b";
export const COLORS = [WHITE, BLACK] as const;

// Ranks and files
export const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;
export const RANKS = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

/** All of the squares on a chessboard. */
// prettier-ignore
export const SQUARES = [
  "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1",
  "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2",
  "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3",
  "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4",
  "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5",
  "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6",
  "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7",
  "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8",
] as const;

// Pieces
export const WHITE_PAWN = "P";
export const WHITE_KNIGHT = "N";
export const WHITE_BISHOP = "B";
export const WHITE_ROOK = "R";
export const WHITE_QUEEN = "Q";
export const WHITE_KING = "K";
export const BLACK_PAWN = "p";
export const BLACK_KNIGHT = "n";
export const BLACK_BISHOP = "b";
export const BLACK_ROOK = "r";
export const BLACK_QUEEN = "q";
export const BLACK_KING = "k";

export const WHITE_PIECES = [
  WHITE_PAWN,
  WHITE_KNIGHT,
  WHITE_BISHOP,
  WHITE_ROOK,
  WHITE_QUEEN,
  WHITE_KING,
] as const;

export const BLACK_PIECES = [
  BLACK_PAWN,
  BLACK_KNIGHT,
  BLACK_BISHOP,
  BLACK_ROOK,
  BLACK_QUEEN,
  BLACK_KING,
] as const;

export const PIECES = [...WHITE_PIECES, ...BLACK_PIECES] as const;

// Sides
export const WHITE_KINGSIDE = "K";
export const WHITE_QUEENSIDE = "Q";
export const BLACK_KINGSIDE = "k";
export const BLACK_QUEENSIDE = "q";

export const SIDES = [WHITE_KINGSIDE, WHITE_QUEENSIDE, BLACK_KINGSIDE, BLACK_QUEENSIDE] as const;

// Positions
export const EMPTY_POSITION = "8/8/8/8/8/8/8/8 w - - 0 1";
export const STARTING_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
