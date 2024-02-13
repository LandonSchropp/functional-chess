# ♟️ Chess Functions ♟️

This library is a collection of ✨ [pure functions](https://en.wikipedia.org/wiki/Pure_function) ✨
for manipulating [Forsyth–Edwards Notation (FEN)](https://en.wikipedia.org/wiki/Fen) strings and
other chess data structures. It's written in [TypeScript](http://typescriptlang.org/).

⚠️ _This library is a work in progress! It's not ready for use yet. To track progress, check out the
[todo list](todo.md)._ ⚠️

## Why Should You Use This Library?

There are many excellent chess libraries available. This one seeks to present a unique perspective.
Here's why it stands out:

- **🚀 Functional:** This library embraces the power of pure functions, offering the inherent
  benefits of immutability and side-effect-free programming. This results in more predictable and
  easier-to-debug code.
- **🐇 Speed:** Under the hood, this library uses an [0x88](https://en.wikipedia.org/wiki/0x88)
  implementation, a super fast and efficient way of reading and manipulating chess positions.
- **🧬 Compatibility:** This library eliminates the hassle of managing object instances, making it a
  much better fit for frontend frameworks like React. The simplicity of this approach is a makes it
  a perfect fit for various state management approaches, enhancing flexibility and ease of use.
- **🚦 Test-driven:** With 100% code coverage, this library is build for reliability and peace of
  mind. You can rely on Chess Functions without fearing unexpected failures.
- **🌐 Modern:** Built on web standards, this library supports both ESM and Common.js modules,
  ensuring compatibility across Node.js, Bun, Deno, and modern web browsers. Since it's written in
  TypeScript, it comes with type definitions out of the box.

## Usage

TODO: Fill out this section once the library is deployed.

## Inspiration and Resources

This library is inspired by many other wonderful resources and projects.

- [0x88 MOVE GENERATOR
  (Wukong)](https://youtube.com/playlist?list=PLmN0neTso3JzhJP35hwPHJi4FZgw5Ior0) This is a
  wonderful YouTube video series that goes in-depth on how to implement a chess move generator in C.
- [Chess.js](https://github.com/jhlywa/chess.js) is a fantastic object-oriented chess library. Much
  of the implementation and many of the test cases in this library were directly inspired from
  Chess.js.
- [Chess Programming Wiki](https://www.chessprogramming.org): This project is an invaluable resource
  for anyone who would like to try their hand at chess programming. It features invaluable guidance
  on many different subjects the helps to shape this library.

## Development

This project is written using [Bun](https://bun.sh/). While you don't need Bun to _use_ the library,
it is necessary for development.

This library ships with several helpful commands for development.

- `bun install`: Install dependencies.
- `bun build`: Compile the project to the `dist` folder.
- `bun check-types`: Ensure all of the types are correct.
- `bun test`: Run all of the tests.
- `bun lint`: Run the linter.
