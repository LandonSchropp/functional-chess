import { describe, expect, it } from "bun:test";
import { COLORS, FILES, PIECES, RANKS, SQUARES, SQUARE_COLORS } from "../constants";
import { isColor, isFile, isPiece, isRank, isSquare, isSquareColor, isVector } from "./type-guards";

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
    it("returns false", () => {
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
    it("returns false", () => {
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
    it("returns false", () => {
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
    it("returns false", () => {
      for (const rank of RANKS) {
        expect(isRank(rank)).toBe(true);
      }
    });
  });
});

describe("isSquareColor", () => {
  describe("when the value is not a string", () => {
    it("returns false", () => {
      expect(isSquareColor(1234)).toBe(false);
    });
  });

  describe("when the value is not a squareColor", () => {
    it("returns false", () => {
      expect(isSquareColor("banana")).toBe(false);
    });
  });

  describe("when the value is a squareColor", () => {
    it("returns false", () => {
      for (const squareColor of SQUARE_COLORS) {
        expect(isSquareColor(squareColor)).toBe(true);
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
    it("returns false", () => {
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
    it("returns false", () => {
      for (const piece of PIECES) {
        expect(isPiece(piece)).toBe(true);
      }
    });
  });
});
