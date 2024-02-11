import { distanceWithDiagonals } from "./distance-with-diagonals";
import { describe, expect, it } from "bun:test";

describe("distanceWithDiagonals", () => {
  it("returns the number of squares a rook would travel between two squares", () => {
    expect(distanceWithDiagonals("c2", "g4")).toEqual(4);
    expect(distanceWithDiagonals("g4", "c2")).toEqual(4);
    expect(distanceWithDiagonals("c4", "g2")).toEqual(4);
    expect(distanceWithDiagonals("g2", "c4")).toEqual(4);
  });
});
