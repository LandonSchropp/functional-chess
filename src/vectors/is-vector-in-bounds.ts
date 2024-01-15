import { BOARD_SIZE } from "../constants";
import { Vector } from "../types";

export function isVectorInBounds([file, rank]: Vector): boolean {
  return file >= 0 && file < BOARD_SIZE && rank >= 0 && rank < BOARD_SIZE;
}
