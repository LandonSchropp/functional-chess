# Todo

## FEN

### Validation

- [ ] `isValid`

### Position Accessors

- [x] `getBoard`
- [x] `getPieces`
- [x] `getPiece`
- [x] `getEmptySquares`
- [ ] `getAllLegalMoves`
- [ ] `getLegalMoves`

### Position Predicates

- [ ] `isCheckmate`
- [ ] `isDraw`
- [ ] `isInsufficientMaterial`
- [ ] `isStalemate`

### Position Mutators

- [ ] `isLegalMove`
- [ ] `movePiece`
- [ ] `setPiece`
- [ ] `removePiece`
- [ ] `reverse`

### Non-Position Accessors

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

- [x] `convertCoordinatesToSquare`
- [x] `convertSquareToCoordinates`
- [x] `distanceWithDiagonals`
- [x] `distanceWithoutDiagonals`
- [x] `getFile`
- [x] `getRank`
- [x] `getVectorBetweenSquares`
- [x] `translateSquare`
