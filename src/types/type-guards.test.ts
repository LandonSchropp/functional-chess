import {
  BLACK_BISHOP,
  BLACK_KING,
  BLACK_KNIGHT,
  BLACK_PAWN,
  BLACK_PIECES,
  BLACK_QUEEN,
  BLACK_ROOK,
  BOARD_SIZE,
  COLORS,
  FILES,
  PIECES,
  RANKS,
  SIDES,
  SQUARES,
  WHITE_BISHOP,
  WHITE_KING,
  WHITE_KNIGHT,
  WHITE_PAWN,
  WHITE_PIECES,
  WHITE_QUEEN,
  WHITE_ROOK,
} from "../constants";
import {
  BLACK_0x88,
  BOARD_WIDTH_0x88,
  NO_PIECE_0x88,
  NO_SQUARE_0x88,
  SIDES_0x88,
  WHITE_0x88,
  WHITE_PAWN_0x88,
} from "../internal/constants";
import {
  isBishop,
  isColor,
  isFen0x88,
  isFile,
  isKing,
  isKnight,
  isMove,
  isPawn,
  isPiece,
  isQueen,
  isRank,
  isRook,
  isSide,
  isSquare,
  isVector,
  isWhitePiece,
} from "./type-guards";
import { Fen0x88 } from "./types";
import { beforeEach, describe, expect, it } from "bun:test";

describe("isVector", () => {
  describe("when the value is not an array", () => {
    it("returns false", () => {
      expect(isVector({ x: 1, y: 2 })).toBe(false);
    });
  });

  describe("when the value is an empty array", () => {
    it("returns false", () => {
      expect(isVector([])).toBe(false);
    });
  });

  describe("when the value is an array with one number", () => {
    it("returns false", () => {
      expect(isVector([1])).toBe(false);
    });
  });

  describe("when the value is an array with more than two numbers", () => {
    it("returns false", () => {
      expect(isVector([1, 2, 3])).toBe(false);
    });
  });

  describe("when the first item in the array is not a number", () => {
    it("returns false", () => {
      expect(isVector(["1", 2])).toBe(false);
    });
  });

  describe("when the second item in the array is not a number", () => {
    it("returns false", () => {
      expect(isVector([1, "2"])).toBe(false);
    });
  });

  describe("when the value is an array with two numbers", () => {
    it("returns true", () => {
      expect(isVector([1, 2])).toBe(true);
    });
  });
});

describe("isColor", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isColor(1234)).toBe(false);
    });
  });

  describe("when the value is not a color", () => {
    it("returns false", () => {
      expect(isColor("banana")).toBe(false);
    });
  });

  describe("when the value is a color", () => {
    it("returns true", () => {
      for (const color of COLORS) {
        expect(isColor(color)).toBe(true);
      }
    });
  });
});

describe("isFile", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isFile(1234)).toBe(false);
    });
  });

  describe("when the value is not a file", () => {
    it("returns false", () => {
      expect(isFile("banana")).toBe(false);
    });
  });

  describe("when the value is a file", () => {
    it("returns true", () => {
      for (const file of FILES) {
        expect(isFile(file)).toBe(true);
      }
    });
  });
});

describe("isRank", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isRank(1234)).toBe(false);
    });
  });

  describe("when the value is not a rank", () => {
    it("returns false", () => {
      expect(isRank("banana")).toBe(false);
    });
  });

  describe("when the value is a rank", () => {
    it("returns true", () => {
      for (const rank of RANKS) {
        expect(isRank(rank)).toBe(true);
      }
    });
  });
});

describe("isSquare", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isSquare(1234)).toBe(false);
    });
  });

  describe("when the value is not a square", () => {
    it("returns false", () => {
      expect(isSquare("banana")).toBe(false);
    });
  });

  describe("when the value is a square", () => {
    it("returns true", () => {
      for (const square of SQUARES) {
        expect(isSquare(square)).toBe(true);
      }
    });
  });
});

describe("isPiece", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isPiece(1234)).toBe(false);
    });
  });

  describe("when the value is not a piece", () => {
    it("returns false", () => {
      expect(isPiece("banana")).toBe(false);
    });
  });

  describe("when the value is a piece", () => {
    it("returns true", () => {
      for (const piece of PIECES) {
        expect(isPiece(piece)).toBe(true);
      }
    });
  });
});

