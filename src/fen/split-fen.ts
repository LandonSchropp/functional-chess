/**
 * A utility function that splits a FEN into its parts.
 * @param fen The FEN to split.
 * @returns A tuple containing the parts of the FEN.
 * @private
 */
export function splitFen(fen: string): [string, string, string, string, string, string] {
  return fen.split(" ") as [string, string, string, string, string, string];
}
