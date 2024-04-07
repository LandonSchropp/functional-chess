import { STARTING_POSITION } from "../constants";
import { parseFen } from "../fen";
import { Fen0x88 } from "../types";
import { getLegalMoves0x88 } from "./get-legal-moves-0x88";
import { movePiece0x88 } from "./move-piece-0x88";
import { expect, describe, it } from "bun:test";

// These test positions and theri expected results are taken from the Chess Programming Wiki.
// https://www.chessprogramming.org/Perft_Results
const POSITION_1 = STARTING_POSITION;
const POSITION_2 = "r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1";
const POSITION_3 = "8/2p5/3p4/KP5r/1R3p1k/8/4P1P1/8 w - - 0 1";
const POSITION_4 = "r3k2r/Pppp1ppp/1b3nbN/nP6/BBP1P3/q4N2/Pp1P2PP/R2Q1RK1 w kq - 0 1";
const POSITION_5 = "rnbq1k1r/pp1Pbppp/2p5/8/2B5/8/PPP1NnPP/RNBQK2R w KQ - 1 8";
const POSITION_6 = "r4rk1/1pp1qppp/p1np1n2/2b1p1B1/2B1P1b1/P1NP1N2/1PP1QPPP/R4RK1 w - - 0 10";

const CASES = [
  [1, POSITION_1, 1, 20],
  [1, POSITION_1, 2, 400],
  [1, POSITION_1, 3, 8_902],
  [1, POSITION_1, 4, 197_281],
  [1, POSITION_1, 5, 4_865_609],
  [2, POSITION_2, 1, 48],
  [2, POSITION_2, 2, 2_039],
  [2, POSITION_2, 3, 97_862],
  [2, POSITION_2, 4, 4_085_603],
  [3, POSITION_3, 1, 14],
  [3, POSITION_3, 2, 191],
  [3, POSITION_3, 3, 2_812],
  [3, POSITION_3, 4, 43_238],
  [3, POSITION_3, 5, 674_624],
  [4, POSITION_4, 1, 6],
  [4, POSITION_4, 2, 264],
  [4, POSITION_4, 3, 9_467],
  [4, POSITION_4, 4, 422_333],
  [5, POSITION_5, 1, 44],
  [5, POSITION_5, 2, 1_486],
  [5, POSITION_5, 3, 62_379],
  [5, POSITION_5, 4, 2_103_487],
  [6, POSITION_6, 1, 46],
  [6, POSITION_6, 2, 2_079],
  [6, POSITION_6, 3, 89_890],
  [6, POSITION_6, 4, 3_894_594],
] as const;

/**
 * Count the number of nodes in the search tree to a given depth.
 * https://www.chessprogramming.org/Perft
 */
function perft(fen: Fen0x88, depth: number): number {
  if (depth === 0) return 1;

  return getLegalMoves0x88(fen).reduce((count, move) => {
    return count + perft(movePiece0x88(fen, move), depth - 1);
  }, 0);
}

describe("getLegalMoves0x88", () => {
  describe.each(CASES)(
    "when evaluating position %p (%p) to a depth of %p",
    (_, fen, depth, expected) => {
      it("generates the correct number of moves", () => {
        expect(perft(parseFen(fen), depth)).toBe(expected);
      });
    },
  );
});
