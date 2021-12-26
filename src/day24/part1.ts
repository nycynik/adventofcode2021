// Advent of Code - Day 24 - Part One

export function processline(line: string, registers: Map<string, number>, modelNumberDigit: Array<number>) {
  const splitLine = line.split(' ')
  const store = splitLine[1]
  if (!registers.has(store)) { console.log('REGISTER MISSING', store); return }
  const curValue = registers.get(store) || 0
  let secondParam = 0
  if (splitLine.length > 1) {
    if (registers.has(splitLine[2])) {
      secondParam = registers.get(splitLine[2]) || 0
    } else {
      secondParam = parseInt(splitLine[2])
    }
  }

  switch (splitLine[0]) {
    case 'inp':
      registers.set(store, modelNumberDigit.shift() || 0)
      break;
    case 'add':
      registers.set(store, curValue + secondParam)
      break;
    case 'mul':
      registers.set(store, curValue * secondParam)
      break;
    case 'div':
      registers.set(store, Math.trunc(curValue / secondParam))
      break;
    case 'mod':
      registers.set(store, curValue % secondParam)
      break;
    case 'eql':
      registers.set(store, curValue === secondParam ? 1 : 0)
      break;
    default:
      console.log('unknown instruction')
      break;
  }
}


export function part1(input: string): number {
  const registers = new Map<string, number>()
  registers.set('w',0)
  registers.set('x',0)
  registers.set('y',0)
  registers.set('z',0)
  
  const splitInput = input.split(/[\r\n]/).map(string => string.trim())

  let modelNumber = 99999999999999
  let notFound = true
  while (notFound) {
    modelNumber -= 1
    const modelNumberToTry = modelNumber.toString().split('').map(Number)

    if (modelNumberToTry.includes(0)) {
      continue
    }
    
    for (const line of splitInput) {
      if (line !== '')
        processline(line, registers, modelNumberToTry)
    }
    if (registers.get('z') === 0) {
      notFound = false
      console.log(modelNumber)
    }
    
  }
  
  return registers.get('z') || -1
}
