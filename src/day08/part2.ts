// Advent of Code - Day 8 - Part Two

export function part2(input: string): number {

  const decodeElement = (element: string, knowns: Array<string>) => {
    
    if (element.length == 2) return 1;
    if (element.length == 3) return 7;
    if (element.length == 4) return 4;
    if (element.length == 7) return 8;

    if (element.length == 5) {
      if (element.includes(knowns[4])) return 2;
      if (element.includes(knowns[1])) return 5;
      return 3;
    }

    if (element.length == 6) {
      if (!element.includes(knowns[2])) return 6;
      if (!element.includes(knowns[4])) return 9;
      return 0;
    }
  }

  const splitInput = input.split(/[\r\n]/).map(string => string.trim())

  /*  00aa      0 a,b,c,e,f         6 a,b,d,e,f,g
  ** 1    2     1 c,f               7 a,c,f
  ** b    c     2 a,c,d,e,g         8 a,b,c,d,e,f,g
  **  33dd      3 a,c,d,f,g         9 a,b,c,d,f
  ** 4    5     4 b,d,c,f
  ** e    f     5 a,b,d,f,g
  **  66gg   
  **
  ** segments  - digits that match that number of segments
  **    2      - 1 
  **    3      - 7
  **    4      - 4
  **    5      - 2,3,5
  **    6      - 0,6,9
  **    7      - 8
  ** 
  */
  
  //                      0  1  2  3  4  5  6  7  8  9 
  const segmentCounts = [ 6, 2, 5, 5, 4, 5, 6, 3, 7, 6]

  let totalValue = 0
  splitInput.forEach((entry) => {
    if (entry === '') return

    const potentials = new Array<Set<string>>(7)
    for (let x = 0; x < 7; x++)
      potentials[x] = new Set([])
    const knowns = new Array<string>(7).fill('')

    const splitEntry = entry.split(' | ')
    const splitData = splitEntry[0].split(' ')
    const outputValues = splitEntry[1].split(' ')
    
    const numberedSegments = new Array<Array<Set<string>>>(8)
    for (let x = 2; x <= 7; x++)
      numberedSegments[x] = []
    
    splitData.forEach((data) => {
      const charSet = new Set<string>()
      data.split('').forEach((character) => {
        charSet.add(character)
      })
      numberedSegments[data.length].push(charSet)
    })
  
     const knowLetters = new Set<string>()

     // its digit 1
    numberedSegments[2][0].forEach((character) => {
      potentials[2].add(character)
      potentials[5].add(character)
      knowLetters.add(character)
    })
    
    // digit 7
    numberedSegments[3][0].forEach((character) => {
      if (!knowLetters.has(character)) {
        potentials[0].add(character)
        knowns[0] = character
        knowLetters.add(character)
      }
    })

    // digit 4
    numberedSegments[4][0].forEach((character) => {
      if (!knowLetters.has(character)) {
        potentials[1].add(character)
        potentials[3].add(character)
        knowLetters.add(character)
      }
    })

    // digits 2,3,5
    const in235 = new Set<string>()
    numberedSegments[5][0].forEach((character) => {
        if (numberedSegments[5][1].has(character)) {
          in235.add(character)
        }
    })
    in235.forEach((segment:string) => {
      potentials[1].delete(segment)
    })
    potentials[1].forEach((character) => {
      potentials[3].delete(character)
      knowLetters.add(character)
      knowns[1] = character
    })
    potentials[3].forEach((character) => {
      knowns[3] = character
    })
      
    in235.forEach((character) => {
      if (!potentials[3].has(character) && !knowLetters.has(character)) {
        potentials[6].add(character)
        knowns[6] = character
      }
    })
    
    const onlyIntwoof690 = new Set<string>();
    ["a","b","c","d","e","f","g"].forEach((character:string) => {
      if (!((numberedSegments[6][0].has(character))
        && (numberedSegments[6][1].has(character))
        && (numberedSegments[6][2].has(character)))) {
        onlyIntwoof690.add(character)
      }
    })

    onlyIntwoof690.forEach((character) => {
      if (potentials[2].has(character)) {        
        knowns[2] = character
      }
    })

    potentials[5].delete(knowns[2])
    potentials[5].forEach((character) => {
      knowns[5] = character
    });
    
    ["a", "b", "c", "d", "e", "f", "g"].forEach((character: string) => {
      if (!knowns.includes(character)) {
        knowns[4] = character
      }
    })

    // potentials.forEach((segment, index) => {
    //   console.log(`${index} : `, segment, knowns[index])
    // })

    let finalValue = 0
    outputValues.forEach(element => {
      const value = decodeElement(element, knowns)
      finalValue = (finalValue * 10) + value
    });

    // console.log(finalValue)
    totalValue += finalValue
  })





  return totalValue;
}
