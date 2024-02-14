import { BOARD_SIZE } from "../constants";
import { Vector } from "../types";

/**
 * Determines if the coordinates represented by the vector are in the bounds of a chessboard.
 *
 * @private
 * @param coordinates The coordinates to check.
 * @returns Whether the coordinates are in bounds.
 */
export function isVectorInBounds([file, rank]: Vector): boolean {
  return file >= 0 && file < BOARD_SIZE && rank >= 0 && rank < BOARD_SIZE;
}
