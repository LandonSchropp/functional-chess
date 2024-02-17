/** The square in an operation was outside the bounds of a chessboard. */
export class OutOfBoundsError extends Error {
  constructor(message?: string | undefined) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * The FEN string could not be parsed. This is different from an invalid FEN string, which has an
 * illegal position.
 */
export class UnparsableFenError extends Error {
  constructor(message?: string | undefined) {
    super(message);
    this.name = this.constructor.name;
  }
}
