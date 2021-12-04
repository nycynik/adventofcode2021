
export class bingo {

    board: Array<Array<number>>
    marked: Array<Array<string>>
    won: boolean

    constructor(initialBoard:Array<Array<number>>) {
        this.board = initialBoard
        this.marked = new Array<Array<string>>()
        for (const row of initialBoard) {
            this.marked.push([' ', ' ', ' ', ' ', ' '])
        }
        this.won = false
    }

    transpose(matrix:Array<Array<any>>) {
        return matrix[0].map((col, i) => matrix.map(row => row[i]));
    }
      
    render() {
        let boardRender = '  B   I   N   G   O\n'
        if (this.won) {
            boardRender += '------- BINGO! ------\n'
        }
        for (let rowIndex = 0; rowIndex < this.board.length; rowIndex++) {
            for (let colIndex = 0; colIndex < this.board[rowIndex].length; colIndex++) {
                boardRender += ` ${("  " + this.board[rowIndex][colIndex]).slice(-2)}${this.marked[rowIndex][colIndex]}`    
            }
            boardRender += `\n`
        }
        console.log(boardRender)
    }

    callOut(number: number) {
        for (let rowIndex = 0; rowIndex < this.board.length; rowIndex++) {
            for (let colIndex = 0; colIndex < this.board[rowIndex].length; colIndex++) {
                if (this.board[rowIndex][colIndex] === number) {
                    this.marked[rowIndex][colIndex] = '*'
                }
            }
        }
    }

    checkWin() {

        // check across
        for (const row of this.marked) {
            if (row.indexOf(' ') === -1) {
                this.won = true // winner!
                return (this.won)
            }
        }
            
        // check up and down
        for (const row of this.transpose(this.marked)) {
            if (row.indexOf(' ') === -1) {
                this.won = true // winner!
                return (this.won)
            }
        }

        // no win found. 
        this.won = false
        return this.won
    }

    // returns sum of all unmarked numbers on the board 
    score() {
        let sum = 0
        for (let rowIndex = 0; rowIndex < this.board.length; rowIndex++) {
            for (let colIndex = 0; colIndex < this.board[rowIndex].length; colIndex++) {
                if (this.marked[rowIndex][colIndex] === ' ') { // unmarked
                    sum += this.board[rowIndex][colIndex]
                }
            }
        }
        return sum;
    }
}