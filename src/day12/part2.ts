// Advent of Code - Day 12 - Part Two

export function part2(input: string): number {
  const MAX_VISITED_KEY = 'maxVisited'

  const findAllPathsFrom =
    (start: string, pathWays: Map<string, Array<string>>,
      visited: Map<string, number>, pathHere: Array<string>): number =>
    {
      const localVisited = new Map(visited)
      let maxVisited = localVisited.get(MAX_VISITED_KEY) || 2
      if (start !== 'start' && start.toLowerCase() === start) {
        const startVisitedCount = (localVisited.get(start) || 0) + 1
        localVisited.set(start, startVisitedCount)
        if (startVisitedCount > 1)
          localVisited.set(MAX_VISITED_KEY, 1)
          maxVisited = 1
      }
      const startPaths = pathWays.get(start)
      startPaths?.forEach(node => {
        if (node === 'start') return
        const timesHere = localVisited.get(node) || 0
        if (timesHere >= maxVisited) {
          return 1
        }
        const nextPath = pathHere.concat([node])
        if (node === 'end') {
          // success!
          const found = nextPath
          foundPaths.push(found)
          return maxVisited
        } else {
          maxVisited = findAllPathsFrom(node, pathWays, localVisited, nextPath)
        }
      })
      return maxVisited
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
    
  const visited = new Map<string, number>()
  const pathHere = ['start']
  
  // modifies foundPaths
  findAllPathsFrom('start', pathWays, visited, pathHere)
  
  let allpaths = new Array<string>()
  foundPaths.forEach((path) => allpaths.push(path.toString()))
  allpaths = allpaths.sort()
  return foundPaths.length;
}
