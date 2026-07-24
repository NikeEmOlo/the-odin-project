# Commit Message Style Guide

A quick reference for writing clear, conventional commit messages. Based on
[The Odin Project](https://www.theodinproject.com/lessons/foundations-commit-messages)
guidance and the [Conventional Commits](https://www.conventionalcommits.org/) spec.

## The shape of a commit message

```
<type>: <short summary>
<blank line>
<optional body explaining what and why>
<blank line>
<optional footer(s)>
```

Example:

```
feat: add mark-as-read toggle to book cards

Users can now track which books they've finished. Clicking the button
flips the book's `read` flag and updates the label between "Mark as
read" and "Finished".

Closes #12
```

## The 7 rules (from The Odin Project)

1. **Separate subject from body with a blank line.** Tools rely on this to
   tell the summary apart from the details.
2. **Limit the subject line to 50 characters.** Keep it scannable. Treat 50 as
   the target and 72 as the hard limit.
3. **Capitalize the subject line.** Start with a capital letter.
   *(Note: with Conventional Commits the description after the `type:` is
   usually lowercase — see the clash below.)*
4. **Do not end the subject line with a period.** It's a title, not a sentence.
5. **Use the imperative mood in the subject line.** Write it as a command:
   "Add feature", not "Added feature" or "Adds feature". A good check: the line
   should finish the sentence *"If applied, this commit will ___"*.
6. **Wrap the body at 72 characters.** Git doesn't wrap text for you, so add
   your own line breaks around the 72-character mark for readable logs.
7. **Use the body to explain *what* and *why*, not *how*.** The code already
   shows *how*. Your future self wants to know the reasoning.

## Line length at a glance

| Part    | Limit                | Why                                      |
| ------- | -------------------- | ---------------------------------------- |
| Subject | 50 chars (72 max)    | Stays readable in `git log`, GitHub, etc |
| Body    | wrap each line at 72 | Leaves room for indentation in tools     |

## Conventional Commits: the `type:` prefix

Start the subject with a type so the history is easy to scan and can be
automated (changelogs, versioning). Format: `type: description` or, with an
optional scope, `type(scope): description`.

```
docs: expand README for library app
refactor(library-app): rename practice folders to "-projects"
fix: correct trash icon path so it loads locally
```

### Types

- **build**: Changes that affect the build system or external dependencies
  (example scopes: gulp, broccoli, npm)
- **ci**: Changes to CI configuration files and scripts
  (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
  (renaming, moving files, restructuring folders, tidying code)
- **style**: Changes that do not affect the meaning of the code
  (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
- **chore**: Housekeeping that doesn't touch source behaviour
  (dependency bumps, `.gitignore`, tooling, repo meta)

### Breaking changes

Signal a breaking change by adding `!` after the type, and/or a
`BREAKING CHANGE:` footer:

```
feat!: drop support for Node 14

BREAKING CHANGE: minimum supported Node version is now 18.
```

## The capitalization clash (good to know)

Rule 3 above says *capitalize the subject*. But Conventional Commits usually
writes the description in **lowercase** after the `type:`. These two conventions
pull in opposite directions. Pick one and stay consistent — a common,
practical choice is:

```
type: lowercase description in the imperative mood
```

...applying every other rule (imperative, no period, 50/72 limits) as normal.

## Quick checklist before committing

- [ ] Does the subject start with the right `type`?
- [ ] Is the subject ≤ 50 characters and in the imperative mood?
- [ ] No period at the end of the subject?
- [ ] Blank line before the body (if there is one)?
- [ ] Is the body wrapped at 72 characters and explaining *why*?
- [ ] Does this commit do **one** logical thing? If not, split it.

## Tip: one commit, one purpose

If you can't describe the change with a single type, that's usually a sign it
should be **more than one commit**. For example, importing new code *and*
renaming folders *and* updating docs are three separate commits
(`feat`/`refactor`/`docs`), not one.
