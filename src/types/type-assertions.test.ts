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
import { BOARD_WIDTH_0x88, NO_PIECE_0x88, WHITE_0x88, NO_SQUARE_0x88 } from "../internal/constants";
import {
  assertBishop,
  assertBlackPiece,
  assertColor,
  assertFen0x88,
  assertFile,
  assertKing,
  assertKnight,
  assertMove,
  assertPawn,
  assertPiece,
  assertQueen,
  assertRank,
  assertRook,
  assertSide,
  assertSquare,
  assertVector,
  assertWhitePiece,
} from "./type-assertions";
import { Fen0x88 } from "./types";
import { describe, expect, it } from "bun:test";

describe("assertVector", () => {
  describe("when the value is not a vector", () => {
    it("throws an error", () => {
      expect(() => assertVector("banana")).toThrow("Expected 'banana' to have type Vector.");
    });
  });

  describe("when the value is a vector", () => {
    it("does not throw an error", () => {
      expect(() => assertVector([1, 2])).not.toThrow();
    });
  });
});

describe("assertColor", () => {
  describe("when the value is not a color", () => {
    it("throws an error", () => {
      expect(() => assertColor("banana")).toThrow("Expected 'banana' to have type Color.");
    });
  });

  describe("when the value is a color", () => {
    it("does not throw an error", () => {
      for (const color of COLORS) {
        expect(() => assertColor(color)).not.toThrow();
      }
    });
  });
});

describe("assertFile", () => {
  describe("when the value is not a file", () => {
    it("throws an error", () => {
      expect(() => assertFile("banana")).toThrow("Expected 'banana' to have type File.");
    });
  });

  describe("when the value is a file", () => {
    it("does not throw an error", () => {
      for (const file of FILES) {
        expect(() => assertFile(file)).not.toThrow();
      }
    });
  });
});

describe("assertRank", () => {
  describe("when the value is not a rank", () => {
    it("throws an error", () => {
      expect(() => assertRank("banana")).toThrow("Expected 'banana' to have type Rank.");
    });
  });

  describe("when the value is a rank", () => {
    it("does not throw an error", () => {
      for (const rank of RANKS) {
        expect(() => assertRank(rank)).not.toThrow();
      }
    });
  });
});

describe("assertSquare", () => {
  describe("when the value is not a square", () => {
    it("throws an error", () => {
      expect(() => assertSquare("banana")).toThrow("Expected 'banana' to have type Square.");
    });
  });

  describe("when the value is a square", () => {
    it("does not throw an error", () => {
      for (const square of SQUARES) {
        expect(() => assertSquare(square)).not.toThrow();
      }
    });
  });
});

describe("assertPiece", () => {
  describe("when the value is not a piece", () => {
    it("throws an error", () => {
      expect(() => assertPiece("banana")).toThrow("Expected 'banana' to have type Piece.");
    });
  });

  describe("when the value is a piece", () => {
    it("does not throw an error", () => {
      for (const piece of PIECES) {
        expect(() => assertPiece(piece)).not.toThrow();
      }
    });
  });
});

describe("assertPawn", () => {
  describe("when the value is not a pawn", () => {
    it("throws an error", () => {
      expect(() => assertPawn(WHITE_KNIGHT)).toThrow(
        `Expected '${WHITE_KNIGHT}' to have type "${WHITE_PAWN}" or "${BLACK_PAWN}".`,
      );
    });
  });

  describe("when the value is a piece", () => {
    it("does not throw an error", () => {
      expect(() => assertPawn(WHITE_PAWN)).not.toThrow();
      expect(() => assertPawn(BLACK_PAWN)).not.toThrow();
    });
  });
});

describe("assertKnight", () => {
  describe("when the value is not a knight", () => {
    it("throws an error", () => {
      expect(() => assertKnight(WHITE_PAWN)).toThrow(
        `Expected '${WHITE_PAWN}' to have type "${WHITE_KNIGHT}" or "${BLACK_KNIGHT}".`,
      );
    });
  });

  describe("when the value is a piece", () => {
    it("does not throw an error", () => {
      expect(() => assertKnight(WHITE_KNIGHT)).not.toThrow();
      expect(() => assertKnight(BLACK_KNIGHT)).not.toThrow();
    });
  });
});

describe("assertBishop", () => {
  describe("when the value is not a bishop", () => {
    it("throws an error", () => {
      expect(() => assertBishop(WHITE_PAWN)).toThrow(
        `Expected '${WHITE_PAWN}' to have type "${WHITE_BISHOP}" or "${BLACK_BISHOP}".`,
      );
    });
  });

  describe("when the value is a piece", () => {
    it("does not throw an error", () => {
      expect(() => assertBishop(WHITE_BISHOP)).not.toThrow();
      expect(() => assertBishop(BLACK_BISHOP)).not.toThrow();
    });
  });
});

