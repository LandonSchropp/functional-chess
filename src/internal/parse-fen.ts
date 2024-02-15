import { BOARD_SIZE } from "../constants";
import { InvalidFenError } from "../errors";
import { isColor, isPiece, isSide, isSquare } from "../types";
import {
  PIECE_TO_PIECE_0x88,
  EMPTY_SQUARE_0x88,
  BOARD_WIDTH_0x88,
  COLOR_TO_COLOR_0x88,
  SIDE_TO_SIDE_0x88,
  SQUARE_TO_SQUARE_0x88,
} from "./constants";
import { Piece0x88, EmptySquare0x88, Board0x88, Color0x88, Fen0x88, Square0x88 } from "./types";

const UNOCCUPIED_SQUARES = Array.from(
  { length: BOARD_WIDTH_0x88 - BOARD_SIZE },
  () => EMPTY_SQUARE_0x88,
) as EmptySquare0x88[];

function parseRank(fen: string, rank: string): (Piece0x88 | EmptySquare0x88)[] {
  const pieces: (Piece0x88 | EmptySquare0x88)[] = rank.split("").flatMap((char) => {
    if (isPiece(char)) {
      return PIECE_TO_PIECE_0x88[char];
    }

    if (/[1-8]/.test(char)) {
      return Array.from({ length: Number(char) }, () => EMPTY_SQUARE_0x88);
    }

    throw new InvalidFenError(
      `The position in the FEN '${fen}' contains the invalid character '${char}'.`,
    );
  });

  if (pieces.length !== BOARD_SIZE) {
    throw new InvalidFenError(
      `The pieces and empty squares in one of the ranks in the FEN '${fen}' doesn't add up ` +
        `to ${BOARD_SIZE}.`,
    );
  }

  return [...pieces, ...UNOCCUPIED_SQUARES];
}

export function parsePosition(fen: string, position: string): Board0x88 {
  const board = new Uint8Array(
    position
      .split("/")
      .map((rank) => parseRank(fen, rank))
      .toReversed()
      .flat(),
  );

  if (board.length !== BOARD_WIDTH_0x88 * BOARD_SIZE) {
    throw new InvalidFenError(`The FEN '${fen}' does not have ${BOARD_SIZE} ranks.`);
  }

  return board;
}

function parseColor(fen: string, color: string): Color0x88 {
  if (isColor(color)) {
    return COLOR_TO_COLOR_0x88[color];
  }

  throw new InvalidFenError(`The color in the FEN '${fen}' is invalid.`);
}

function parseCastling(fen: string, castling: string): number {
  if (castling === "-") {
    return 0;
  }

  return castling.split("").reduce((accumulator, char) => {
    if (!isSide(char)) {
      throw new InvalidFenError(
        `The castling in the FEN '${fen}' contains the invalid character '${char}'.`,
      );
    }

    return accumulator | SIDE_TO_SIDE_0x88[char];
  }, 0);
}

function parseEnPassant(fen: string, enPassant: string): Square0x88 | EmptySquare0x88 {
  if (enPassant === "-") {
    return EMPTY_SQUARE_0x88;
  }

  if (!isSquare(enPassant)) {
    throw new InvalidFenError(
      `The en passant in the FEN '${fen}' is invalid. The file and rank are out of bounds.`,
    );
  }

  return SQUARE_TO_SQUARE_0x88[enPassant];
}

function parseHalfMove(fen: string, halfMove: string): number {
  if (!/^\d+$/.test(halfMove)) {
    throw new InvalidFenError(`The half move '${halfMove}' in the FEN '${fen}' is invalid.`);
  }

  const parsed = Number(halfMove);

  if (parsed < 0) {
    throw new InvalidFenError(`The half move '${halfMove}' in the FEN '${fen}' is negative.`);
  }

  return parsed;
}

function parseFullMove(fen: string, fullMove: string): number {
  if (!/^\d+$/.test(fullMove)) {
    throw new InvalidFenError(`The full move '${fullMove}' in the FEN '${fen}' is invalid.`);
  }

  const parsed = Number(fullMove);

  if (parsed < 1) {
    throw new InvalidFenError(`The full move '${fullMove}' in the FEN '${fen}' is less than 1.`);
  }

  return parsed;
}

/**
 * Parses a FEN string into a Fen0x88.
 *
 * @param fen - The FEN string.
 * @returns The Fen0x88.
 * @throws {InvalidFenError} When the FEN string is invalid and can't be parsed.
 */
export function parseFen(fen: string): Fen0x88 {
  const splitFen = fen.trim().split(/\s+/);

  if (splitFen.length !== 6) {
    throw new InvalidFenError(`The FEN string '${fen}' does not have 6 parts.`);
  }

  return [
    parsePosition(fen, splitFen[0]),
    parseColor(fen, splitFen[1]),
    parseCastling(fen, splitFen[2]),
    parseEnPassant(fen, splitFen[3]),
    parseHalfMove(fen, splitFen[4]),
    parseFullMove(fen, splitFen[5]),
  ];
}
