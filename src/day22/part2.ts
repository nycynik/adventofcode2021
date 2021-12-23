// Advent of Code - Day 22 - Part Two

export function part2(input: string): number {
  const splitInput = input.split(/[\r\n]/).map(string => string.trim())

  const reactor = new Map<string, string>()

  let totalOn = 0
  for (const line of splitInput) {
    if (line === '') continue
    console.log(line)
    const direction = line.split(' ')[0]
    const xLocations = line.substring(direction.length + 3, line.indexOf(',y')).split('..').map(Number)
    const yLocations = line.substring(line.indexOf(',y=') + 3, line.indexOf(',z')).split('..').map(Number)
    const zLocations = line.split(',z=')[1].split('..').map(Number)
    
    
      for (let x = xLocations[0]; x <= xLocations[1]; x++) {
        for (let y = yLocations[0]; y <= yLocations[1]; y++) {
          for (let z = zLocations[0]; z <= zLocations[1]; z++) {
            const reactorLocation = `[${x},${y},${z}]`
            if (reactor.has(reactorLocation)) {
              if (direction !== reactor.get(reactorLocation)) {
                if (direction == 'on') {
                  totalOn += 1
                } else {
                  totalOn -= 1
                }
              }
            } else {
              totalOn += direction === 'on' ? 1 : 0
            }
            reactor.set(reactorLocation, direction)
          }
        }
      }
    

  }

  return totalOn;
}
