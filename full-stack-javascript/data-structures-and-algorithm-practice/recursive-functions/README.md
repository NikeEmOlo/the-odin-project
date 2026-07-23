# Recursive Functions
Completed as part of The Odin Project full-stack development course

###### Javascript - Data Structures module

## About
Small warm-up exercises for getting comfortable with recursion — each solves a problem by having a function call itself and building toward a base case.

## The functions
- [`factorial(n)`](factorial.js#L1) — returns `n!` by multiplying `n` down to its base case of `1`.
  ```js
  factorial(4)   // 24
  ```
- [`intRange(x, y)`](range-of-integers.js#L1) — returns an array of the integers strictly between `x` and `y`, built by prepending each value onto the result of the recursive call.
  ```js
  intRange(2, 6) // [3, 4, 5]
  ```

## Usage
```bash
node factorial.js
node range-of-integers.js
```

## Learnings
These exercises drove home the two ingredients every recursive function needs: a clear base case to stop the recursion, and a step that moves each call closer to it. Seeing the same shape reused for both a numeric accumulation (`factorial`) and building up an array (`intRange`) made the pattern feel natural before tackling the recursion-heavy tree and graph projects.
