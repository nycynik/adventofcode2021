// Advent of Code - Day 21 - Part One

import chalk from "chalk"

let startRoll = 1
export function deterministicRoll(): number {
  return startRoll++
}

export function sumThreeRolls(roller:() => number): number {
  return roller()+roller()+roller()
}

export function part1(input: string): number {

  const splitInput = input.split(/[\r\n]/).map(string => string.trim())
  const playersPositions = new Array<number>()
  const playerScores = new Array<number>()
  
  for (const line of splitInput) {
    if (line !== '') {
      playersPositions.push(parseInt(line.trim().split(':')[1]))
      playerScores.push(0)
    }
  }

  // Let's play!
  let numroles = 0
  let finalScore = 0
  while (Math.max(...playerScores) < 1000) {
    for (let player = 0; player < playersPositions.length; player++) {
      const roll = sumThreeRolls(deterministicRoll)
      numroles += 3
      const newPosition = (((playersPositions[player] + roll)-1) % 10) + 1
      playerScores[player] += newPosition
      console.log(`[${numroles}] Player ${player + 1} rolls ${roll} and moves to ${newPosition} with score ${playerScores[player]}`)
      playersPositions[player] = newPosition
      
      // check win condition
      if (playerScores[player] >= 1000) {
        finalScore = numroles * Math.min(...playerScores)
        console.log(chalk.yellow(`Winner is player ${player+1} with score ${playerScores[player]} ${Math.min(...playerScores)}`))
        break
      }
    }
  }
  
  return finalScore;
}
