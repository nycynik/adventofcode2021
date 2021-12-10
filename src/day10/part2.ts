// Advent of Code - Day 10 - Part Two

export function part2(input: string): number {

  const seperators:Map<string, any> = {
    ")": { "start": "(", "end": ")", "score": 3 },
    "]": { "start": "[", "end": "]", "score": 57 },
    "}": { "start": "{", "end": "}", "score": 1197 },
    ">": { "start": "<", "end": ">", "score": 25137 },
  }

  const chunkCheck = (text: string): Array<any> => {
    const sepCounts = [0, 0, 0, 0]
    const stack = new Array<string>()
    const autocomplete = new Array<string>()
        
    text.split('')
    for (const char of text.split('')) {
      switch (char) {
        case '(':
          sepCounts[0] += 1
          stack.push(char)
          autocomplete.push(')')
          break
        case ')':
          sepCounts[0] -= 1
          if (stack.pop() !== '(') {
            sepCounts[0] = -1 // causes error to show below
          }
          autocomplete.pop()
          break
        case '[':
          sepCounts[1] += 1
          stack.push(char)
          autocomplete.push(']')
          break
        case ']':
          sepCounts[1] -= 1
          if (stack.pop() !== '[') {
            sepCounts[1] = -1 // causes error to show below
          }
          autocomplete.pop()
          break
        case '{':
          sepCounts[2] += 1
          stack.push(char)
          autocomplete.push('}')
          break
        case '}':
          sepCounts[2] -= 1
          if (stack.pop() !== '{') {
            sepCounts[2] = -1 // causes error to show below
          }
          autocomplete.pop()
          break
        case '<':
          sepCounts[3] += 1
          stack.push(char)
          autocomplete.push('>')
          break
        case '>':
          sepCounts[3] -= 1
          if (stack.pop() !== '<') {
            sepCounts[3] = -1 // causes error to show below
          }
          autocomplete.pop()
          break
      }
      if (sepCounts.includes(-1)) {
        // it found an error, set score and return.
        if (char in seperators) {
          let score = seperators[char].score
          //console.log(`found problem: found ${char} ${score}`)
          return [score, stack]
        }
      }
    }
      
    return [score, autocomplete]
  }
    
  const splitInput = input.split(/[\r\n]/).map(string => string.trim())

  let score = 0
  const autocompleteScores = new Array<number>()

  splitInput.forEach((line) => {
    let score = 0
    const ret = chunkCheck(line)
    if (ret[0] === 0) {
      // this one was not invalid, so figure out autocomple.
      const closeList:Array<string> = ret[1].reverse()
      closeList.forEach((sep) => {
        switch (sep) {
          case ')':
            score = (score * 5) + 1
            break;
          case ']':
            score = (score * 5) + 2
            break
          case '}':
            score = (score * 5) + 3
            break
          case '>':
            score = (score * 5) + 4
        }
      })
      autocompleteScores.push(score)
    }
  })

  autocompleteScores.sort((a, b) => a - b)
  console.log(autocompleteScores, autocompleteScores[ Math.round(autocompleteScores.length/2)])
  return autocompleteScores[ Math.floor(autocompleteScores.length/2)];
}
