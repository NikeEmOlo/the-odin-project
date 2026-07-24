# Calculator

The final project of [The Odin Project](https://www.theodinproject.com/)
Foundations course — a basic on-screen calculator built with HTML, CSS, and
JavaScript.

## Overview

A four-function calculator with a keypad and a running display. Input works
from both the on-screen buttons and the keyboard, and results can be carried
forward into the next calculation.

## Features

- Addition, subtraction, multiplication, and division
- Keyboard input as well as on-screen buttons
- Handles double negatives, e.g. `10 - -4 = 14`
- Continues from the most recent total
- Prevents multiple decimal points in a single number
- Round the current total to the nearest integer

## Buttons

| Button | Action                                          |
| ------ | ----------------------------------------------- |
| `RND`  | Round the total to the nearest integer          |
| `C`    | Clear all                                       |
| `CE`   | Clear last entry (last number or last operator) |
| `.`    | Insert a decimal point                          |
| `=`    | Evaluate the current expression                 |

## Skills Practiced

- Building the four arithmetic operations and dispatching them from an `operate` step
- Managing calculator and history state in objects
- Handling both click and keyboard events for the same actions
- Guarding against invalid input (extra decimals, chained operators)

## Running It

Open `index.html` in a web browser (or serve it with something like VSCode's
Live Server extension).
