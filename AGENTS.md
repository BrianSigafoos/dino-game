# AGENTS.md

## Project Overview

Dino Game is a static one page flash card site for kids that serves dinosaur
facts from `docs/data.js` and ships on GitHub Pages.

## Development Commands

```bash
# Run a local server
python3 -m http.server --directory docs 8000
```

## Formatting

Run `ffx` to auto-format all files after every code change. Don't manually
format code.

## Project Conventions

- Keep the site static and dependency free.
- Keep the card copy short, kid friendly, and mobile first.
- Preserve the dark mode toggle behavior (system default, user override).
- Store flash card data in `docs/data.js` (app logic in `docs/app.js`).
