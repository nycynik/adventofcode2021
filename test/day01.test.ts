// Advent of Code - Day 1

import { part1, part2 } from '../src/day01';

test('part one test', () => {
  expect(part1(`199
  200
  208
  210
  200
  207
  240
  269
  260
  263`)).toBe(7);
});

test('part two test', () => {
  expect(part2(`199
  200
  208
  210
  200
  207
  240
  269
  260
  263`)).toBe(5);
});
