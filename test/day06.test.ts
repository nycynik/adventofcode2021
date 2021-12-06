// Advent of Code - Day 6

import { part1, part2 } from '../src/day06';

test('part one test', () => {
  expect(part1(`3,4,3,1,2`)).toBe(5934);
});

test('part two test', () => {
  expect(part2(`3,4,3,1,2`)).toBe(26984457539);
});
