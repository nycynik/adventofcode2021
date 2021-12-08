// Advent of Code - Day 8 - Part One

export function part1(input: string): number {

  const splitInput = input.split(/[\r\n]/).map(string => string.trim())

  /*  aaaa      0 a,b,c,e,f         6 a,b,d,e,f,g
  ** b    c     1 c,f               7 a,c,f
  ** b    c     2 a,c,d,e,g         8 a,b,c,d,e,f,g
  **  dddd      3 a,c,d,f,g         9 a,b,c,d,f
  ** e    f     4 b,d,c,f
  ** e    f     5 a,b,d,f,g
  **  gggg       
  */
  
  //                      0  1  2  3  4  5  6  7  8  9 
  const segmentCounts = [ 6, 2, 5, 5, 4, 5, 6, 3, 7, 6]
  const potentials = new Array<Array<number>>(7).fill([])

  let countUniqueOutput = 0
  splitInput.forEach((entry) => {
    if (entry === '') return
    const splitEntry = entry.split(' | ')
    const outputValues = splitEntry[1].split(' ')
    outputValues.forEach((value) => {
      const numDigits = value.length
      if ([2, 4, 3, 7].includes(numDigits))
        countUniqueOutput += 1
    })
  })

  return countUniqueOutput;
}
