import { BOARD_SIZE } from "../constants";
import { Vector } from "../types";

/**
 * Determines if the coordinates represented by the vector are in the bounds of a chessboard.
 * @param coordinates The coordinates to check.
 * @returns Whether the coordinates are in bounds.
 * @private
 */
export function isVectorInBounds([file, rank]: Vector): boolean {
  return file >= 0 && file < BOARD_SIZE && rank >= 0 && rank < BOARD_SIZE;
}
