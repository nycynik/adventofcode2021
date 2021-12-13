// Advent of Code - Day 13 - Part One

import { Pos } from "./pos"

export function part1(input: string): number {

  const drawBoard = ((dots: Array<Pos>): void => {
    let boardAsString = ''
    const maxX = (dots.reduce((prev, curr) => prev.x > curr.x ? prev : curr)).x
    const maxY = (dots.reduce((prev, curr) => prev.y > curr.y ? prev : curr)).y

    const board = new Array<string>((maxX + 1) * (maxY + 1)).fill(' ')
    dots.forEach(dot => {
      board[(dot.y*(maxX))+dot.x] = '#'
    })

    for (let y = 0; y <= maxY; y++) {
      let line = ''
      for (let x = 0; x <= maxX; x++) {
        line += board[y * maxX + x]
      }
      boardAsString += line + '\n'
    }
    console.log(boardAsString)
  })

  const splitInput = input.split(/[\r\n]/).map(string => string.trim())
  const folds = new Array<string>()
  let dots = new Array<Pos>()

  splitInput.forEach(line => {
    if (line !== '') {
      if (line.startsWith('fold')) {
        const splitFold = line.trim().split(' ')
        folds.push(splitFold[2])
      } else {
        const splitLine = line.trim().split(',').map(Number)
        dots.push(new Pos(splitLine[0], splitLine[1]))
      }
    }
  })
  // console.log(dots.sort((a, b) => (a.x - b.x)))
  // drawBoard(dots)
  
  // now do folds.
  folds.forEach(fold => {
    const foldInstruction = fold.trim().split('=')
    const dir = foldInstruction[0]
    const value = parseInt(foldInstruction[1])
    const newDots = new Array<Pos>()
    if (['x', 'y'].includes(dir)) {
      dots.forEach((dot, index) => {
        const aSpot = new Pos(dot.x, dot.y)
        if (dir === 'x' && dot?.x > value) {
          aSpot.x = value - (aSpot.x - value) 
        }
        if (dir === 'y' && dot.y > value) {
          aSpot.y = value - (aSpot.y - value)
        }
        if (!newDots.some((d) => d.x===aSpot.x && d.y===aSpot.y)) {
          newDots.push(aSpot)
        }
      })  
    } else {
      console.log(`parsing failure for instruction: ${foldInstruction}`)
    }
    dots = newDots.slice()
    console.log(`${fold} : ${dots.length}`)
    // drawBoard(dots)
  })
  
  drawBoard(dots)
  return dots.length;
}
