import { calculateTranslation } from "./calculate-translation";
import { describe, expect, it } from "bun:test";

describe("calculateTranslation", () => {
  it("returns the translation vector between the two squares", () => {
    expect(calculateTranslation("c2", "g4")).toEqual([4, 2]);
    expect(calculateTranslation("g4", "c2")).toEqual([-4, -2]);
    expect(calculateTranslation("c4", "g2")).toEqual([4, -2]);
    expect(calculateTranslation("g2", "c4")).toEqual([-4, 2]);
  });
});
