// Advent of Code - Day 15 - Part One

export function findBestPath(board: Array<Array<number>>) {
  const frontier = [[board.length-1, board[0].length-1]]  // [r,c]
  const best = new Array<Array<number>>()
  for (const line of board) {
    best.push(new Array(line.length).fill([0,-1,-1])) // [value,from row, from col]
  }
  console.log(board[board.length - 1][board[0].length - 1])
  
  while (frontier.length > 0) {
    for (const spot of frontier) {
      
    }
  }
}

export function part1(input: string): number {
  const splitInput = input.split(/[\r\n]/).map(string => string.trim())

  const board = new Array<Array<number>>()
  for (const line of splitInput) {
    const spots = new Array<number>()
    for (const pos of line) {
      spots.push(parseInt(pos))
    }
    board.push(spots)
  }

  const result = findBestPath(board)

  console.log(board)
  return 0;
}
