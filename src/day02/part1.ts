// Advent of Code - Day 2 - Part One

export function part1(input: string): number {

  let pos = 0
  let depth = 0

  const splitInput = input.split(/[\r\n]+/)
  if (splitInput.length == 0) return 0;

  for (let i = 0; i < splitInput.length; i++) {
    const splitInputVal = splitInput[i].trim().split(' ')
    const direction = splitInputVal[0]
    const distance = parseInt(splitInputVal[1])

    switch (direction) {
      case 'forward':
        pos += distance
        break;
      case 'backward':
        pos -= distance
        break;
      case 'up':
        depth -= distance
        break;
      case 'down':
        depth += distance
        break;
    }
    // console.log(`${splitInput[i]} ${distance} = Pos: ${pos}, depth: ${depth}`)

  }

  return pos * depth;
}

