import { invert } from "./readonly-map";
import { describe, expect, it } from "bun:test";

describe("invert", () => {
  describe("when the object is empty", () => {
    it("returns an empty map", () => {
      expect(invert({} as Record<string, string>)).toEqual(new Map());
    });
  });

  describe("when the object has string values", () => {
    it("returns a map with the keys and values inverted", () => {
      const object = { a: "1", b: "2", c: "3" } as const;

      const expected = new Map([
        ["1", "a"],
        ["2", "b"],
        ["3", "c"],
      ] as const);

      expect(invert(object)).toEqual(expected);
    });
  });

  describe("when the object has number values", () => {
    it("returns a map with the keys and values inverted", () => {
      const object = { a: 1, b: 2, c: 3 } as const;

      const expected = new Map([
        [1, "a"],
        [2, "b"],
        [3, "c"],
      ] as const);

      expect(invert(object)).toEqual(expected);
    });
  });
});
