import { describe, expect, it } from "bun:test";
import { STARTING_POSITION } from "../constants";
import { joinFen } from "./join-fen";

describe("joinFen", () => {
  it("splits a FEN into its parts", () => {
    expect(
      joinFen(["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", "w", "KQkq", "-", "0", "1"]),
    ).toEqual(STARTING_POSITION);
  });
});
