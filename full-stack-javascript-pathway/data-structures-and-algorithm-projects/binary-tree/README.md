# Balanced Binary Search Tree
Completed as part of The Odin Project full-stack development course

###### Javascript - Data Structures module

## About
A self-balancing binary search tree built from an array of values. Duplicates are stripped and the input is sorted before the tree is constructed, so it always starts perfectly balanced. The class supports insertion, deletion, searching, every common traversal order, and utilities for measuring and restoring balance.

```js
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
prettyPrint(tree.root)

tree.insert(10)
tree.delete(23)
tree.inOrderForEach(value => value)   // sorted order
tree.isBalanced()                     // true / false
tree.rebalance()                      // rebuild balanced from current values
```

## How it works
The tree is modelled with a simple [`Node`](binary-tree.js#L1) class (`data`, `left`, `right`) and a [`Tree`](binary-tree.js#L9) wrapper that holds the root.

- [`buildTree`](binary-tree.js#L194) turns an array into a balanced BST: it de-duplicates via a `Set`, sorts, then recursively picks the middle element as each subtree's root so both halves stay even in size.
- **Insert / delete** — [`insert`](binary-tree.js#L40) walks left/right by comparison to find the empty slot. [`delete`](binary-tree.js#L58) handles the three classic cases (leaf, single child, two children), replacing a two-child node with its in-order successor (leftmost node of the right subtree).
- **Search** — [`includes`](binary-tree.js#L14) returns a boolean; [`findNode`](binary-tree.js#L27) returns the node itself.
- **Traversals** — breadth-first [`levelOrderForEach`](binary-tree.js#L87) uses a queue; the depth-first [`inOrderForEach`](binary-tree.js#L106), [`preOrderForEach`](binary-tree.js#L121) and [`postOrderForEach`](binary-tree.js#L136) recurse and collect the callback results.
- **Measuring** — [`depth`](binary-tree.js#L151) counts edges from the root to a value; [`height`](binary-tree.js#L163) counts edges from a value down to its deepest leaf.
- **Balance** — [`isBalanced`](binary-tree.js#L176) checks that no node's subtrees differ in height by more than one; [`rebalance`](binary-tree.js#L187) flattens the tree in-order and rebuilds it with `buildTree`.

[`prettyPrint`](binary-tree.js#L216) renders the tree to the console for inspection.

## Usage
```bash
node binary-tree.js
```
Uncomment and edit the testing block at the bottom of the file to build a tree and try the methods.

## Learnings
Recursion is the through-line of the whole structure — nearly every method is the same "base case + recurse on left/right" shape, which made each new operation quicker to reason about than the last. The trickiest piece was two-child deletion; reaching for the in-order successor to keep the BST ordering intact was the key insight. Rebalancing turned out to be almost free once `buildTree` and an in-order traversal existed — flatten, then rebuild.
