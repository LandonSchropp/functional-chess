# Todo

## FEN

These functions related to FEN strings.

### Validation

These functions can be used to validate different aspects of a FEN string.

- [ ] `isParsable`
- [ ] `isValid`
- [ ] `isLegalMove`

### Position Representations

These functions will return different representations of the current position as a whole.

- [ ] `getBoard`
- [ ] `getAscii`
- [ ] `getPieces`

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
