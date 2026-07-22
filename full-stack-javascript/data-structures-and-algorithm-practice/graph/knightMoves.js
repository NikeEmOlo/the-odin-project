// [0,0] [0,1] [0,2] [0,3] [0,4] [0,5] [0,6] [0,7]
// [1,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,6] [1,7]
// [2,0] [2,1] [2,2] [2,3] [2,4] [2,5] [2,6] [2,7]
// [3,0] [3,1] [3,2] [3,3] [3,4] [3,5] [3,6] [3,7]
// [4,0] [4,1] [4,2] [4,3] [4,4] [4,5] [4,6] [4,7]
// [5,0] [5,1] [5,2] [5,3] [5,4] [5,5] [5,6] [5,7]
// [6,0] [6,1] [6,2] [6,3] [6,4] [6,5] [6,6] [6,7]
// [7,0] [7,1] [7,2] [7,3] [7,4] [7,5] [7,6] [7,7]

// created the "board" where n = number of rows and columns
function createBoard(n) {
    let board = []
    let y = 0
    let x = 0
    for (let i = 0; i < (n * n); i++) {
        x = Math.floor(i / n)
        y = i % n
        board.push([x, y])
    }
    return board
}

//Now we need to be able to move between the coordinates
function calcNextMoves(x, y) {
    let l = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [-1, 2],
        [1, -2],
        [-1, -2],
    ]

    let nextMoves = []
    l.forEach(([a, b]) => {
        let c = x + a
        let d = y + b
    
        if (c < 0 || c > 7 || d < 0 || d > 7) {
            return
        } else {
            let i = c * 8 + d
            nextMoves.push(i)
        }})

    return nextMoves
}

//console.log(move([3, 3]))
// console.table(createBoard(8))
console.log(calcNextMoves(3, 3))