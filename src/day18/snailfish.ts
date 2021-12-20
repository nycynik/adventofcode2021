

export const addSnailfish = (sNumberA: string, sNumberB: string): string => {
   return `[${sNumberA},${sNumberB}]`
}

const needsExplode = (sNumber: string): number => {
    let bracketCount = 0
    let index = 0
    for (const c of sNumber) {
        if (c === '[') bracketCount++
        if (c === ']') bracketCount--
        if (bracketCount === 5) {
            return index
        }
        index++
    }
    return -1
}

export const getDigit = (sNumber: string, start: number, direction = 1): number => {

    let end = start
    while (end >= 0 && end <= sNumber.length) {
        if (sNumber[end] !== '[' && sNumber[end] !== ']' && sNumber[end] !== ',') {
            end += direction
        } else
            break
    }
    if (direction === -1)
        end += 1
    console.log('se', direction, start,end, sNumber.substring(Math.min(start, end), Math.max(start, end)))

    return parseInt(sNumber.substring(Math.min(start, end), Math.max(start, end)))
}

const explodeSnailfish = (sNumber: string, explodeLocation: number) => {
    const nextBracket = sNumber.indexOf(']', explodeLocation)
    const presnail = sNumber.substring(0, explodeLocation - 1)
    const snail = JSON.parse(sNumber.substring(explodeLocation, nextBracket + 1))
    const postsnail = sNumber.substring(nextBracket + 1)
    const postDigitStart = postsnail.search(/\d/)
    const prevDigitStart = presnail.split('').reverse().join('').search(/\d/)

    const prevNumber = getDigit(sNumber, postDigitStart)
    const postNumber = getDigit(sNumber, postDigitStart, -1)

    console.log(prevDigitStart, presnail, snail, postsnail, postDigitStart, postNumber)

    return '[]'
    // reducedSnail = ''
    // return reducedSnail
}

/**
 * To reduce a snailfish number, you must repeatedly do the first action in this 
 * list that applies to the snailfish number:
 *  - If any pair is nested inside four pairs, the leftmost such pair explodes.
 *  - If any regular number is 10 or greater, the leftmost such regular number splits.
 * 
 * Once no action in the above list applies, the snailfish number is reduced.
 * 
 * @param sNumber snailfish number to reduce
 */
export const reduceSnailfish = (sNumber: string): string => {
    let isDirty = false
    let reducedSnailfish = sNumber
    
    const explodeLocation = needsExplode(sNumber)

    if (explodeLocation !== -1) {
        // we have to explode
        isDirty = true
        reducedSnailfish = explodeSnailfish(sNumber, explodeLocation) 
    } else {
        // check for splits
    }
    if (isDirty) 
        return reduceSnailfish(reducedSnailfish)
    
    const snNum = JSON.parse(reducedSnailfish)

    return JSON.stringify(snNum)
}