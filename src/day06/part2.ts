// Advent of Code - Day 6 - Part Two

export function part2(input: string): number {

  function simFish(numDays: number, numFishInEachState:Array<number>):number {
    for (let x = 0; x < numDays; x++) {
      const newFish = numFishInEachState.shift() || 0 // get number about to spawn 
      numFishInEachState[6] += newFish // they reset
      numFishInEachState.push(newFish) // and hav kids
      console.log(`${x+1} : ${numFishInEachState}`)
    }
    return numFishInEachState.reduce((a, b) => a + b)
  }

  const fish = input.trim().split(',').map(Number)

  console.log(`Initial State: ${fish}`)
  const numFishInEachState = [0,0,0,0,0,0,0,0,0]
  fish.map((val, index) => {
    numFishInEachState[val] += 1
  })
  
  // now do the calucation.
  const totalFish = simFish(256, numFishInEachState)

  return totalFish;
}
