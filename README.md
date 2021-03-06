# adventofcode2021
<pre>
 *        +     *           *           *                *        *
      *  ( )          advent of code *           *
   *    (   )    *    2021    *            *                  *          *
       (     )      * https://adventofcode.com/        *
*     (       )                *      *         *          *        *
     (         )   *         *              *        * 
</pre>

# Puzzles

| S  | M  | T  | W  | Th | F | S |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|   |   |   | [Day 01](./src/day01/README.md) ⭐⭐ | [Day 02](./src/day02/README.md) ⭐⭐ | [Day 03](./src/day03/README.md) ⭐⭐  | [Day 04](./src/day04/README.md) ⭐⭐ |
| [Day 05](./src/day05/README.md) ⭐⭐ | [Day 06](./src/day06/README.md) ⭐⭐ | [Day 07](./src/day07/README.md) ⭐⭐  | [Day 08](./src/day08/README.md) ⭐⭐  | [Day 09](./src/day09/README.md) ⭐⭐ | [Day 10](./src/day10/README.md) ⭐⭐ | [Day 11](./src/day11/README.md) ⭐⭐ |
| [Day 12](./src/day12/README.md) ⭐⭐ | [Day 13](./src/day13/README.md) ⭐⭐ | [Day 14](./src/day14/README.md) ⭐  | [Day 15](./src/day15/README.md)   | [Day 16](./src/day16/README.md) | [Day 17](./src/day17/README.md) ⭐⭐ | [Day 18](./src/day18/README.md) |
| [Day 19](./src/day19/README.md) ⭐⭐ | [Day 20](./src/day20/README.md) ⭐⭐ | [Day 21](./src/day21/README.md) ⭐  | [Day 22](./src/day22/README.md) ⭐  | [Day 23](./src/day23/README.md) | [Day 24](./src/day24/README.md)  | [Day 25](./src/day25/README.md) |

# Starter Template
I started with this helpful starter - https://github.com/ljgago/advent-of-code-typescript-starter
I've never used it before, but I'm excited that it existed! Thanks!


# basics 
(copied from the readme)

## Usage

The project use [Node.js](https://nodejs.org) as javascript runtime, [esbuild](https://esbuild.github.io)
as typescript transpiler and [swc](https://swc.rs) with [Jest](https://jestjs.io) for testing.

    $ git clone https://github.com/ljgago/advent-of-code-typescript-starter aoc-typescript
    $ cd aoc-typescript

    # install dependencies
    $ yarn install

    # check syntax with eslint
    $ npm run lint day01

    # run tests for day01
    $ npm test day01

    # run the day01
    # npm start day01

## Generate

You can generate all necesary files for use in the event with a simple
command:

    $ npm run gen day01

This command generate these files:

    * creating src/day01/resources/input.txt
    * creating src/day01/index.ts
    * creating src/day01/main.ts
    * creating src/day01/part1.ts
    * creating src/day01/part2.ts
    * creating src/day01/README.md
    * creating test/day01.test.ts

- `/src/day01/resources/input.txt`: the input data.
- `/src/day01/index.ts`: export the modules for testing.
- `/src/day01/main.ts`: the main module.
- `/src/day01/part1.ts`: solution for part 1.
- `/src/day01/part2.ts`: solution for part 2.
- `/src/day01/README.md`: you can write the challenge statement.
- `/tests/day01.test.ts`: the module where you write the tests.

## Config

You can configure the automatic input download from the Advent of Code
session token.

For dowload the inputs from web, you needs to set the environment var
`AOC_SESSION`. You can to get the session token from the cookie web browser.

Also can you set the `AOC_YEAR` to select a certain year.
(It is not mandatory use the `AOC_YEAR`, the `npm run gen` can get the year automatically)

You can set an `.env` file with these variables.

Folder structure:

    ├── src
    │   └── day01
    │       ├── index.ts
    │       ├── main.ts
    │       ├── part1.ts
    │       ├── part2.ts
    │       ├── README.md
    │       └── resources
    │           └── input.txt
    └── test
        └── day01.test.ts

Happy coding!


