// Advent of Code - Day 25

import { part1, part2 } from '../src/day25';

test('part one test', () => {
  expect(part1(`v...>>.vv>
  .vv>>.vv..
  >>.>v>...v
  >>v>>.>.v.
  v>v.vv.v..
  >.>>..v...
  .vv..>.>v.
  v.v..>>v.v
  ....v..v.>`)).toBe(59);
});

test('part two test', () => {
  expect(part2(``)).toBe(0);
});
