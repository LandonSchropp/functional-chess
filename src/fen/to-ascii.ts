import { BOARD_SIZE } from "../constants";
import { EMPTY_SQUARE_0x88, PIECE_TO_PIECE_0x88 } from "../internal/constants";
import { deriveFromFen } from "../internal/derive-from-fen";
import { getPieceFromIndices0x88 } from "../internal/get-piece-from-indices-0x88";
import { invert } from "../internal/readonly-map";
import { Fen0x88 } from "../internal/types";

export const PIECE_0x88_TO_PIECE_ASCII = invert({
  ...PIECE_TO_PIECE_0x88,
  ".": EMPTY_SQUARE_0x88,
} as const);

/**
 * Converts a FEN's position to its ASCII string representation.
 *
 * @param fen - The FEN.
 * @returns The ASCII string representation of the FEN.
 */
export const toAscii = deriveFromFen((fen: Fen0x88): string => {
  return Array.from({ length: BOARD_SIZE }, (_, rankIndex) => {
    return Array.from({ length: BOARD_SIZE }, (_, fileIndex) => {
      return PIECE_0x88_TO_PIECE_ASCII.get(
        getPieceFromIndices0x88(fen[0], BOARD_SIZE - rankIndex - 1, fileIndex),
      );
    }).join("");
  }).join("\n");
});
