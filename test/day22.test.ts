// Advent of Code - Day 22

import { part1, part2 } from '../src/day22';

test('part one test', () => {
  expect(part1(`on x=10..12,y=10..12,z=10..12
  on x=11..13,y=11..13,z=11..13
  off x=9..11,y=9..11,z=9..11
  on x=10..10,y=10..10,z=10..10
  `)).toBe(39);
});

test('part two test', () => {
  expect(part2(``)).toBe(0);
});
