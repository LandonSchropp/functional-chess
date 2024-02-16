# Todo

## FEN

These functions related to FEN strings.

### Internal

These functions are required internally in order to make the library work.

- [x] `transformFen`
- [x] `deriveFromFen`

### Validation

These functions can be used to validate different aspects of a FEN string.

- [ ] `isParsable`
- [ ] `isValid`
- [ ] `isLegalMove`

### Position Representations

These functions will return different representations of the current position as a whole.

- [x] `parseFen`
- [x] `toFen`
- [ ] `toBoard`
- [x] `toAscii`
- [ ] `toUnicode`
- [ ] `toPieces`

### Position Accessors

These functions can be used to get specific information about the current position.

- [ ] `getPiece`
- [ ] `getEmptySquares`
- [ ] `getAllLegalMoves`
- [ ] `getLegalMoves`

### Position Predicates

These predicate functions can answer questions about the current position.

- [ ] `isCheckmate`
- [ ] `isDraw`
- [ ] `isInsufficientMaterial`
- [ ] `isStalemate`

### Position Mutators

These functions will change the position in the FEN.

- [ ] `movePiece`
- [ ] `setPiece`
- [ ] `removePiece`
- [ ] `reverse`

### Non-Position Accessors and Mutators

These functions update parts of the FEN that are not related to the position.

- [ ] `getColor`
- [ ] `setColor`
- [ ] `getCastlingRight(side: Side)`
- [ ] `setCastlingRight(side: Side, canCastle: boolean)`
- [ ] `getCastlingRights()`
- [ ] `setCastlingRights(sides: Side[])`
- [ ] `getEnPassantTargetSquare()`
- [ ] `setEnPassantTargetSquare(value)`
- [ ] `getHalfMoveClock()`
- [ ] `setHalfMoveClock()`
- [ ] `getFullMoveNumber()`
- [ ] `setFullMoveNumber()`

## Square

These functions deal with squares, independent of a FEN.

- [ ] `convertCoordinatesToSquare`
- [ ] `convertSquareToCoordinates`
- [ ] `distanceWithDiagonals`
- [ ] `distanceWithoutDiagonals`
- [ ] `getFile`
- [ ] `getRank`
- [ ] `getVectorBetweenSquares`
- [ ] `translateSquare`

## Other

- [ ] Set up code coverage
- [ ] Set up Prettier
- [ ] Set up ESLint
- [ ] Set up NPM package
- [ ] Make the library handle both 0x88 boards _and_ strings. The idea is if you need performance,
      first parse your board into an 0x88 board, and then run the code. If you want ease-of-use,
      then use FEN strings. This will make it handy for people to use whichever representation best
      matches their use case.
