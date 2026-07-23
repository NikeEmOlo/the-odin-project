# Linked Lists
Completed as part of The Odin Project full-stack development course

###### Javascript - Data Structures module

## About
A singly linked list built from scratch, where each [`Node`](linkedList.js#L2) holds a value and a pointer to the next node, and the [`LinkedList`](linkedList.js#L11) class tracks the head. Supports the full set of common list operations plus two extra-credit methods for inserting and removing at arbitrary positions.

```js
const list = new LinkedList()
list.append("Amy")
list.append("Joe")
list.prepend("Aaron")
list.size()              // 3
list.toString()          // "Aaron >> Amy >> Joe >> null"
list.contains("Joe")     // true
list.findIndex("Amy")    // 1
list.insertAt(1, "Persephone", "Maggie")
list.removeAt(0)
```

## How it works
- **Adding** — [`append`](linkedList.js#L17) walks to the tail and links a new node on the end; [`prepend`](linkedList.js#L30) puts a new node in front of the head.
- **Reading** — [`size`](linkedList.js#L40), [`getHead`](linkedList.js#L55), [`getTail`](linkedList.js#L64) and [`at`](linkedList.js#L77) traverse the chain to count or fetch nodes.
- **Searching** — [`contains`](linkedList.js#L111) returns a boolean; [`findIndex`](linkedList.js#L128) returns the position of a value (or `-1`).
- **Removing** — [`pop`](linkedList.js#L99) detaches the head node.
- **Display** — [`toString`](linkedList.js#L147) renders the list as `value >> value >> null`.
- **Extra credit** — [`insertAt`](linkedList.js#L163) splices one or more values in at a given index (prepending in reverse for index `0`), and [`removeAt`](linkedList.js#L192) unlinks the node at an index. Both guard against out-of-bounds indices with a `RangeError`.

## Usage
```bash
node linkedList.js
```
Uncomment the testing block at the bottom of the file to build a list and try the methods.

## Learnings
Getting comfortable with pointer manipulation was the core challenge — most operations come down to carefully re-wiring `nextNode` references without losing the rest of the chain, especially the splice logic in `insertAt` and `removeAt`. This implementation went on to be reused as the bucket type in my later [HashMap project](../hashMap/hashMap.js).
