// Advent of Code - Day 12

import { part1, part2 } from '../src/day12';

test('part one test', () => {
  expect(part1(`start-A
  start-b
  A-c
  A-b
  b-d
  A-end
  b-end`)).toBe(10);
});

test('part two test', () => {
  expect(part2(`start-A
  start-b
  A-c
  A-b
  b-d
  A-end
  b-end`)).toBe(36);
});

test('part two test 2', () => {
  expect(part2(`dc-end
  HN-start
  start-kj
  dc-start
  dc-HN
  LN-dc
  HN-end
  kj-sa
  kj-HN
  kj-dc`)).toBe(103);
});



