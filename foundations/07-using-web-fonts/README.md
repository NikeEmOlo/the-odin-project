# Using Web Fonts

A short exercise from [The Odin Project](https://www.theodinproject.com/)
Foundations course on applying **self-hosted web fonts** to a page with
`@font-face`.

## Overview

A sample article ("Hipster ipsum") styled with two custom fonts loaded locally
rather than from a font service: one for headings and one for body text.

## Features

- Self-hosted fonts served from the local `fonts/` directory
- `@font-face` rules supplying both `woff2` and `woff` sources
- Separate typefaces for headings and paragraphs
- `font-display: swap` so text stays visible while fonts load

## Skills Practiced

- Declaring custom fonts with `@font-face`
- Providing multiple font formats for browser compatibility
- Applying font families to specific elements
- Understanding `font-display` and font-loading behaviour

## Files

- `web-font-start.html` — the marked-up article
- `web-font-start.css` — the styles and `@font-face` declarations
- `fonts/` — the font files (D-DIN family and UpperEastSide)

## Running It

Open `web-font-start.html` in a web browser (or serve it with something like
VSCode's Live Server extension).
