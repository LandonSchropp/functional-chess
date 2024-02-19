import {
  STARTING_POSITION,
  EMPTY_POSITION,
  SIDES,
  BLACK_KINGSIDE,
  BLACK_QUEENSIDE,
} from "../constants";
import { setCastlingRights } from "../fen/set-castling-rights";
import { Side } from "../types";
import { parseFen } from "./parse-fen";
import { expect, it, describe } from "bun:test";

describe("setCastlingRights", () => {
  describe("when all sides are provided", () => {
    it("sets the castling rights to all of the sides", () => {
      expect(setCastlingRights(EMPTY_POSITION, SIDES as unknown as Side[])).toEqual(
        EMPTY_POSITION.replace("-", "KQkq"),
      );
    });
  });

  describe("when an empty array is provided", () => {
    it("sets the castling rights to none", () => {
      expect(setCastlingRights(STARTING_POSITION, [])).toEqual(
        STARTING_POSITION.replace("KQkq", "-"),
      );
    });
  });

  describe("when some of the sides are provided", () => {
    it("sets the castling rights to the matching sides", () => {
      expect(setCastlingRights(EMPTY_POSITION, [BLACK_KINGSIDE, BLACK_QUEENSIDE])).toEqual(
        EMPTY_POSITION.replace("-", "kq"),
      );
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("sets the castling rights", () => {
      expect(setCastlingRights(parseFen(STARTING_POSITION), [])).toEqual(
        parseFen(STARTING_POSITION.replace("KQkq", "-")),
      );
    });
  });
});
