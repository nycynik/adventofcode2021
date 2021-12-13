// Advent of Code - Day 12 - Part One

export function part1(input: string): number {

  const findAllPathsFrom =
    (start: string, pathWays: Map<string, Array<string>>,
      visited: Map<string, number>, pathHere: Array<string>): string =>
    {
      const localVisited = new Map(visited)
      if (start.toLowerCase() === start) {
        localVisited.set(start, (localVisited.get(start) || 0) + 1)
      }
      const startPaths = pathWays.get(start)
      startPaths?.forEach(node => {
        if (localVisited.has(node)) {
          return ''
        }
        const nextPath = pathHere.concat([node])
        if (node === 'end') {
          // success!
          const found = nextPath
          foundPaths.push(found)
          return 'wakka'
        } else {
          findAllPathsFrom(node, pathWays, localVisited, nextPath)
        }
      })
    }

  const splitInput = input.split(/[\r\n]/).map(string => string.trim())
  const pathWays = new Map<string, Array<string>>()
  const foundPaths = new Array<Array<string>>()

  splitInput.forEach(path => {
    const splitPath = path.split('-')

    // left to right
    if (!pathWays.has(splitPath[0])) {
      pathWays.set(splitPath[0], [splitPath[1]])
    } else {
      const curValue = pathWays.get(splitPath[0]) || []
      curValue.push(splitPath[1])
      pathWays.set(splitPath[0], curValue)  
    }

    // right to left
    if (!pathWays.has(splitPath[1])) {
      pathWays.set(splitPath[1], [splitPath[0]])
    } else {
      const curValue = pathWays.get(splitPath[1]) || []
      curValue.push(splitPath[0])
      pathWays.set(splitPath[1], curValue)  
    }
    
  })
    
  console.log(pathWays)

  const visited = new Map<string, number>()
  const pathHere = ['start']
  
  // modifies foundPaths
  findAllPathsFrom('start', pathWays, visited, pathHere)
  
  console.log(foundPaths)
  return foundPaths.length;
}
