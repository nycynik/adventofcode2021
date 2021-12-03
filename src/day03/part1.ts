// Advent of Code - Day 3 - Part One

const countEntryValues = (entryList:Array<string>, entryWidth:number):Array<number> => {
  const entryCounts = new Array<number>(entryWidth).fill(0);

  for (const value of entryList) {
    for (let i = 0; i < value.length; i++) {
      entryCounts[i] += parseInt(value[i]);
    }
  }
  return entryCounts;
}

export function part1(input: string): number {

  const splitInput = input.split(/[\r\n]+/).map(string => string.trim())
  if (splitInput.length == 0) return 0;

  const inputReadingLength = splitInput[0].length

  // looop over each entry, and then loop over and count the 1s and 0s
  const entryCounts = countEntryValues(splitInput, inputReadingLength);

  let gammaBinary = ''
  let epsilonBinary = ''
  for (const entryCount of entryCounts) {
    const avg = (entryCount / splitInput.length)
    if (avg > 0.5) {
      gammaBinary += '1'
      epsilonBinary += '0'
    } else {
      gammaBinary += '0'
      epsilonBinary += '1'
    }
  }

  const gamma = parseInt(gammaBinary, 2);
  const epsilon = parseInt(epsilonBinary, 2);
  
  const powerConsumption = gamma * epsilon;
  console.log(`  ɣ: ${gamma}  ${gammaBinary}\n  ε: ${epsilon}  ${epsilonBinary}\n PC: ${powerConsumption}`)

  return powerConsumption;
  
}
