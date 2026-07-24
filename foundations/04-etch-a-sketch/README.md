# Etch-A-Sketch

A browser-based drawing pad built as part of
[The Odin Project](https://www.theodinproject.com/) Foundations course.

This was my second project as someone new to development, and my second time
writing JavaScript.

## Overview

Draw on a grid by clicking or dragging across it with the mouse. When the page
loads you're prompted to choose how detailed the grid should be, and a colour
picker lets you paint each cell in the colour of your choice.

## Features

- Prompt-driven grid size, from 1×1 up to 100×100, with input validation
- Click a single cell to fill it, or hold and drag to paint continuously
- Colour picker to choose the fill colour
- **Refresh** button to wipe the grid clean while keeping the same size
- **New canvas** button to reload and pick a new grid size

## Skills Practiced

- Dynamically generating and sizing DOM elements with JavaScript
- Mouse event handling (`mousedown`, `mouseup`, `mouseover`) to track drag state
- Input validation via a `prompt` loop
- Separating structure (HTML), styling (CSS), and behaviour (JS)
- Sensible, clear naming of classes and IDs

## Running It

Open `index.html` in a web browser (or serve it with something like VSCode's
Live Server extension).
