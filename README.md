# GramCourses Frontend – Vite + React + Tailwind

This project is a Vite-powered React + TypeScript app styled with Tailwind CSS. It showcases a landing page and additional pages with routing.

## Available Scripts

- `npm install` – install dependencies
- `npm run dev` – start the development server at `http://localhost:5173`
- `npm run build` – build for production
- `npm test` – run unit tests with Jest
- `npm run test:e2e` – run Cypress end‑to‑end tests (requires Xvfb in CI)

## Features

- Fixed gradient navbar with active link styling using React Router
- Animated landing page sections (`Hero`, `SeenOn`, `VouchSection`)
- Dedicated pages for **Features**, **Pricing**, and **Creators**
- Basic Jest and Cypress setup for future tests

## Folder Structure

```
src/
  components/         Shared UI components
  pages/              Route components
  App.tsx             Application routes
  main.tsx            Entry point
```

Run `npm run dev` and navigate between Home, Features, Pricing, and Creators to see the layout in action.
