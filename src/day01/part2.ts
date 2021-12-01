// Advent of Code - Day 1 - Part Two
// sliding window is not real, since hte math is simply 
// addition, we can ignore the common factors in comparison

export function part2(input: string): number {
  let count = 0

  const splitInput = input.split(/[\r\n]+/)
  if (splitInput.length < 4) return 0;

  for (let i = 3; i < splitInput.length; i++) {
    const value = parseInt(splitInput[i])
    const lastValue = parseInt(splitInput[i-3])

    if (value > lastValue) {
      count += 1;
      //console.log(`${value} vs ${lastValue} (increased ++)`)
    } else {
      //console.log(`${value} vs ${lastValue} (decreased --)`)
    }
  }
  
  return count;
}
