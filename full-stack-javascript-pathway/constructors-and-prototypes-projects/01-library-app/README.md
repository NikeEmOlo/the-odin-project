# Library

A personal library web app with a clean, simple design. Add the books you own, browse them as a cover-art grid, and keep track of what you've read.

**Live demo:** https://nikeemolo.github.io/library-top/

This project was completed as part of [The Odin Project](https://www.theodinproject.com/) full stack JavaScript pathway, in the Constructors and Prototypes section. It is built with vanilla HTML, CSS, and JavaScript — no frameworks or libraries.

## Features

- **Add books** via a modal form, capturing title, author, ISBN, year published, and genre.
- **Automatic cover art** — the app looks up each book's cover from the [Open Library Covers API](https://openlibrary.org/dev/docs/api/covers) using its ISBN, falling back to a placeholder image when no cover is found.
- **Mark as read / unread** on each book card to track your reading progress.
- **Remove books** you no longer want in the library.
- **Alphabetical sorting** — the grid stays ordered by title as books are added.
- **Form validation** — the ISBN accepts 10 or 13 digits, the year expects four digits, and the author rejects numeric input.
- Ships with a starter shelf of books so the grid isn't empty on first load.

## How it works

- Each book is an instance of a `Book` class, holding its details plus a `read` flag, with `toggleRead()` and `deleteBook()` methods and a static `addBookToLibrary()` helper.
- Books live in a `myLibrary` array; the grid is re-rendered from that array whenever it changes.
- The "add book" dialog uses the native HTML `<dialog>` element and its `showModal()` / `close()` methods.

## Skills practiced

- Modelling data with an ES6 `class` (instance methods, a getter, and a `static` method)
- Storing objects in an array and keeping it sorted
- Rendering dynamic content and re-rendering on change
- Handling form submission with `event.preventDefault()`
- Opening and closing a native modal dialog
- Fetching remote images from a public API with a graceful fallback

## Limitations

There is no persistence yet — the library resets on page reload, as storage was outside the scope of this project.
