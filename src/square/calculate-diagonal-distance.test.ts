import { calculateDiagonalDistance } from "./calculate-diagonal-distance";
import { describe, expect, it } from "bun:test";

describe("calculateDiagonalDistance", () => {
  it("returns the number of squares a rook would travel between two squares", () => {
    expect(calculateDiagonalDistance("c2", "g4")).toEqual(4);
    expect(calculateDiagonalDistance("g4", "c2")).toEqual(4);
    expect(calculateDiagonalDistance("c4", "g2")).toEqual(4);
    expect(calculateDiagonalDistance("g2", "c4")).toEqual(4);
  });
});
