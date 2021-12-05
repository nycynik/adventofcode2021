// Advent of Code - Day 5 - Part Two

export function part2(input: string): number {

  const observations = new Array<number>(1000000).fill(0) 
  const splitInput = input.split(/[\r\n]/).map(string => string.trim())
  
  let rowsProcessed = 0
  for (const entry of splitInput) {
    if (entry.trim() == '') continue

    const coordinates = entry.split(' -> ')
    const topLeft = coordinates[0].split(',').map(Number)
    const botRight = coordinates[1].split(',').map(Number)

    let xVect = 0
    let yVect = 0
    if (topLeft[0] < botRight[0]) {
      xVect = 1
    } else if (topLeft[0] > botRight[0]) {
      xVect = -1
    }
    if (topLeft[1] < botRight[1]) {
      yVect = 1
    } else if (topLeft[1] > botRight[1]) {
      yVect = -1
    }

    let positionX = topLeft[0]
    let positionY = topLeft[1]
    const distance = Math.max(
      (Math.max(topLeft[0], botRight[0]) - Math.min(topLeft[0], botRight[0])),
      (Math.max(topLeft[1], botRight[1]) - Math.min(topLeft[1], botRight[1])))

    for (let x = 0; x <= distance; x++) {
      const position = positionX + (positionY * 1000)
      observations[position] += 1
      positionY += yVect
      positionX += xVect
    }
    rowsProcessed += 1
  }
  console.log(`read ${rowsProcessed} lines`)  

  // find max
  // FAILS TO WORK: const maxOverlaps = Math.max(...observations)
  // let maxOverlaps = 0
  // for (let i = 0; i < observations.length; i++) {
  //   maxOverlaps = Math.max(maxOverlaps, observations[i])
  // }
  // console.log(`max: ${maxOverlaps}`)
  
  const countMaxOverlaps = observations.filter(x => x>=2).length
  
  return countMaxOverlaps;
}
