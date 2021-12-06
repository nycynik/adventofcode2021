// Advent of Code - Day 6 - Part One

export function part1(input: string): number {

  const fish = input.trim().split(',').map(Number)

  console.log(`Initial State: ${fish}`)

  const fishCountAfter80Days = []
  for (let startCount = 0; startCount <= 8; startCount++) {
    let simFish = [startCount]
    let day = 1
    for (let x = 0; x < 80; x++) {
      const newFish = new Array<number>()
      for (let f = 0; f < simFish.length; f++) {
        simFish[f] -= 1
        if (simFish[f] < 0) {
          simFish[f] = 6
          newFish.push(8) 
        }
      }
      
      simFish = simFish.concat(...newFish)

      day += 1
    }
    fishCountAfter80Days.push(simFish.length)
    //console.log(`${startCount} : ${simFish.length}`)
  }
  
  // now do the calucation.
  let totalFish = 0
  for (let actualFish = 0; actualFish < fish.length; actualFish++) {
    totalFish+=fishCountAfter80Days[fish[actualFish]]
  }

  return totalFish;
}
