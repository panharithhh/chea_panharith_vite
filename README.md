# chea_panharith_vite

A developer profile page built by hand with Vite + React. First project of the course — the point is writing the components myself, not scaffolding them.

## What's in it

A single profile page in `react/my-app/src/App.jsx`:

- an `<h1>` with my name
- a `<p>` with my goal for this course
- a `StatusBadge` component that takes a prop and uses a ternary to show either "Open to work" (green) or "Busy learning" (gray)

## Stack

- React 19
- Vite 8
- oxlint

## Setup

```bash
git clone <repo-url>
cd techpreneur/react/my-app
npm install
npm run dev
```

Dev server runs at http://localhost:5173.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Run oxlint |

## Structure

```
react/my-app/
  src/
    App.jsx      profile page and StatusBadge
    App.css      styles
    main.jsx     entry point
  index.html
  vite.config.js
```
# cheapanharith_Task-2-Style-Compose-the-Profile-Page-Lessons-1.6-1.9-
