// Advent of Code - Day 18

import { addSnailfish, part1, part2, reduceSnailfish, getDigit } from '../src/day18';

// utils
test('can find digit going forward', () => {
  expect(getDigit('14,[2,3],4]', 0)).toBe(14)
})

test('can find digit going backwards', () => {
  const testString = '[[3,2],4,14'
  expect(getDigit(testString, testString.length, -1)).toBe(14)
})

// sum
test('part one - sum and reduce 1', () => {
  expect(addSnailfish(addSnailfish(addSnailfish(`[1,1]`, `[2,2]`), `[3,3]`), `[4,4]`)).toBe('[[[[1,1],[2,2]],[3,3]],[4,4]]');
});

// reduce
test('reduce already reduced number', () => {
  expect(reduceSnailfish(`[[[[0,7],4],[[7,8],[6,0]]],[8,1]]`)).toBe('[[[[0,7],4],[[7,8],[6,0]]],[8,1]]');
});

test('reduce explode check', () => {
  expect(reduceSnailfish('[[[[[9,8],1],2],3],4]')).toBe('[[[[0,9],2],3],4]')
});

test('part one test', () => {
  expect(part1(`[1,1]
  [2,2]
  [3,3]
  [4,4]`)).toBe(0);
});

test('part two test', () => {
  expect(part2(``)).toBe(0);
});
