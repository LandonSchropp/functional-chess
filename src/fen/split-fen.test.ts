import { describe, expect, it } from "bun:test";
import { STARTING_POSITION } from "../constants";
import { splitFen } from "./split-fen";

describe("splitFen", () => {
  it("splits a FEN into its parts", () => {
    expect(splitFen(STARTING_POSITION)).toEqual([
      "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
      "w",
      "KQkq",
      "-",
      "0",
      "1",
    ]);
  });
});
