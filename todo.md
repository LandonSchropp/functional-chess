# Todo

## FEN

These functions are related to FEN strings.

### Internal

These functions are required internally in order to make the library work.

- [x] `transformFen`
- [x] `deriveFromFen`

### Validation

These functions can be used to validate different aspects of a FEN string.

- [x] `isParsable`
- [ ] `isValid`
- [ ] `isLegalMove`

### Parsing

These functions can be used to parse the FEN.

- [x] `parseFen`

### Position Representations

These functions will return different representations of the FEN as a whole.

- [x] `toFen`
- [x] `toBoard`
- [x] `toAscii`
- [x] `toUnicode`

### Position Accessors

These functions can be used to get specific information about the current position.

- [x] `getPiece`
- [x] `getPiecesWithSquares`
- [x] `getEmptySquares`
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
- [x] `setPiece`
- [x] `removePiece`
- [ ] `swapColors`

### Non-Position Accessors and Mutators

These functions update parts of the FEN that are not related to the position.

- [x] `getColor`
- [x] `setColor`
- [x] `getCastlingRight`
- [x] `getCastlingRights`
- [ ] `setCastlingRight`
- [x] `setCastlingRights`
- [x] `getEnPassantSquare`
- [x] `setEnPassantSquare`
- [x] `getHalfMoveClock`
- [x] `setHalfMoveClock`
- [x] `getFullMoveNumber`
- [x] `setFullMoveNumber`

## Square

These functions deal with squares, independent of a FEN.

- [x] `calculateDiagonalDistance`
- [x] `calculateOrthagonalDistance`
- [x] `calculateTranslation`
- [x] `convertCoordinatesToSquare`
- [x] `convertSquareToCoordinates`
- [x] `getFile`
- [x] `getRank`
- [x] `translateSquare`

## Other

- [ ] Set up code coverage
- [x] Set up Prettier
- [x] Set up ESLint
- [ ] Set up NPM package
- [x] Make the library handle both 0x88 boards _and_ strings
- [ ] Create a documentation site
