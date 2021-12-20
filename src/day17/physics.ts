
export class trench {
    x: Array<number>
    y: Array<number>

    constructor(xMin:number, xMax:number, yMin:number, yMax:number) {
        this.x = [xMin, xMax]
        this.y = [yMin, yMax]
    }
}

export const parseInput = (input: string): trench => {

    const updatedInput = input.trim().substring(13).split(',')
    const xRange = updatedInput[0].substring(2).split('..').map(Number)
    const yRange = updatedInput[1].trim().substring(2).split('..').map(Number)

    return new trench(
        Math.min(xRange[1], xRange[0]), Math.max(xRange[1], xRange[0]),
        Math.min(yRange[1], yRange[0]), Math.max(yRange[1], yRange[0]))
}

const takeShot = (x:number, y:number, t:trench): number => {

    let xv = x
    let yv = y

    let xActual = 0
    let yActual = 0

    const minY = t.y[0]
    let maxY = yActual

    while (yActual > minY) {
        xActual += xv
        yActual += yv

        if (yActual > maxY) {
            maxY = yActual
        }

        xv += xv === 0 ? 0 : xv > 0 ? -1 : 1
        yv -= 1

        if (xActual >= t.x[0] && xActual <= t.x[1] &&
            yActual >= t.y[0] && yActual <= t.y[1]) {
            return maxY
        }
    }

    return -100000
}

export const getAllShots = (input:trench): Array<Array<number>> => {
    const shots = new Array<Array<number>>()

    const minY = input.y[0]
    const maxX = input.x[1]

    for (let x = 0; x <= maxX + 1; x++) {
        for (let y = minY; y <= 1000; y++) {
            const maxY = takeShot(x, y, input);
            if (maxY != -100000) {
                shots.push([maxY, x, y]);
            }
        }
    }

    return shots
}