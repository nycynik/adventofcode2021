// Advent of Code - Day 21

import { part1, part2 } from '../src/day21';

test('part one test', () => {
  expect(part1(`Player 1 starting position: 4
  Player 2 starting position: 8
  `)).toBe(739785);
});

test('part two test', () => {
  expect(part2(`Player 1 starting position: 4
  Player 2 starting position: 8
  `)).toBe(0);
});
