// Advent of Code - Day 25 - Part One

export function printboard(board: Array<Array<string>>): void {
  let b = ''
  for (const line of board) {
    b += line.join('') + '\n'
  }
  console.log(b)
}

export function simulateMove(board: Array<Array<string>>): number {
  let numChanges = 0
  const newboard = new Array<Array<string>>()
  for (const line of board) 
    newboard.push(line.slice())
  
  const w = board[0].length
  const h = board.length

  let target = '>'
  let dX = 1, dY = 0
  for (let pass = 0; pass <= 1; pass++) {
    if (pass === 1) {
      target = 'v'
      dX = 0
      dY = 1
    }
    for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
        switch (newboard[y][x]) {
          case target: {
            const yp = (y + dY) % h
            const xp = (x + dX) % w
            if (newboard[yp][xp] === '.') {
              board[y][x] = '.'
              board[yp][xp] = target
              numChanges++
            }
          }
            break;
          default:
            // do not change the board.
            break;
        }
      }
    }
    // reset for down
    for (let k = 0; k < h; k++) 
      newboard[k] = board[k].slice()
  }
  return numChanges
}

export function part1(input: string): number {

  const splitInput = input.split(/[\r\n]/).map(string => string.trim())

  const board = new Array<Array<string>>()
  for (const line of splitInput) {
    board.push(line.split(''))
  }
  //const board = splitInput.slice()
  
  printboard(board)
  
  let numChanges = 1
  let step = 1
  while (numChanges !== 0) {
    numChanges = simulateMove(board)
    // console.log(numChanges, step)
    // printboard(board)
    step++
  }
  console.log(step)
  printboard(board)

  return step;
}
