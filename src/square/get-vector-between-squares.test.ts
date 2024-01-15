import { describe, expect, it } from "bun:test";
import { getVectorBetweenSquares } from "./get-vector-between-squares";

describe("getVectorBetweenSquares", () => {
  it("returns the vector between the two squares", () => {
    expect(getVectorBetweenSquares("c2", "g4")).toEqual([4, 2]);
    expect(getVectorBetweenSquares("g4", "c2")).toEqual([-4, -2]);
    expect(getVectorBetweenSquares("c4", "g2")).toEqual([4, -2]);
    expect(getVectorBetweenSquares("g2", "c4")).toEqual([-4, 2]);
  });
});