describe("isPawn", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isPawn(1234)).toBe(false);
    });
  });

  describe("when the value is not a pawn", () => {
    it("returns false", () => {
      expect(isPawn(WHITE_KNIGHT)).toBe(false);
    });
  });

  describe("when the value is a pawn", () => {
    it("returns true", () => {
      expect(isPawn(WHITE_PAWN)).toBe(true);
      expect(isPawn(BLACK_PAWN)).toBe(true);
    });
  });
});

describe("isKnight", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isKnight(1234)).toBe(false);
    });
  });

  describe("when the value is not a knight", () => {
    it("returns false", () => {
      expect(isKnight(WHITE_PAWN)).toBe(false);
    });
  });

  describe("when the value is a knight", () => {
    it("returns true", () => {
      expect(isKnight(WHITE_KNIGHT)).toBe(true);
      expect(isKnight(BLACK_KNIGHT)).toBe(true);
    });
  });
});

describe("isBishop", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isBishop(1234)).toBe(false);
    });
  });

  describe("when the value is not a bishop", () => {
    it("returns false", () => {
      expect(isBishop(WHITE_PAWN)).toBe(false);
    });
  });

  describe("when the value is a bishop", () => {
    it("returns true", () => {
      expect(isBishop(WHITE_BISHOP)).toBe(true);
      expect(isBishop(BLACK_BISHOP)).toBe(true);
    });
  });
});

describe("isRook", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isRook(1234)).toBe(false);
    });
  });

  describe("when the value is not a rook", () => {
    it("returns false", () => {
      expect(isRook(WHITE_PAWN)).toBe(false);
    });
  });

  describe("when the value is a rook", () => {
    it("returns true", () => {
      expect(isRook(WHITE_ROOK)).toBe(true);
      expect(isRook(BLACK_ROOK)).toBe(true);
    });
  });
});

describe("isQueen", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isQueen(1234)).toBe(false);
    });
  });

  describe("when the value is not a queen", () => {
    it("returns false", () => {
      expect(isQueen(WHITE_PAWN)).toBe(false);
    });
  });

  describe("when the value is a queen", () => {
    it("returns true", () => {
      expect(isQueen(WHITE_QUEEN)).toBe(true);
      expect(isQueen(BLACK_QUEEN)).toBe(true);
    });
  });
});

describe("isKing", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isKing(1234)).toBe(false);
    });
  });

  describe("when the value is not a king", () => {
    it("returns false", () => {
      expect(isKing(WHITE_PAWN)).toBe(false);
    });
  });

  describe("when the value is a king", () => {
    it("returns true", () => {
      expect(isKing(WHITE_KING)).toBe(true);
      expect(isKing(BLACK_KING)).toBe(true);
    });
  });
});

describe("isWhitePiece", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isWhitePiece(1234)).toBe(false);
    });
  });

  describe("when the value is not a white piece", () => {
    it("returns false", () => {
      for (const piece of BLACK_PIECES) {
        expect(isWhitePiece(piece)).toBe(false);
      }
    });
  });

  describe("when the value is a white piece", () => {
    it("returns true", () => {
      for (const piece of WHITE_PIECES) {
        expect(isWhitePiece(piece)).toBe(true);
      }
    });
  });
});

describe("isSide", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isSide(1234)).toBe(false);
    });
  });

  describe("when the value is not a side", () => {
    it("returns false", () => {
      expect(isSide("banana")).toBe(false);
    });
  });

  describe("when the value is a side", () => {
    it("returns true", () => {
      for (const side of SIDES) {
        expect(isSide(side)).toBe(true);
      }
    });
  });
});

