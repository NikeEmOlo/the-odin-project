# Knights Travails
Completed as part of The Odin Project full-stack development course

###### Javascript - Data Structures module

## About
Given a starting square and a target square, `knightMoves` finds the **shortest** sequence of legal knight moves between them on a standard 8x8 chessboard, and returns the path taken.

```js
knightMoves([0, 0], [7, 7])
// You made it in 6 moves! Here is your path: [0,0] [2,1] [4,2] [6,3] [5,5] [7,6] [7,7]
```

Squares are given as `[x, y]` coordinates, both in the range `0–7`.

## How it works
The board is treated as a graph: every square is a node, and edges connect squares a knight can legally jump between. Finding the fewest moves is therefore a shortest-path problem, solved with a **breadth-first search (BFS)**.

- Each square is mapped to a single integer index (`0–63`) via [`getIndex`](knightMoves.js#L32) / [`getCoord`](knightMoves.js#L38), keeping the queue and visited tracker lightweight.
- [`calcNextMoves`](knightMoves.js#L2) generates the up-to-8 knight moves from a square, discarding any that fall off the board.
- The search stores each square as a [`node`](knightMoves.js#L45) holding its own index and a reference to its `parent`. Because BFS reaches every square by the shortest route first, walking the parent chain back from the target reconstructs the shortest path — done recursively in [`calcSteps`](knightMoves.js#L86).
- A `visited` list prevents squares from being re-queued, so the search never loops.

## Usage
```bash
node knightMoves.js
```
Edit the `knightMoves([...], [...])` call at the bottom of the file to try different start and target squares.

## Learnings
This project made the connection between abstract graph theory and a concrete problem click. The chessboard is a graph, and BFS falls naturally out of wanting the *shortest* path rather than any path. I was able to practice a little bit of recursion when counting the nodes in a linked list, following on from the previous project. On review, I noticed I could have improved the efficiency of the code by using a Set to save unique values to the visited array.
