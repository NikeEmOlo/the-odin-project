// [0,0] [0,1] [0,2] [0,3] [0,4] [0,5] [0,6] [0,7]
// [1,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,6] [1,7]
// [2,0] [2,1] [2,2] [2,3] [2,4] [2,5] [2,6] [2,7]
// [3,0] [3,1] [3,2] [3,3] [3,4] [3,5] [3,6] [3,7]
// [4,0] [4,1] [4,2] [4,3] [4,4] [4,5] [4,6] [4,7]
// [5,0] [5,1] [5,2] [5,3] [5,4] [5,5] [5,6] [5,7]
// [6,0] [6,1] [6,2] [6,3] [6,4] [6,5] [6,6] [6,7]
// [7,0] [7,1] [7,2] [7,3] [7,4] [7,5] [7,6] [7,7]

// 0  1  2  3  4  5  6  7
//  8  9 10 11 12 13 14 15
// 16 17 18 19 20 21 22 23
// 24 25 26 27 28 29 30 31
// 32 33 34 35 36 37 38 39
// 40 41 42 43 44 45 46 47
// 48 49 50 51 52 53 54 55
// 56 57 58 59 60 61 62 63

//Calculates the index of all potential next moves
function calcNextMoves(index) {
    let [x, y] = getCoord(index)

    let l = [ // list of potential moves
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
            let i = getIndex([c, d])
            nextMoves.push(i)
        }})

    return nextMoves
}

//Turns coordinate into an index
function getIndex(coord) {
    let [x, y] = coord
    return x * 8 + y
}

//Turns index into a coordinate
function getCoord(index) {
    let x = Math.floor(index / 8)
    let y = index % 8
    return [x, y]
}

//Returns a node object
function node(data, parent) {
    return {data, parent}
}

function knightMoves(from, to) {
    let [x, y] = from
    let [a, b] = to
    let startIndex = getIndex(from)
    let visited = []
    let queue = []

    //Add the first node to the queue & visited tracker
    let start = node(startIndex, null)
    visited.push(startIndex)
    queue.push(start)
    console.log(queue)

    while (x !== a || y !== b) { // As long as we are not on the target tile

        // Find all potential moves
        let moves = calcNextMoves(queue[0].data)
        let newMoves = []
        let parent = queue.shift()

        // check if any of the next moves have already been visited
        moves.forEach((index) => {
            if (!visited.includes(index)) {
                visited.push(index)
                newMoves.push(node(index, parent))
            }
        })

        // push unvisited tiles to the queue
        if (newMoves === []) { // 
            break
        } else {
            queue.push(...newMoves) // Adds the new moves to the queue
            x = getCoord(queue[0].data)[0]
            y = getCoord(queue[0].data)[1]
        }
    }

    function calcSteps(target) {
        if (target.parent === null) {
            return { steps: 0, path: [getCoord(target.data)] }
        }
        let result = calcSteps(target.parent)
        return {
            steps: result.steps + 1,
            path: [...result.path, getCoord(target.data)]
        }
    }

    let result = calcSteps(queue[0])
    
    function buildOutput(result) {
        const noun = result.steps === 1 ? 'move' : 'moves';
        const pathStr = result.path.map(coord => `[${coord}]`).join(` `);
        return `You made it in ${result.steps} ${noun}! Here is your path: ${pathStr}`;
    }

    return buildOutput(result)
}

//==================================TESTING

// let board = createBoard(8)
// let newNode = node(27, null)
// console.log(newNode)
// //console.log(move([3, 3]))
// // console.table(createBoard(8))
// console.log(calcNextMoves(27))
// console.log(getCoord(27))
// console.log(getIndex([5, 4]))
console.log(knightMoves([7,3], [6, 2]))