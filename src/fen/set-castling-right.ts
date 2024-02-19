import { SIDE_TO_SIDE_0x88 } from "../internal/constants";
import { transformFen } from "../internal/transform-fen";
import { Fen0x88 } from "../internal/types";
import { Side } from "../types";

/**
 * Sets the castling right for the provided side.
 *
 * @param fen The FEN.
 * @param side The side to set the castling right for.
 * @param canCastle Whether or not the provided side can castle.
 * @returns The updated FEN.
 */
export const setCastlingRight = transformFen(
  (fen: Fen0x88, side: Side, canCastle: boolean): Fen0x88 => {
    const side0x88 = SIDE_TO_SIDE_0x88[side];

    return [
      fen[0],
      fen[1],
      canCastle ? fen[2] | side0x88 : fen[2] & ~side0x88,
      fen[3],
      fen[4],
      fen[5],
    ];
  },
);
