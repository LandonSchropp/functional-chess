import { COLORS, FILES, PIECES, RANKS, SQUARES, SQUARE_COLORS } from "./constants";

// Math
export type Vector = [number, number];

// Chess
export type Color = (typeof COLORS)[number];
export type File = (typeof FILES)[number];
export type Rank = (typeof RANKS)[number];
export type SquareColor = (typeof SQUARE_COLORS)[number];
export type Square = (typeof SQUARES)[number];
export type Piece = (typeof PIECES)[number];
