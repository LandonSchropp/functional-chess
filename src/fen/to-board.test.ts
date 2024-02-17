import {
  BLACK_BISHOP,
  BLACK_KING,
  BLACK_KNIGHT,
  BLACK_PAWN,
  BLACK_QUEEN,
  BLACK_ROOK,
  EMPTY_POSITION,
  STARTING_POSITION,
  WHITE_BISHOP,
  WHITE_KING,
  WHITE_KNIGHT,
  WHITE_PAWN,
  WHITE_QUEEN,
  WHITE_ROOK,
} from "../constants";
import { Board } from "../types";
import { parseFen } from "./parse-fen";
import { toBoard } from "./to-board";
import { describe, expect, it } from "bun:test";

const EMPTY_BOARD: Board = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];

const STARTING_BOARD: Board = [
  [
    WHITE_ROOK,
    WHITE_KNIGHT,
    WHITE_BISHOP,
    WHITE_QUEEN,
    WHITE_KING,
    WHITE_BISHOP,
    WHITE_KNIGHT,
    WHITE_ROOK,
  ],
  [WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN],
  [
    BLACK_ROOK,
    BLACK_KNIGHT,
    BLACK_BISHOP,
    BLACK_QUEEN,
    BLACK_KING,
    BLACK_BISHOP,
    BLACK_KNIGHT,
    BLACK_ROOK,
  ],
];

describe("toBoardFromFen", () => {
  describe("when the board is empty", () => {
    it("returns an empty 2D array", () => {
      expect(toBoard(EMPTY_POSITION)).toEqual(EMPTY_BOARD);
    });
  });

  describe("when the board is not empty", () => {
    it("returns a 2D array reprsenting the position", () => {
      expect(toBoard(STARTING_POSITION)).toEqual(STARTING_BOARD);
    });
  });

  describe("when the fen is a Fen0x88", () => {
    it("returns a 2D array reprsenting the position", () => {
      expect(toBoard(parseFen(STARTING_POSITION))).toEqual(STARTING_BOARD);
    });
  });
});
