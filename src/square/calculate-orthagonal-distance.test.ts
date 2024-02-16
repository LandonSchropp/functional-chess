import { calculateOrthagonalDistance } from "./calculate-orthagonal-distance";
import { describe, expect, it } from "bun:test";

describe("calculateOrthagonalDistance", () => {
  it("returns the number of squares a rook would travel between two squares", () => {
    expect(calculateOrthagonalDistance("c2", "g4")).toEqual(6);
    expect(calculateOrthagonalDistance("g4", "c2")).toEqual(6);
    expect(calculateOrthagonalDistance("c4", "g2")).toEqual(6);
    expect(calculateOrthagonalDistance("g2", "c4")).toEqual(6);
  });
});
