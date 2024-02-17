import { getSquareFromIndices0x88 } from "./get-square-from-indices-0x88";
import { describe, it, expect } from "bun:test";

describe("getIndex0x88", () => {
  describe("when the rank index is 0 and the file index is 0", () => {
    it("returns 0", () => {
      expect(getSquareFromIndices0x88(0, 0)).toEqual(0);
    });
  });

  describe("when the square is on the first rank", () => {
    it("returns the file index", () => {
      expect(getSquareFromIndices0x88(0, 3)).toEqual(3);
    });
  });

  describe("when the square is not on the first rank", () => {
    it("returns the file index plus 16", () => {
      expect(getSquareFromIndices0x88(1, 3)).toEqual(19);
    });
  });
});
