import { describe, expect, it } from "bun:test";
import { distanceWithoutDiagonals } from "./distance-without-diagonals";

describe("distanceWithoutDiagonals", () => {
  it("returns the number of squares a rook would travel between two squares", () => {
    expect(distanceWithoutDiagonals("c2", "g4")).toEqual(6);
    expect(distanceWithoutDiagonals("g4", "c2")).toEqual(6);
    expect(distanceWithoutDiagonals("c4", "g2")).toEqual(6);
    expect(distanceWithoutDiagonals("g2", "c4")).toEqual(6);
  });
});
