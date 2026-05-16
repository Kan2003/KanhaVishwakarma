# Kanha Vishwakarma — Portfolio (React + TypeScript)

Single-page portfolio built with Vite, React 18 and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    tweaks/        — Reusable tweak controls (TweaksPanel, sliders, etc.)
    Nav.tsx        — Floating menu card (top-left)
    Hero.tsx       — Hero with parallax + reveal
    ...
  hooks/
    useTweaks.ts   — Tweak state + persistence
    useReveal.ts   — Scroll-reveal observer
  data.ts          — Portfolio content (single source of truth)
  styles.css       — All styles
  App.tsx
  main.tsx
public/
  assets/
    Kanha_Vishwakarma_Resume.pdf
```

Edit `src/data.ts` to change content. Edit `src/styles.css` to tweak design tokens.
