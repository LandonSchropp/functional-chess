import { describe, expect, it } from "bun:test";
import { getSquareRank } from "./get-square-rank";

describe("getSquareRank", () => {
  it("returns the file of the square", () => {
    expect(getSquareRank("a1")).toBe("1");
    expect(getSquareRank("b2")).toBe("2");
    expect(getSquareRank("c3")).toBe("3");
    expect(getSquareRank("d4")).toBe("4");
    expect(getSquareRank("e5")).toBe("5");
    expect(getSquareRank("f6")).toBe("6");
    expect(getSquareRank("g7")).toBe("7");
    expect(getSquareRank("h8")).toBe("8");
  });
});
