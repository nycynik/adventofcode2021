// Advent of Code - Day 9

import { part1, part2 } from '../src/day09';

test('part one test', () => {
  expect(part1(`2199943210
  3987894921
  9856789892
  8767896789
  9899965678`)).toBe(15);
});

test('part two test', () => {
  expect(part2(`2199943210
  3987894921
  9856789892
  8767896789
  9899965678`)).toBe(1134);
});
