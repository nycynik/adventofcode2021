// Advent of Code - Day 9 - Part One

export function part1(input: string): number {
  let riskLevel = 0

  const onBoard = (row:number, col:number, width:number, height:number):boolean => {
    if (row < 0 || col < 0 || row >= height || col >= width)
      return false
    return true
  }

  const lowerThanNeighbors = (location: Array<number>, board: Array<Array<number>>, width:number, height:number): boolean => {

    const locationValue = board[location[0]][location[1]]
    const offsets = [[-1, 0], [+1, 0], [0, -1], [0, 1]]
    for (let offIdx = 0; offIdx < offsets.length; offIdx++) {
      const row = location[0] + offsets[offIdx][0]
      const col = location[1] + offsets[offIdx][1]

      if (onBoard(row, col, width, height)) {
        //console.log(`${location} ${locationValue} -vs- ${row}, ${col} ${board[row][col]} \n`)
        if (locationValue >= board[row][col]) {
          return false
        }
      } 
    }
    return true
  }

  const splitInput = input.split(/[\r\n]/).map(string => string.trim())
  const board = new Array<Array<number>>()
  splitInput.forEach(row => {
    if (row !== '') 
      board.push(row.split('').map(Number))
  })

  const width = board[0].length
  const height = board.length

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const location = [row, col]
      if (lowerThanNeighbors(location, board, width, height)) {
        riskLevel += (1 + board[location[0]][location[1]])
      }
    }
  }  

  console.log(width, height, riskLevel)
  return riskLevel
}
