# HashMap
Completed as part of The Odin Project full-stack development course

###### Javascript - Data Structures module

## About
My first attempt at building hash maps from scratch. The file contains two implementations:
1. [`HashMap`](hashMap.js#L114) — uses **linked lists as buckets** for collision handling, drawing on my earlier [linked list project](../linked-list/linkedList.js).
2. [`HashSet`](hashMap.js#L265) — extra credit; behaves like the HashMap but stores keys only (no values), using JavaScript `Set`s as buckets for additional practice.

```js
const hm = new HashMap()
hm.set('apple', 'red')
hm.set('banana', 'yellow')
hm.get('apple')     // 'red'
hm.has('banana')    // true
hm.remove('apple')
hm.keys()           // ['banana', ...]
hm.entries()        // [['banana', 'yellow'], ...]
```

## How it works
- [`hash`](hashMap.js#L127) converts a string key into a bucket index using a rolling hash with prime multiplier `31`, modulo the current capacity.
- Collisions are resolved by **separate chaining**: each bucket is a [`LinkedList`](hashMap.js#L1), and colliding entries are stored as [`Node`](hashMap.js#L107)s within it.
- [`set`](hashMap.js#L141) inserts a new key or updates the value of an existing one; [`get`](hashMap.js#L159), [`has`](hashMap.js#L165) and [`remove`](hashMap.js#L171) locate entries via the bucket's linked-list search methods.
- [`keys`](hashMap.js#L195), [`values`](hashMap.js#L213) and [`entries`](hashMap.js#L230) walk every bucket to collect their contents.
- **Dynamic resizing** — [`checkLoadCapacity`](hashMap.js#L248) runs after each insert; once the load factor (`0.75` by default) is exceeded it doubles the capacity and rehashes every entry into a fresh set of buckets.

## Usage
```bash
node hashMap.js
```
Uncomment the testing block at the bottom of the file to populate a map (or set) and inspect it.

## Learnings
Development could have been smoother with the use of TDD, which I will try to implement in the next project. I found considerable bugs on review of the project, which was time-consuming to rectify retrospectively. Reusing my own linked-list implementation as the bucket type was a satisfying payoff from the previous project, and made collision handling much clearer to reason about.
