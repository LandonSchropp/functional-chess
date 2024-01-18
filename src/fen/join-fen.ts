/**
 * A utility function that joins the parts of a FEN into a string.
 * @param fen The parts to join.
 * @returns A FEN string.
 * @private
 */
export function joinFen(parts: [string, string, string, string, string, string]): string {
  return parts.join(" ");
}
