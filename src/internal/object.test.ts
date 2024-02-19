import { invertToArray } from "./object";
import { describe, it, expect } from "bun:test";

describe("invertToArray", () => {
  describe("when the object is empty", () => {
    it("returns an empty array", () => {
      expect(invertToArray({})).toEqual([]);
    });
  });

  describe("when the object's values are sequential", () => {
    it("returns an array of keys in order", () => {
      expect(invertToArray({ a: 0, b: 1, c: 2 })).toEqual(["a", "b", "c"]);
    });
  });

  describe("when the object's values are not sequential", () => {
    it("returns an array of keys in order of their values", () => {
      expect(invertToArray({ a: 0, b: 2, c: 1 })).toEqual(["a", "c", "b"]);
    });
  });

  describe("when the object's values are not integers", () => {
    it("raises an error", () => {
      expect(() => invertToArray({ a: 0, b: 1.5, c: 2 })).toThrow(TypeError);
    });
  });

  describe("when the object's values do not start at 0", () => {
    it("inserts undefined before the start", () => {
      expect(invertToArray({ a: 1, b: 2, c: 3 })).toEqual([undefined, "a", "b", "c"]);
    });
  });

  describe("when the object's values have gaps", () => {
    it("returns an array with undefined filling the gaps", () => {
      expect(invertToArray({ a: 0, b: 1, c: 3 })).toEqual(["a", "b", undefined, "c"]);
    });
  });

  describe("when any of the object's values are negative", () => {
    it("raises an error", () => {
      expect(() => invertToArray({ a: 0, b: -1, c: 1 })).toThrow(TypeError);
    });
  });

  describe("when the object's values contains duplicates", () => {
    it("raises an error", () => {
      expect(() => invertToArray({ a: 0, b: 1, c: 1 })).toThrow(TypeError);
    });
  });
});
