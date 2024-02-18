import { BOARD_SIZE } from "../constants";
import {
  SQUARE_TO_SQUARE_0x88,
  EMPTY_EN_PASSANT_SQUARE_0x88,
  SIDES_0x88,
  SIDE_0x88_TO_SIDE,
  COLOR_0x88_TO_COLOR,
  EMPTY_SQUARE_0x88,
  PIECE_TO_PIECE_0x88,
} from "../internal/constants";
import { invertToArray } from "../internal/object";
import { Board0x88, Fen0x88 } from "../internal/types";

const PIECE_0x88_TO_FEN_PIECE = invertToArray({
  ...PIECE_TO_PIECE_0x88,
  "1": EMPTY_SQUARE_0x88,
});

const EN_PASSANT_SQUARE_0x88_TO_SQUARE = invertToArray({
  ...SQUARE_TO_SQUARE_0x88,
  "-": EMPTY_EN_PASSANT_SQUARE_0x88,
});

function unparsePosition(position: Board0x88): string {
  const ranks: string[] = [];

  for (let rankIndex = 0; rankIndex < BOARD_SIZE; rankIndex++) {
    let rank = "";

    for (let fileIndex = 0; fileIndex < BOARD_SIZE; fileIndex++) {
      const square = position[rankIndex * 16 + fileIndex];
      rank += PIECE_0x88_TO_FEN_PIECE[square];
    }

    ranks.push(rank.replace(/1+/g, (match) => match.length.toString()));
  }

  return ranks.reverse().join("/");
}

function unparseCastling(castling: number): string {
  if (castling === 0) {
    return "-";
  }

  return SIDES_0x88.filter((side) => castling & side)
    .map((side) => SIDE_0x88_TO_SIDE.get(side))
    .join("");
}

/**
 * Converts a Fen0x88 to a FEN string.
 *
 * @param fen The Fen0x88 to convert.
 * @returns The FEN string.
 */
export function toFen(fen: Fen0x88): string {
  return [
    unparsePosition(fen[0]),
    COLOR_0x88_TO_COLOR.get(fen[1]),
    unparseCastling(fen[2]),
    EN_PASSANT_SQUARE_0x88_TO_SQUARE[fen[3]],
    fen[4],
    fen[5],
  ].join(" ");
}
