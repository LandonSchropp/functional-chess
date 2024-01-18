import { Chess } from "chess.js";

/**
 * Creates an instance of Chess.js using a non-validated FEN.
 * @param fen The FEN string to parse.
 * @returns An instance of Chess.js.
 * @private
 */
export function createChess(fen: string): Chess {
  const chess = new Chess();
  chess.load(fen, { skipValidation: true });
  return chess;
}

import {
  BISHOP,
  BLACK,
  KING,
  KNIGHT,
  PAWN,
  Piece as ChessJsPiece,
  QUEEN,
  ROOK,
  WHITE,
} from "chess.js";
import {
  BLACK_BISHOP,
  BLACK_KING,
  BLACK_KNIGHT,
  BLACK_PAWN,
  BLACK_QUEEN,
  BLACK_ROOK,
  WHITE_BISHOP,
  WHITE_KING,
  WHITE_KNIGHT,
  WHITE_PAWN,
  WHITE_QUEEN,
  WHITE_ROOK,
} from "../constants";
import { Piece } from "../types";

const PIECE_TO_CHESS_JS_PIECE = {
  [WHITE_KING]: { type: KING, color: WHITE },
  [WHITE_QUEEN]: { type: QUEEN, color: WHITE },
  [WHITE_ROOK]: { type: ROOK, color: WHITE },
  [WHITE_BISHOP]: { type: BISHOP, color: WHITE },
  [WHITE_KNIGHT]: { type: KNIGHT, color: WHITE },
  [WHITE_PAWN]: { type: PAWN, color: WHITE },
  [BLACK_KING]: { type: KING, color: BLACK },
  [BLACK_QUEEN]: { type: QUEEN, color: BLACK },
  [BLACK_ROOK]: { type: ROOK, color: BLACK },
  [BLACK_BISHOP]: { type: BISHOP, color: BLACK },
  [BLACK_KNIGHT]: { type: KNIGHT, color: BLACK },
  [BLACK_PAWN]: { type: PAWN, color: BLACK },
} as const;

const CHESS_JS_PIECE_TO_PIECE = {
  [WHITE]: {
    [KING]: WHITE_KING,
    [QUEEN]: WHITE_QUEEN,
    [ROOK]: WHITE_ROOK,
    [BISHOP]: WHITE_BISHOP,
    [KNIGHT]: WHITE_KNIGHT,
    [PAWN]: WHITE_PAWN,
  },
  [BLACK]: {
    [KING]: BLACK_KING,
    [QUEEN]: BLACK_QUEEN,
    [ROOK]: BLACK_ROOK,
    [BISHOP]: BLACK_BISHOP,
    [KNIGHT]: BLACK_KNIGHT,
    [PAWN]: BLACK_PAWN,
  },
} as const;

export function pieceToChessJsPiece(piece: Piece): ChessJsPiece {
  return PIECE_TO_CHESS_JS_PIECE[piece];
}

export function chessJsPieceToPiece(piece: ChessJsPiece): Piece {
  return CHESS_JS_PIECE_TO_PIECE[piece.color][piece.type];
}
