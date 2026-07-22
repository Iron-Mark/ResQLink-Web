# AGENTS.md

## Scope

ResQLink-Web — public landing page + interactive LGU dashboard demo for the
ResQLink emergency response platform (live at resqlink.org). Part of the
`ResQLink - Workspace` monorepo, archived under `zStale-Projects`. On branch
`main`. Workspace-wide policy lives in `C:\Codes Local\AGENTS.md` — not
duplicated here.

## Environment / Stack

- Vite 6 + React 18 + TypeScript; Tailwind CSS 4 + shadcn/ui (Radix
  primitives), react-router 7, recharts, lucide-react.
- Node.js v18+. npm is the working package manager (`package-lock.json`);
  `bun.lockb` also exists and is used only by the Dockerfile (Bun build
  stage → Nginx serving static output).
- Dev server runs on port 3000 and auto-opens the browser (`vite.config.ts`).
  Build output goes to `build/`, not `dist/`.
- Layout: `src/main.tsx` (routes `/` and `/terms-and-conditions`),
  `src/App.tsx`, plus `src/components/`, `src/context/`, `src/hooks/`,
  `src/pages/`, `src/styles/`, `src/utils/`, `src/assets/`; static files in
  `public/` (robots.txt, sitemap.xml, recovery.html,
  `.well-known/assetlinks.json`).

## Key commands

| Task             | Command         |
| ---------------- | --------------- |
| Install          | `npm install`   |
| Dev server       | `npm run dev`   |
| Production build | `npm run build` |

- `dev` and `build` are the only scripts in `package.json` — there is no
  lint or test script.
- `run.sh` / `run.ps1` wrap the npm scripts and exit if `.env` is missing.
  Their `preview` mode calls `npm run preview`, which does not exist — avoid.

## Secrets / env

- `.env` (present, git-ignored) and tracked `.env.example` at repo root.
  Key names: `VITE_APPWRITE_PROJECT_ID`, `VITE_APPWRITE_PROJECT_NAME`,
  `VITE_APPWRITE_ENDPOINT`. Never commit or print values.
- No source file currently reads these keys — `import.meta.env` /
  `VITE_APPWRITE_*` have zero references in `src/`, `index.html`, or
  `public/`, so nothing is inlined into the bundle. They appear to be
  leftovers from pre-cleanup env handling. `.env` is still needed in practice
  only because `run.sh` / `run.ps1` refuse to start without it.

## Current status

- Archived/stale project — treat as read-mostly maintenance.
- Working tree is clean apart from this uncommitted AGENTS.md refresh; local
  `main` is behind `origin/main` by 2 commits (fast-forwardable). Local
  branch `feat/dashboard-redesign-navbar-fonts` was already merged via PR #1.
- Remotes: `origin` = Iron-Mark/ResQLinkWeb-Legacy,
  `upstream` = UMakLumen/ResQLinkWeb.
- Commit style in recent history (2026): conventional-commit prefixes
  (`feat:`, `fix:`, `chore:`, `build:`). Older upstream-era commits use bare
  imperative subjects (`Fix ...`, `Refactor ...`).
- No known blockers.

Last verified: 2026-07-22 (workspace AGENTS.md refresh pass)
