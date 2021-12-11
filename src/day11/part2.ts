// Advent of Code - Day 11 - Part Two
import chalk from 'chalk';

export function part2(input: string): number {
  
  const printBoard = board => {
    let output = ''
    for (let row = 0; row < 10; row++) {
      let line = ''
      for (let col = 0; col < 10; col++) {
        if (board[(row * 10) + col] == 0)
          line += chalk.cyan('@')
        else 
          line += chalk.yellow(board[(row*10)+col])
      }
      output += line + '\n'
    }
    console.log(output)
  }

  let flashCount = 0
  let stepCount = 0
  const direction = [[-1, -1], [-1, 0], [-1, 1],
                     [ 0, -1],          [ 0, 1],
                     [ 1, -1], [ 1, 0], [ 1, 1]]

  let oceanFloor = new Array<number>()
  const splitInput = input.split(/[\r\n]/).map(string => string.trim())
  splitInput.forEach(line => {
    oceanFloor = oceanFloor.concat(line.split('').map(Number))
  })

  console.log('start', oceanFloor)

  for (let simSteps = 0; simSteps < 1000; simSteps++) {
    let stepFlashCount = 0

    for (let x = 0; x < oceanFloor.length; x++) {
      oceanFloor[x] += 1
    }
    let moreFlashes = true
    while (moreFlashes) {
      moreFlashes=false
      for (let x = 0; x < oceanFloor.length; x++) {
        if (oceanFloor[x] > 9) {
          oceanFloor[x] = -1
          stepFlashCount += 1

          const row = Math.floor(x / 10)
          const col = x - (row * 10)
          for (const pos of direction) {
            const rowDelta = row + pos[0]
            const colDelta = col + pos[1]
            const posOffset = (rowDelta * 10) + colDelta
            //console.log(posOffset, row, col, rowDelta, colDelta, pos)
            
            if (colDelta >= 0 && colDelta < 10
              && rowDelta >= 0 && rowDelta < 10) {
              if (oceanFloor[posOffset] >= 0) {
                oceanFloor[posOffset] += 1
                if (oceanFloor[posOffset] > 9) {
                  moreFlashes = true
                }
              }
            }
          }
        }
      }
    }

    //oceanFloor = oceanFloor.map(spot => { if (spot < 0) spot = 0 })
    for (let x = 0; x < 100; x++) {
      if (oceanFloor[x] < 0) {
        oceanFloor[x] = 0
      } 
    }
    flashCount += stepFlashCount
    console.log(chalk.blue.underline.bold(`step ${simSteps+1} - ${flashCount} (new ${stepFlashCount})`))
    printBoard(oceanFloor)
    if (stepFlashCount == 100) {
      console.log('DONE')
      stepCount = simSteps
      break
    }
  }
  
  return stepCount + 1
}
