import { Fen0x88 } from "../types";
import { SQUARES_0x88 } from "./constants";
import { getLegalMovesForSquare0x88 } from "./get-legal-moves-for-square-0x88";
import { Move0x88 } from "./types";

/**
 * An internal helper function that generates all of the legal squares that can be moved from a
 * position.
 *
 * @private
 */
export function getLegalMoves0x88(fen: Fen0x88): Move0x88[] {
  return SQUARES_0x88.flatMap((square) => getLegalMovesForSquare0x88(fen, square));
}