describe("isMove", () => {
  let move: Record<string, unknown>;

  beforeEach(() => {
    move = {
      piece: WHITE_KNIGHT,
      from: "g1",
      to: "f3",
      capture: null,
      promotion: null,
      algebraic: "Nf3",
    };
  });

  describe("when the value is not an object", () => {
    it("returns false", () => {
      expect(isMove(1234)).toBe(false);
    });
  });

  describe("when the value is null", () => {
    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when the object does not contain a piece property", () => {
    // biome-ignore lint: lint/performance/noDelete
    beforeEach(() => delete move.piece);

    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when piece is not a Piece", () => {
    beforeEach(() => {
      move.piece = "banana";
    });

    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when the object does not contain a from property", () => {
    // biome-ignore lint: lint/performance/noDelete
    beforeEach(() => delete move.from);

    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when from is not a Square", () => {
    beforeEach(() => {
      move.from = "banana";
    });

    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when the object does not contain a to property", () => {
    // biome-ignore lint: lint/performance/noDelete
    beforeEach(() => delete move.to);

    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when to is not a Square", () => {
    beforeEach(() => {
      move.to = "banana";
    });

    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when the object does not contain a capture property", () => {
    // biome-ignore lint: lint/performance/noDelete
    beforeEach(() => delete move.capture);

    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when capture is not a Piece or null", () => {
    beforeEach(() => {
      move.capture = "banana";
    });

    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when the object does not contain a promotion property", () => {
    // biome-ignore lint: lint/performance/noDelete
    beforeEach(() => delete move.promotion);

    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when promotion is not a Piece or null", () => {
    beforeEach(() => {
      move.promotion = "banana";
    });

    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when the object does not contain a algebraic property", () => {
    // biome-ignore lint: lint/performance/noDelete
    beforeEach(() => delete move.algebraic);

    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when algebraic is not a string", () => {
    beforeEach(() => {
      move.algebraic = 1234;
    });

    it("returns false", () => {
      expect(isMove(null)).toBe(false);
    });
  });

  describe("when the object contains all required properties", () => {
    it("returns true", () => {
      expect(isMove(move)).toBe(true);
    });

    describe("when the capture is a Piece", () => {
      beforeEach(() => {
        move.capture = BLACK_PAWN;
      });

      it("returns true", () => {
        expect(isMove(move)).toBe(true);
      });
    });

    describe("when the promotion is a Piece", () => {
      beforeEach(() => {
        move.promotion = WHITE_KNIGHT;
      });

      it("returns true", () => {
        expect(isMove(move)).toBe(true);
      });
    });
  });
});

