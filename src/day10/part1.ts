// Advent of Code - Day 10 - Part One

export function part1(input: string): number {

  const seperators:Map<string, any> = {
    ")": { "start": "(", "end": ")", "score": 3 },
    "]": { "start": "[", "end": "]", "score": 57 },
    "}": { "start": "{", "end": "}", "score": 1197 },
    ">": { "start": "<", "end": ">", "score": 25137 },
  }

  const chunkCheck = (text: string): number => {
    const sepCounts = [0, 0, 0, 0]
    const stack = new Array<string>()

    text.split('')
    for (let char of text.split('')) {
      switch (char) {
        case '(':
          sepCounts[0] += 1
          stack.push(char)
          break
        case ')':
          sepCounts[0] -= 1
          if (stack.pop() !== '(') {
            sepCounts[0] = -1 // causes error to show below
          }
          break
        case '[':
          sepCounts[1] += 1
          stack.push(char)
          break
        case ']':
          sepCounts[1] -= 1
          if (stack.pop() !== '[') {
            sepCounts[1] = -1 // causes error to show below
          }
          break
        case '{':
          sepCounts[2] += 1
          stack.push(char)
          break
        case '}':
          sepCounts[2] -= 1
          if (stack.pop() !== '{') {
            sepCounts[2] = -1 // causes error to show below
          }
          break
        case '<':
          sepCounts[3] += 1
          stack.push(char)
          break
        case '>':
          sepCounts[3] -= 1
          if (stack.pop() !== '<') {
            sepCounts[3] = -1 // causes error to show below
          }
          break
      }
      if (sepCounts.includes(-1)) {
        // it found an error, set score and return.
        if (char in seperators) {
          let score = seperators[char].score
          console.log(`found problem: found ${char} ${score}`)
          return score
        }
      }
    }
      
    return 0
  }
    
  let score = 0
  const splitInput = input.split(/[\r\n]/).map(string => string.trim())

  splitInput.forEach((line) => {
    const penalty = chunkCheck(line)
    score += penalty
  })

  return score;
}
