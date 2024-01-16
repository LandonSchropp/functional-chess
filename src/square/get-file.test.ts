import { describe, expect, it } from "bun:test";
import { getFile } from "./get-file";

describe("getFile", () => {
  it("returns the file of the square", () => {
    expect(getFile("a1")).toBe("a");
    expect(getFile("b2")).toBe("b");
    expect(getFile("c3")).toBe("c");
    expect(getFile("d4")).toBe("d");
    expect(getFile("e5")).toBe("e");
    expect(getFile("f6")).toBe("f");
    expect(getFile("g7")).toBe("g");
    expect(getFile("h8")).toBe("h");
  });
});