describe("isFen0x88", () => {
  let fen: Fen0x88;

  beforeEach(() => {
    const board = Array.from(
      { length: BOARD_WIDTH_0x88 * BOARD_SIZE },
      () => NO_PIECE_0x88,
    ) as Fen0x88[0];

    fen = [board, WHITE_0x88, 0, NO_SQUARE_0x88, 0, 1];
  });

  describe("when the value is null", () => {
    it("returns false", () => {
      expect(isFen0x88(null)).toBe(false);
    });
  });

  describe("when the value is not an array", () => {
    it("returns false", () => {
      expect(isFen0x88({})).toBe(false);
    });
  });

  describe("when the array does not contain six items", () => {
    it("returns false", () => {
      expect(isFen0x88(fen.slice(0, 5))).toBe(false);
      expect(isFen0x88([...fen, 0])).toBe(false);
    });
  });

  describe("when the first item in the array is not an array", () => {
    it("returns false", () => {
      expect(isFen0x88([{}, ...fen.slice(1)])).toBe(false);
    });
  });

  describe("when the first item in the array does not contain 128 items", () => {
    it("returns false", () => {
      expect(isFen0x88([fen[0].slice(0, 127), ...fen.slice(1)])).toBe(false);
      expect(isFen0x88([...[fen[0], NO_PIECE_0x88], ...fen.slice(1)])).toBe(false);
    });
  });

  describe("when the first item in the array contains invalid pieces", () => {
    it("returns false", () => {
      fen[0][0] = -1;
      expect(isFen0x88(fen)).toBe(false);
    });
  });

  describe("when the out-of-bounds squares contain pieces", () => {
    it("returns false", () => {
      fen[0][BOARD_SIZE] = WHITE_PAWN_0x88;
      expect(isFen0x88(fen)).toBe(false);
    });
  });

  describe("when the second item in the array is not a number", () => {
    it("returns false", () => {
      expect(isFen0x88([fen[0], "banana", ...fen.slice(2)])).toBe(false);
    });
  });

  describe("when the second item in the array is not a color", () => {
    it("returns false", () => {
      expect(isFen0x88([fen[0], -1, ...fen.slice(2)])).toBe(false);
    });
  });

  describe("when the second item is white", () => {
    it("returns true", () => {
      expect(isFen0x88([fen[0], WHITE_0x88, ...fen.slice(2)])).toBe(true);
    });
  });

  describe("when the second item is black", () => {
    it("returns true", () => {
      expect(isFen0x88([fen[0], BLACK_0x88, ...fen.slice(2)])).toBe(true);
    });
  });

  describe("when the third item in the array is not a number", () => {
    it("returns false", () => {
      expect(isFen0x88([...fen.slice(0, 2), "banana", ...fen.slice(3)])).toBe(false);
    });
  });

  describe("when the third item contains an invalid side bit", () => {
    it("returns false", () => {
      expect(isFen0x88([...fen.slice(0, 2), 0xff, ...fen.slice(3)])).toBe(false);
    });
  });

  describe("when the third item contains no side bits", () => {
    it("returns true", () => {
      expect(isFen0x88([...fen.slice(0, 2), 0, ...fen.slice(3)])).toBe(true);
    });
  });

  describe("when the third item contains all side bits", () => {
    it("returns true", () => {
      expect(
        isFen0x88([
          ...fen.slice(0, 2),
          SIDES_0x88.reduce((sides, side) => sides | side, 0),
          ...fen.slice(3),
        ]),
      ).toBe(true);
    });
  });

  describe("when the fourth item in the array is not a number", () => {
    it("returns false", () => {
      expect(isFen0x88([...fen.slice(0, 3), "banana", ...fen.slice(4)])).toBe(false);
    });
  });

  describe("when the fourth item contains an invalid square", () => {
    it("returns false", () => {
      expect(isFen0x88([...fen.slice(0, 3), -1, ...fen.slice(4)])).toBe(false);
    });
  });

  describe("when the fourth item contains a valid square", () => {
    it("returns true", () => {
      expect(isFen0x88([...fen.slice(0, 3), 0, ...fen.slice(4)])).toBe(true);
    });
  });

  describe("whent he fourth item contains NO_SQUARE_0x88", () => {
    it("returns true", () => {
      expect(isFen0x88([...fen.slice(0, 3), NO_SQUARE_0x88, ...fen.slice(4)])).toBe(true);
    });
  });

  describe("when the fifth item in the array is not a number", () => {
    it("returns false", () => {
      expect(isFen0x88([...fen.slice(0, 4), "banana", ...fen.slice(5)])).toBe(false);
    });
  });

  describe("when the fifth item is not an integer", () => {
    it("returns false", () => {
      expect(isFen0x88([...fen.slice(0, 4), 0.5, ...fen.slice(5)])).toBe(false);
    });
  });

  describe("when the fifth item is less than 0", () => {
    it("returns false", () => {
      expect(isFen0x88([...fen.slice(0, 4), -1, ...fen.slice(5)])).toBe(false);
    });
  });

  describe("when the fifth item is 0", () => {
    it("returns true", () => {
      expect(isFen0x88([...fen.slice(0, 4), 0, ...fen.slice(5)])).toBe(true);
    });
  });

  describe("when the fifth item is greater than 0", () => {
    it("returns true", () => {
      expect(isFen0x88([...fen.slice(0, 4), 1, ...fen.slice(5)])).toBe(true);
    });
  });

  describe("when the sixth item in the array is not a number", () => {
    it("returns false", () => {
      expect(isFen0x88([...fen.slice(0, 5), "banana"])).toBe(false);
    });
  });

  describe("when the sixth item is not an integer", () => {
    it("returns false", () => {
      expect(isFen0x88([...fen.slice(0, 5), 1.5])).toBe(false);
    });
  });

  describe("when the sixth item is less than 0", () => {
    it("returns false", () => {
      expect(isFen0x88([...fen.slice(0, 5), -1])).toBe(false);
    });
  });

  describe("when the sixth item is 0", () => {
    it("returns false", () => {
      expect(isFen0x88([...fen.slice(0, 5), 0])).toBe(false);
    });
  });

  describe("when the sixth item is greater 1", () => {
    it("returns true", () => {
      expect(isFen0x88([...fen.slice(0, 5), 1])).toBe(true);
    });
  });

  describe("when the sixth item is greater than 1", () => {
    it("returns true", () => {
      expect(isFen0x88([...fen.slice(0, 5), 2])).toBe(true);
    });
  });
});
