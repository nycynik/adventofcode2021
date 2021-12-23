// Advent of Code - Day 20 - Part One

export function pixelCounter(input: Array<string>): number {
  let litPixels = 0

  for (const line of input) {
    for (const pixel of line) {
      if (pixel === '#') {
        litPixels += 1
      }
    }
  }
  return litPixels
}

function expandImage(input: Array<string>, emptySpace:string): Array<string> {
  const expandedImage = new Array<string>()

  const w = input[0].length
  const h = input.length
  const padLen = 3

  for (let i = 0; i < padLen; i++)
    expandedImage.push(emptySpace.repeat(w + (padLen*2)))
  for (const line of input) {
    expandedImage.push(emptySpace.repeat(w + padLen) + line + emptySpace.repeat(w + padLen))
  }
  for (let i = 0; i < padLen; i++)
    expandedImage.push(emptySpace.repeat(w + (padLen*2)))
  
  return expandedImage
}

export function enhanceImage(image: Array<string>, enhancement: string): Array<string> {
  const enhancedImage = new Array<string>()

  const w = image[0].length
  const h = image.length

  for (let x = 0; x < h - 2; x++) {
    let enhancedRow = ''
    for (let y = 0; y < w - 2; y++) {

      const binary = parseInt((image[x].substring(y, y + 3) +
        image[x + 1].substring(y, y + 3) +
        image[x + 2].substring(y, y + 3)).replaceAll('#', '1').replaceAll('.', '0'), 2)
      enhancedRow += enhancement[binary]
      // console.log(binary)
      // console.log(image[x].substring(y, y+3) + '\n' + image[x+1].substring(y, y+3) + '\n' + image[x+2].substring(y, y+3) + '\n')
    }
    enhancedImage.push(enhancedRow)
  }
  return enhancedImage
}

export function part1(input: string): number {
  const splitInput = input.split(/[\r\n]/).map(string => string.trim())
  const enhancement = splitInput[0]

  const image = []
  for (let x = 2; x < splitInput.length; x++) {
    image.push(splitInput[x])
  }

  let enhancedImage = [...image]
  for (let x = 0; x < 2; x++) {
    const emptySpace = x%2==0 ? '.' : '#'
    enhancedImage = enhanceImage(expandImage(enhancedImage, emptySpace), enhancement)
    console.log(enhancedImage)
  }
  

  return pixelCounter(enhancedImage);
}
