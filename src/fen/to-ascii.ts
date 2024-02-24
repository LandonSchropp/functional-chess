import { BOARD_SIZE } from "../constants";
import { NO_PIECE_0x88, PIECE_TO_PIECE_0x88 } from "../internal/constants";
import { convertIndicesToSquare0x88 } from "../internal/convert-indices-to-square-0x88";
import { deriveFromFen } from "../internal/derive-from-fen";
import { invertToArray } from "../internal/object";
import { Fen0x88 } from "../types";

export const PIECE_0x88_TO_PIECE_ASCII = invertToArray({
  ...PIECE_TO_PIECE_0x88,
  ".": NO_PIECE_0x88,
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
      const piece0x88 = fen[0][convertIndicesToSquare0x88(BOARD_SIZE - rankIndex - 1, fileIndex)];
      return PIECE_0x88_TO_PIECE_ASCII[piece0x88];
    }).join("");
  }).join("\n");
});
