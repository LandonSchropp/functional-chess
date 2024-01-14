import { describe, expect, it } from "bun:test";
import {
  BLACK_BISHOP,
  BLACK_KING,
  BLACK_KNIGHT,
  BLACK_PAWN,
  BLACK_PIECES,
  BLACK_QUEEN,
  BLACK_ROOK,
  COLORS,
  FILES,
  PIECES,
  RANKS,
  SQUARES,
  SQUARE_COLORS,
  WHITE_BISHOP,
  WHITE_KING,
  WHITE_KNIGHT,
  WHITE_PAWN,
  WHITE_PIECES,
  WHITE_QUEEN,
  WHITE_ROOK,
} from "../constants";
import {
  assertBishop,
  assertBlackPiece,
  assertColor,
  assertFile,
  assertKing,
  assertKnight,
  assertPawn,
  assertPiece,
  assertQueen,
  assertRank,
  assertRook,
  assertSquare,
  assertSquareColor,
  assertVector,
  assertWhitePiece,
} from "./type-assertions";

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

describe("assertSquareColor", () => {
  describe("when the value is not a squareColor", () => {
    it("throws an error", () => {
      expect(() => assertSquareColor("banana")).toThrow(
        "Expected 'banana' to have type SquareColor.",
      );
    });
  });

  describe("when the value is a squareColor", () => {
    it("does not throw an error", () => {
      for (const squareColor of SQUARE_COLORS) {
        expect(() => assertSquareColor(squareColor)).not.toThrow();
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
        `Expected \'${WHITE_KNIGHT}\' to have type "${WHITE_PAWN}" or "${BLACK_PAWN}".`,
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
        `Expected \'${WHITE_PAWN}\' to have type "${WHITE_KNIGHT}" or "${BLACK_KNIGHT}".`,
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
        `Expected \'${WHITE_PAWN}\' to have type "${WHITE_BISHOP}" or "${BLACK_BISHOP}".`,
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
        `Expected \'${WHITE_PAWN}\' to have type "${WHITE_ROOK}" or "${BLACK_ROOK}".`,
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
        `Expected \'${WHITE_PAWN}\' to have type "${WHITE_QUEEN}" or "${BLACK_QUEEN}".`,
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
        `Expected \'${WHITE_PAWN}\' to have type "${WHITE_KING}" or "${BLACK_KING}".`,
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
          `Expected \'${piece}\' to have type "${WHITE_PAWN}", "${WHITE_KNIGHT}", ` +
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
          `Expected \'${piece}\' to have type "${BLACK_PAWN}", "${BLACK_KNIGHT}", ` +
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
