import { Piece, Square } from "../../src";
import { PIECE_0x88_TO_PIECE, SQUARE_0x88_TO_SQUARE } from "../../src/internal/constants";
import {
  CAPTURE_FLAG_0x88,
  CASTLE_FLAG_0x88,
  DOUBLE_PAWN_FLAG_0x88,
  EN_PASSANT_FLAG_0x88,
} from "../../src/internal/constants/moves";
import { decodeMove0x88 } from "../../src/internal/decode-move-0x88";
import { Move0x88 } from "../../src/internal/types";
import { CustomMatcher } from "bun:test";

type HumanizedMove = {
  from: Square;
  to: Square;
  promotion: Piece | null;
  capture: boolean;
  doublePawn: boolean;
  enPassant: boolean;
  castle: boolean;
};

function compareNumbers(a: number, b: number): number {
  return a - b;
}

function humanizeMove(move: Move0x88): HumanizedMove {
  const [from, to, promotion, flags] = decodeMove0x88(move);

  return {
    from: SQUARE_0x88_TO_SQUARE[from]!,
    to: SQUARE_0x88_TO_SQUARE[to]!,
    promotion: PIECE_0x88_TO_PIECE[promotion] ?? null,
    capture: !!(flags & CAPTURE_FLAG_0x88),
    doublePawn: !!(flags & DOUBLE_PAWN_FLAG_0x88),
    enPassant: !!(flags & EN_PASSANT_FLAG_0x88),
    castle: !!(flags & CASTLE_FLAG_0x88),
  };
}

export const toMatchMoves: CustomMatcher<unknown, [Move0x88[]]> = function (received, expected) {
  if (!Array.isArray(received) || received.some((move) => !Number.isInteger(move))) {
    return {
      message: `Expected ${received} to be an array of integers`,
      pass: false,
    };
  }

  const humanizedReceived = (received as Move0x88[]).toSorted(compareNumbers).map(humanizeMove);
  const humanizedExpected = expected.toSorted(compareNumbers).map(humanizeMove);

  return {
    message: this.utils.matcherHint("toMatchMoves", humanizedReceived, humanizedExpected),
    pass: this.equals(humanizedReceived, humanizedExpected),
  };
};
