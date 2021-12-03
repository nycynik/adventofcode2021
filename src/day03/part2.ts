// Advent of Code - Day 3 - Part Two

const countEntryValues = (entryList:Array<string>, entryWidth:number):Array<number> => {
  const entryCounts = new Array<number>(entryWidth).fill(0);

  for (const value of entryList) {
    for (let i = 0; i < value.length; i++) {
      entryCounts[i] += parseInt(value[i]);
    }
  }
  return entryCounts;
}

export function part2(input: string): number {
  const splitInput = input.split(/[\r\n]+/).map(string => string.trim())
  if (splitInput.length == 0) return 0;

  const inputReadingLength = splitInput[0].length

  // looop over each entry, and then loop over and count the 1s and 0s

  let o2Binary = ''
  let o2Remaining = splitInput.slice()
  let co2Binary = ''
  let co2Remaining = splitInput.slice()
  let o2Stop = false
  let co2Stop = false

  if (!o2Stop) {
    for (let x = 0; x < inputReadingLength; x++) {

      // o2
      if (!o2Stop) {
        const o2entryCounts = countEntryValues(o2Remaining, inputReadingLength);
        const o2avg = (o2entryCounts[x] / o2Remaining.length)
        if (o2avg < 0.5) {
          o2Binary += '0'
        } else {
          o2Binary += '1'
        }
      
        o2Remaining = o2Remaining.filter((entry) => entry.startsWith(o2Binary));
        if (o2Remaining.length <= 1) {
          o2Stop = true
          o2Binary = o2Remaining[0]
        }
      }

      // co2
      if (!co2Stop) {
        const co2EntryCounts = countEntryValues(co2Remaining, inputReadingLength);
        const co2avg = (co2EntryCounts[x] / co2Remaining.length)
        if (co2avg < 0.5) {
          co2Binary += '1'
        } else {
          co2Binary += '0'
        }
        
        co2Remaining = co2Remaining.filter((entry) => entry.startsWith(co2Binary));
        console.log(`co2: ${co2Binary} ${co2Remaining[0]} ${co2Remaining.length}`)
        if (co2Remaining.length <= 1) {
          co2Stop = true
          co2Binary = co2Remaining[0]
        }
      }
    }
  }

  const o2 = parseInt(o2Binary, 2);
  const co2 = parseInt(co2Binary, 2);
  
  const lifeSupportRating = o2 * co2;
  console.log(`  ɣ: ${o2}  ${o2Binary}\n  ε: ${co2}  ${co2Binary}`)

  return lifeSupportRating;

  
}
