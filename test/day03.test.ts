// Advent of Code - Day 3

import { part1, part2 } from '../src/day03';

test('part one test', () => {
  expect(part1(`00100
  11110
  10110
  10111
  10101
  01111
  00111
  11100
  10000
  11001
  00010
  01010`)).toBe(198);
});

test('part two test', () => {
  expect(part2(`00100
  11110
  10110
  10111
  10101
  01111
  00111
  11100
  10000
  11001
  00010
  01010`)).toBe(230);
});
