import { FILES, PIECES, PLAYERS, RANKS, SQUARES, SQUARE_COLORS } from "./constants";

// Math
export type Vector = [number, number];

// Chess
export type Player = (typeof PLAYERS)[number];
export type Rank = (typeof RANKS)[number];
export type File = (typeof FILES)[number];
export type SquareColor = (typeof SQUARE_COLORS)[number];
export type Square = (typeof SQUARES)[number];
export type Piece = (typeof PIECES)[number];
