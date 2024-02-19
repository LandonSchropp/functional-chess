import {
  SQUARE_TO_SQUARE_0x88,
  EMPTY_PIECE_0x88,
  PIECE_TO_PIECE_0x88,
} from "../internal/constants";
import { transformFen } from "../internal/transform-fen";
import { Fen0x88 } from "../internal/types";
import { Square, Piece } from "../types";

/**
 * Sets a piece on the board.
 *
 * @param fen The fen to set the piece on.
 * @param square The square to set the piece on.
 * @param piece The piece to set on the square. If `null`, any piece on the square will be removed.
 * @returns The new fen.
 */
export const setPiece = transformFen(
  (fen: Fen0x88, square: Square, piece: Piece | null): Fen0x88 => {
    const square0x88 = SQUARE_TO_SQUARE_0x88[square];
    const piece0x88 = piece === null ? EMPTY_PIECE_0x88 : PIECE_TO_PIECE_0x88[piece];

    return [
      [...fen[0].slice(0, square0x88), piece0x88, ...fen[0].slice(square0x88 + 1)],
      ...fen.slice(1),
    ] as Fen0x88;
  },
);
