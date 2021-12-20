// Advent of Code - Day 17 - Part Two

import { getAllShots, parseInput } from "."

export function part2(input: string): number {
  const parsedInput = parseInput(input)

  const shots = getAllShots(parsedInput)

  return shots.length;
}
