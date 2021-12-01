// Advent of Code - Day 1 - Part One

export function part1(input: string): number {

  let count = 0

  const splitInput = input.split(/[\r\n]+/)
  if (splitInput.length == 0) return 0;

  for (let i = 1; i < splitInput.length; i++) {
    const value = parseInt(splitInput[i])
    const lastValue = parseInt(splitInput[i-1])
    if (value > lastValue) {
      count += 1;
      //console.log(`${value} vs ${lastValue} (increased ++)`)
    } else {
      //console.log(`${value} vs ${lastValue} (decreased --)`)
    }
  }
  
  return count;
}
