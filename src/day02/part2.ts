// Advent of Code - Day 2 - Part Two

export function part2(input: string): number {
  
  let pos = 0
  let depth = 0
  let aim = 0
  
  const splitInput = input.split(/[\r\n]+/)
  if (splitInput.length == 0) return 0;

  for (let i = 0; i < splitInput.length; i++) {
    const splitInputVal = splitInput[i].trim().split(' ')
    const direction = splitInputVal[0]
    const distance = parseInt(splitInputVal[1])

    switch (direction) {
      case 'forward':
        pos += distance
        depth += (aim * distance)
        break;
      case 'backward':
        pos -= distance
        depth -= (aim * distance)
        break;
      case 'up':
        aim -= distance
        break;
      case 'down':
        aim += distance
        break;
    }
    // console.log(`${splitInput[i]} ${distance} = Pos: ${pos}, depth: ${depth}`)

  }

  return pos * depth;
}

