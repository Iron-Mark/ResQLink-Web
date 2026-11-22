# Repository Guidelines

## Project Structure & Module Organization
This repo is a Vite (`6.4.5`) + React (`^18.3.1`) + TypeScript + Tailwind CSS v4 frontend. Main app files are `src/main.tsx` and `src/App.tsx`. UI code is organized under `src/components/`, `src/pages/`, `src/styles/`, and `src/utils/`; images/assets are in `src/assets/` and static public files in `public/`. Build output goes to `build/`, with container/static hosting support in `Dockerfile`, `nginx.conf`, `vercel.json`, `run.sh`, and `run.ps1`.

## Build, Test, and Development Commands
- `npm install`: install project dependencies.
- `npm run dev`: start the Vite development server.
- `npm run build`: create a production build.
- `npm test`: run the Vitest unit suite once.
- `npm run check`: run tests followed by the production build.

## Coding Style & Naming Conventions
Use 2-space indentation and TypeScript/TSX modules. React components use `PascalCase`; route/page files may use `kebab-case.tsx` (for example `terms-and-conditions.tsx`). Keep reusable UI in `src/components/` and route-specific composition in `src/pages/`.

## Testing Guidelines
Vitest is configured for unit tests. Keep focused tests next to the module under test using the `*.test.ts` or `*.test.tsx` suffix, and run `npm run check` before opening a PR. For UI changes, include manual verification notes for desktop and mobile layouts.

## Commit & Pull Request Guidelines
History is mostly imperative (`Fix ...`, `Refactor ...`, `Enhance ...`). Keep subject lines concise and scoped to one change. PRs should include screenshots for visual changes, affected pages/components, and any SEO/static asset updates (`public/`, metadata, sitemap/robots).


## Repository Hygiene Refresh
- Refreshed and verified on 2026-11-23.
- `npm run check` runs `vitest run` (`vitest ^4.1.12`) followed by `vite build`; `Dockerfile` and `nginx.conf` provide the current npm/nginx static build path (`e9d4d13`).
