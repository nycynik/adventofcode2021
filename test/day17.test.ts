// Advent of Code - Day 17

import { part1, part2 } from '../src/day17';

test('part one test', () => {
  expect(part1(`target area: x=20..30, y=-10..-5`)).toBe([7,2]);
});

test('part two test', () => {
  expect(part2(``)).toBe(0);
});
