// Advent of Code - Day 7 - Part One

export function part1(input: string): number {
  
  const crabSubPositions = input.trim().split(',').map(Number).sort((a,b) => a-b)

  const sumPos = crabSubPositions.reduce((sum: number, b: number) => sum + b, 0);
  
  let median = 0
  if (crabSubPositions.length % 2 === 0) {
    const left = crabSubPositions[crabSubPositions.length / 2 - 1];
    const right = crabSubPositions[crabSubPositions.length / 2];
    median = (left+right) / 2
  } else {
    median = crabSubPositions[crabSubPositions.length / 2]
  }

  let totalFuel = 0
  for (const crabPos of crabSubPositions) {
    totalFuel += Math.abs(crabPos - median)
  }

  console.log(`Total Fuel : ${totalFuel}  Best Pos: ${median}`)
  return totalFuel
}
