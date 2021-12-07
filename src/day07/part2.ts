// Advent of Code - Day 7 - Part Two

export function part2(input: string): number {

  const calcFuel = (crabSubPositions: Array<number>, location:number) => {
    let totalFuel = 0
    for (const crabPos of crabSubPositions) {
      const distance = Math.abs(crabPos - location)
      totalFuel += (.5 * distance ) * (distance+1)
    }
    return totalFuel
  }

  const crabSubPositions = input.trim().split(',').map(Number).sort((a,b) => a-b)

  let loc = 0
  const totalFuel = calcFuel(crabSubPositions, loc)

  let bestFuel = totalFuel
  let bestLocation = loc
  
  while (loc >= 0 && loc <= crabSubPositions.length) {
    loc += 1
    const newFuel = calcFuel(crabSubPositions, loc)
    if (newFuel < bestFuel) {
      bestFuel = newFuel
      bestLocation = loc
    }
  }
  
  console.log(`Total Fuel : ${bestFuel}  Best Pos: ${bestLocation}`)
  return bestFuel
}
