import { describe, expect, it } from "bun:test";
import { getSquareFile } from "./get-square-file";

describe("getSquareFile", () => {
  it("returns the file of the square", () => {
    expect(getSquareFile("a1")).toBe("a");
    expect(getSquareFile("b2")).toBe("b");
    expect(getSquareFile("c3")).toBe("c");
    expect(getSquareFile("d4")).toBe("d");
    expect(getSquareFile("e5")).toBe("e");
    expect(getSquareFile("f6")).toBe("f");
    expect(getSquareFile("g7")).toBe("g");
    expect(getSquareFile("h8")).toBe("h");
  });
});
