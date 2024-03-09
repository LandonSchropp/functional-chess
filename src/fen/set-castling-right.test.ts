import { STARTING_POSITION, EMPTY_POSITION, BLACK_KINGSIDE } from "../constants";
import { setCastlingRight } from "../fen/set-castling-right";
import { parseFen } from "./parse-fen";
import { expect, it, describe } from "bun:test";

describe("setCastlingRight", () => {
  describe("when the side can castle", () => {
    describe("when the can castle value is true", () => {
      it("does not change the FEN", () => {
        expect(setCastlingRight(STARTING_POSITION, BLACK_KINGSIDE, true)).toEqualFen(
          STARTING_POSITION,
        );
      });
    });

    describe("when the can castle value is false", () => {
      it("sets the castling right", () => {
        expect(setCastlingRight(STARTING_POSITION, BLACK_KINGSIDE, false)).toEqualFen(
          STARTING_POSITION.replace("KQkq", "KQq"),
        );
      });
    });
  });

  describe("when the side cannot castle", () => {
    describe("when the can castle value is true", () => {
      it("sets the castling right", () => {
        expect(
          setCastlingRight(STARTING_POSITION.replace("KQkq", "KQq"), BLACK_KINGSIDE, true),
        ).toEqualFen(STARTING_POSITION);
      });
    });

    describe("when the can castle value is false", () => {
      it("does not change the FEN", () => {
        expect(
          setCastlingRight(STARTING_POSITION.replace("KQkq", "KQq"), BLACK_KINGSIDE, false),
        ).toEqualFen(STARTING_POSITION.replace("KQkq", "KQq"));
      });
    });
  });

  describe("when only one side can castle", () => {
    describe("when the can castle value is true", () => {
      it("does not change the position", () => {
        expect(
          setCastlingRight(STARTING_POSITION.replace("KQkq", "k"), BLACK_KINGSIDE, true),
        ).toEqualFen(STARTING_POSITION.replace("KQkq", "k"));
      });
    });

    describe("when the can castle value is false", () => {
      it("sets the castling rights to none", () => {
        expect(
          setCastlingRight(STARTING_POSITION.replace("KQkq", "k"), BLACK_KINGSIDE, false),
        ).toEqualFen(STARTING_POSITION.replace("KQkq", "-"));
      });
    });
  });

  describe("when none of the sides can castle", () => {
    describe("when the can castle value is true", () => {
      it("sets the castling right", () => {
        expect(setCastlingRight(EMPTY_POSITION, BLACK_KINGSIDE, true)).toEqualFen(
          EMPTY_POSITION.replace("-", "k"),
        );
      });
    });

    describe("when the can castle value is false", () => {
      it("does not change the FEN", () => {
        expect(setCastlingRight(EMPTY_POSITION, BLACK_KINGSIDE, false)).toEqualFen(EMPTY_POSITION);
      });
    });
  });

  describe("when the FEN is a Fen0x88", () => {
    it("sets the castling right", () => {
      expect(setCastlingRight(parseFen(STARTING_POSITION), BLACK_KINGSIDE, false)).toEqualFen(
        parseFen(STARTING_POSITION.replace("KQkq", "KQq")),
      );
    });
  });
});
