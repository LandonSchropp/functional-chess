import { getRank } from "./get-rank";
import { describe, expect, it } from "bun:test";

describe("getRank", () => {
  it("returns the rank of the square", () => {
    expect(getRank("a1")).toBe("1");
    expect(getRank("b2")).toBe("2");
    expect(getRank("c3")).toBe("3");
    expect(getRank("d4")).toBe("4");
    expect(getRank("e5")).toBe("5");
    expect(getRank("f6")).toBe("6");
    expect(getRank("g7")).toBe("7");
    expect(getRank("h8")).toBe("8");
  });
});
