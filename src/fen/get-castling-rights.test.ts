import {
  STARTING_POSITION,
  WHITE_KINGSIDE,
  WHITE_QUEENSIDE,
  EMPTY_POSITION,
  SIDES,
} from "../constants";
import { getCastlingRights } from "../fen/get-castling-rights";
import { Side } from "../types";
import { parseFen } from "./parse-fen";
import { expect, it, describe } from "bun:test";

describe("getCastlingRights", () => {
  describe("when all sides can castle", () => {
    it("all of the sides", () => {
      expect(getCastlingRights(STARTING_POSITION)).toEqual(SIDES as unknown as Side[]);
    });
  });

  describe("when none of the sides can castle", () => {
    it("an empty array", () => {
      expect(getCastlingRights(EMPTY_POSITION)).toEqual([]);
    });
  });

  describe("when some of the sides can castle", () => {
    it("returns the sides that can castle", () => {
      expect(getCastlingRights(STARTING_POSITION.replace("kq", ""))).toEqual([
        WHITE_KINGSIDE,
        WHITE_QUEENSIDE,
      ]);
    });
  });

  describe("when the fen is a Fen0x88", () => {
    it("sets the castling rights", () => {
      expect(getCastlingRights(parseFen(STARTING_POSITION))).toEqual(SIDES as unknown as Side[]);
    });
  });
});
