import { describe, expect, it } from "bun:test";
import { translateSquare } from "./translate-square";

describe("translateSquare", () => {
  describe("when the translated square is out of bounds", () => {
    it("raises an error", () => {
      expect(() => translateSquare("b2", [-2, 0])).toThrow();
      expect(() => translateSquare("b2", [0, -2])).toThrow();
      expect(() => translateSquare("b2", [7, 0])).toThrow();
      expect(() => translateSquare("b2", [0, 7])).toThrow();
    });
  });

  describe("when the vector is [0, 0]", () => {
    it("returns the original square", () => {
      expect(translateSquare("b2", [0, 0])).toEqual("b2");
    });
  });

  describe("when the translated square is in bounds", () => {
    it("returns the translated square", () => {
      expect(translateSquare("b2", [-1, 0])).toEqual("a2");
      expect(translateSquare("b2", [6, 0])).toEqual("h2");
      expect(translateSquare("b2", [0, -1])).toEqual("b1");
      expect(translateSquare("b2", [0, 6])).toEqual("b8");
    });
  });
});
