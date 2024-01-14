import { describe, expect, it } from "bun:test";
import { convertSquareToCoordinates } from "./convert-square-to-coordinates";

describe("convertSquareToCoordinates", () => {
  it("returns the coordinates of the square", () => {
    expect(convertSquareToCoordinates("a8")).toEqual([0, 7]);
    expect(convertSquareToCoordinates("b7")).toEqual([1, 6]);
    expect(convertSquareToCoordinates("c6")).toEqual([2, 5]);
    expect(convertSquareToCoordinates("d5")).toEqual([3, 4]);
    expect(convertSquareToCoordinates("e4")).toEqual([4, 3]);
    expect(convertSquareToCoordinates("f3")).toEqual([5, 2]);
    expect(convertSquareToCoordinates("g2")).toEqual([6, 1]);
    expect(convertSquareToCoordinates("h1")).toEqual([7, 0]);
  });
});
