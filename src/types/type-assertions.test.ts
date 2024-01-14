import { describe, expect, it } from "bun:test";
import { COLORS, FILES, PIECES, RANKS, SQUARES, SQUARE_COLORS } from "../constants";
import {
  assertColor,
  assertFile,
  assertPiece,
  assertRank,
  assertSquare,
  assertSquareColor,
  assertVector,
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
