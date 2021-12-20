// Advent of Code - Day 17 - Part One

import { getAllShots, parseInput } from "."

export function part1(input: string): number {
  
  const parsedInput = parseInput(input)

  const shots = getAllShots(parsedInput)

  const bestShot = shots.sort((a, b) => b[0] - a[0])[0]
  
  console.log(shots)
  console.log(bestShot)
  return bestShot[0];
}
