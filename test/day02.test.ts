// Advent of Code - Day 2

import { part1, part2 } from '../src/day02';

test('part one test', () => {
  expect(part1(`forward 5
  down 5
  forward 8
  up 3
  down 8
  forward 2
  `)).toBe(150);
});

test('part two test', () => {
  expect(part2(`forward 5
  down 5
  forward 8
  up 3
  down 8
  forward 2
  `)).toBe(900);
});
