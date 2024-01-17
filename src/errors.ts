/**
 * This error indicates that the square in an operation was outside the bounds of a chessboard.
 */
export class OutOfBoundsError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
  }
}
