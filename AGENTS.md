---
name: Project Architecture & Constraints
description: Core rules, architecture decisions, and tech stack details for the skornel02 portfolio monorepo.
trigger: always_on
---

# Skornel02 Portfolio Monorepo Guidelines

## Tech Stack
- **Framework**: Next.js 15 (App Router, Static Export)
- **Package Manager**: Bun (Use `bun install`, `bun run`)
- **Language**: TypeScript, React 19
- **Styling**: Tailwind CSS v4 + ShadCN
- **Content**: Velite (with Zod schemas)

## Architecture & Monorepo Structure
- `website/`: Main Next.js portfolio site.
- `card/`: Interactive business card (SVG output is copied to `website/public/card/`).
- **Root package.json**: Uses Bun-compatible standard array format for workspaces (`"workspaces": ["website", "card"]`).

## Critical Build & Export Constraints (Next.js)
- **Turbopack is Required**: `next dev` and `next build` MUST use the `--turbopack` flag. Without it, Next.js fails with `_document` errors during static export.
- **Static Export**: Hosted on GitHub Pages (`output: 'export'`).
- **Static Route Handlers**: You CAN use Route Handlers (`route.ts`) to generate static files like `rss.xml` or `sitemap.xml` during static export, but you MUST enforce strict static generation. Add `export const dynamic = 'force-static';` and do NOT include the `Request` object in the function signature (e.g., use `export async function GET()` instead of `export async function GET(req)`). Otherwise, Next.js will treat it as dynamic and the static export will fail.
- **404 Page Constraints**: Do not use `'use client'` on `app/not-found.tsx`. It causes prerender errors. Use a Server Component and import a separate client component for interactive features (e.g., `<CountdownRedirect />`).

## Content Management (Velite)
- **Single Source of Truth for Images**: All images live in `public/images/`. Do not create or duplicate images in `content/`.
- **Windows Path Handling**: Velite's `meta.path` returns an absolute path on Windows. When generating slugs, always use `path.basename(meta.path)` instead of relying on relative path segments.
- **Asset Linking**: Keep `copyLinkedFiles: false` in Velite's markdown config to prevent relative path resolution errors. A `cleanImagePath` transform converts legacy `/src/images/` paths to `/images/`.

## Agent / Developer Behaviors
- **File Creation**: ALWAYS use the agent's built-in file writing tools (`write_to_file`) for creating or editing files. NEVER use shell commands (like PowerShell's `Set-Content` or `echo`) as they can corrupt quotes and encodings in JS/TS files.
- **Running Commands**: Always execute commands using `bun` (e.g., `bun run build`). Do not use `npm`, `pnpm`, or `yarn`.
