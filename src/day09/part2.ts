// Advent of Code - Day 9 - Part Two

export function part2(input: string): number {
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

  const floodBasin = (basinMap: Array<number>, basinNumber:number, location: Array<number>, board: Array<Array<number>>, width: number, height: number): number => {
    let floodSize = 1
    const toCheck = [location]
    const checked = new Set<number>()
    basinMap[(location[0] * width) + location[1]] = basinNumber

    while (toCheck.length > 0) {
      const locationToCheck = toCheck.pop() || []
      if (!checked.has((locationToCheck[0] * width) + locationToCheck[1])) {
        checked.add((locationToCheck[0] * width) + locationToCheck[1])
      
        const offsets = [[-1, 0], [+1, 0], [0, -1], [0, 1]]
        for (let offIdx = 0; offIdx < offsets.length; offIdx++) {
          const row = locationToCheck[0] + offsets[offIdx][0]
          const col = locationToCheck[1] + offsets[offIdx][1]

          if (onBoard(row, col, width, height)) {
            if (board[row][col] !== 9) {
              if (!checked.has((row * width) + col)) {
                toCheck.push([row, col])
                if (basinMap[(row * width) + col] != basinNumber) {
                  basinMap[(row * width) + col] = basinNumber
                  floodSize += 1
                }
              }
            }
          }
        }
      }
    }
    return floodSize
  }
  
  const printMap = (basinMap: Array<number>):void => {
    let wholeMap = ''
    for (let row = 0; row < height; row++) {
      let floodedrow = ''
      for (let col = 0; col < width; col++) {
        floodedrow += ' ' + basinMap[(row * width) + col]
      }
      wholeMap += floodedrow + '\n'
    }
    console.log(wholeMap)
  }

  const splitInput = input.split(/[\r\n]/).map(string => string.trim())
  const board = new Array<Array<number>>()
  splitInput.forEach(row => {
    if (row !== '') 
      board.push(row.split('').map(Number))
  })
  const width = board[0].length
  const height = board.length
  const basinMap = new Array<Array<number>>(width*height).map(Number).fill(0)
  let basinNumber = 1

  const basinSizes:Array<number> = []
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const location = [row, col]
      if (lowerThanNeighbors(location, board, width, height)) {
        const floodSize = floodBasin(basinMap,basinNumber, location, board, width, height)
        basinNumber +=1
        printMap(basinMap)
        basinSizes.push(floodSize)
      }
    }
  }  

  basinSizes.sort((a,b) => (b-a))
  riskLevel = basinSizes[0] * basinSizes[1] * basinSizes[2]
  
  return riskLevel
}
