// Advent of Code - Day 4 - Part Two

import { bingo } from "./bingo"

export function part2(input: string): number {
  const splitInput = input.split(/[\r\n]/).map(string => string.trim())
  console.log(`found ${splitInput.length} rows`)

  // get calls
  const calls = splitInput[0].split(',').map(Number)
  
  // parse boards
  const bingoBoards = new Array<bingo>()
  let boardValues = new Array<Array<number>>()
  for (let x = 2; x < splitInput.length; x++) {
    if (splitInput[x].trim() === '') {
      // end of board
      bingoBoards.push(new bingo(boardValues))
      //bingoBoards[bingoBoards.length - 1].render()
      boardValues = []
    } else {
      const row = splitInput[x].trim().split(/ +/).map(Number)
      boardValues.push(row)
    }
  }

  if (boardValues.length !== 0) {
    // one unparsed board at the end.
    bingoBoards.push(new bingo(boardValues))
    //bingoBoards[bingoBoards.length - 1].render()
  }

  console.log(`  Imported ${bingoBoards.length} boards`)

  let losingBoardScore = 0
  // lets call out those numbers!
  for (const call of calls) {
    for (const board of bingoBoards) {
      if (!board.won) {
        board.callOut(call)
        if (board.checkWin()) {
          console.log('BINGO!')
          board.render()
          losingBoardScore = board.score() * call
        }
      }
    }
  }

  return losingBoardScore;

}
