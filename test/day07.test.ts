// Advent of Code - Day 7

import { part1, part2 } from '../src/day07';

test('part one test', () => {
  expect(part1(`16,1,2,0,4,2,7,1,2,14`)).toBe(37);
});

test('part two test', () => {
  expect(part2(`16,1,2,0,4,2,7,1,2,14`)).toBe(168);
});