describe("assertRook", () => {
  describe("when the value is not a rook", () => {
    it("throws an error", () => {
      expect(() => assertRook(WHITE_PAWN)).toThrow(
        `Expected '${WHITE_PAWN}' to have type "${WHITE_ROOK}" or "${BLACK_ROOK}".`,
      );
    });
  });

  describe("when the value is a piece", () => {
    it("does not throw an error", () => {
      expect(() => assertRook(WHITE_ROOK)).not.toThrow();
      expect(() => assertRook(BLACK_ROOK)).not.toThrow();
    });
  });
});

describe("assertQueen", () => {
  describe("when the value is not a queen", () => {
    it("throws an error", () => {
      expect(() => assertQueen(WHITE_PAWN)).toThrow(
        `Expected '${WHITE_PAWN}' to have type "${WHITE_QUEEN}" or "${BLACK_QUEEN}".`,
      );
    });
  });

  describe("when the value is a piece", () => {
    it("does not throw an error", () => {
      expect(() => assertQueen(WHITE_QUEEN)).not.toThrow();
      expect(() => assertQueen(BLACK_QUEEN)).not.toThrow();
    });
  });
});

describe("assertKing", () => {
  describe("when the value is not a king", () => {
    it("throws an error", () => {
      expect(() => assertKing(WHITE_PAWN)).toThrow(
        `Expected '${WHITE_PAWN}' to have type "${WHITE_KING}" or "${BLACK_KING}".`,
      );
    });
  });

  describe("when the value is a piece", () => {
    it("does not throw an error", () => {
      expect(() => assertKing(WHITE_KING)).not.toThrow();
      expect(() => assertKing(BLACK_KING)).not.toThrow();
    });
  });
});

describe("assertWhitePiece", () => {
  describe("when the value is not a white piece", () => {
    it("throws an error", () => {
      for (const piece of BLACK_PIECES) {
        expect(() => assertWhitePiece(piece)).toThrow(
          `Expected '${piece}' to have type "${WHITE_PAWN}", "${WHITE_KNIGHT}", ` +
            `"${WHITE_BISHOP}", "${WHITE_ROOK}", "${WHITE_QUEEN}", or "${WHITE_KING}".`,
        );
      }
    });
  });

  describe("when the value is a white piece", () => {
    it("does not throw an error", () => {
      for (const piece of WHITE_PIECES) {
        expect(() => assertWhitePiece(piece)).not.toThrow();
      }
    });
  });
});

describe("assertBlackPiece", () => {
  describe("when the value is not a black piece", () => {
    it("throws an error", () => {
      for (const piece of WHITE_PIECES) {
        expect(() => assertBlackPiece(piece)).toThrow(
          `Expected '${piece}' to have type "${BLACK_PAWN}", "${BLACK_KNIGHT}", ` +
            `"${BLACK_BISHOP}", "${BLACK_ROOK}", "${BLACK_QUEEN}", or "${BLACK_KING}".`,
        );
      }
    });
  });

  describe("when the value is a black piece", () => {
    it("does not throw an error", () => {
      for (const piece of BLACK_PIECES) {
        expect(() => assertBlackPiece(piece)).not.toThrow();
      }
    });
  });
});

describe("assertSide", () => {
  describe("when the value is not a side", () => {
    it("throws an error", () => {
      expect(() => assertSide("banana")).toThrow("Expected 'banana' to have type Side.");
    });
  });

  describe("when the value is a side", () => {
    it("does not throw an error", () => {
      for (const side of SIDES) {
        expect(() => assertSide(side)).not.toThrow();
      }
    });
  });
});

describe("assertMove", () => {
  describe("when the value is not a move", () => {
    it("throws an error", () => {
      expect(() => assertMove("banana")).toThrow("Expected 'banana' to have type Move.");
    });
  });

  describe("when the value is a move", () => {
    it("does not throw an error", () => {
      const move = {
        piece: WHITE_KNIGHT,
        from: "g1",
        to: "f3",
        capture: null,
        promotion: null,
        algebraic: "Nf3",
      };

      expect(() => assertMove(move)).not.toThrow();
    });
  });
});

describe("assertFen0x88", () => {
  describe("when the value is not a fen0x88", () => {
    it("throws an error", () => {
      expect(() => assertFen0x88("banana")).toThrow("Expected 'banana' to have type Fen0x88.");
    });
  });

  describe("when the value is a fen0x88", () => {
    it("does not throw an error", () => {
      const board = Array.from(
        { length: BOARD_WIDTH_0x88 * BOARD_SIZE },
        () => NO_PIECE_0x88,
      ) as Fen0x88[0];

      const fen = [board, WHITE_0x88, 0, NO_SQUARE_0x88, 0, 1];

      expect(() => assertFen0x88(fen)).not.toThrow();
    });
  });
});
