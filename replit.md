# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Matangi Healings Website (`artifacts/matangi-healings`)
- **Type**: React + Vite (frontend-only, no backend)
- **Preview path**: `/`
- **Description**: Premium holistic healing website for Dr. Anushka Manoharlal's Matangi Healings center, Bangalore
- **Pages**: Home, About, Services, Contact
- **Color theme**: Sage background (#e5e7dd), deep forest text (#152114), forest green accent (#183924), terracotta accent (#d75729)
- **Fonts**: IBM Plex Serif (headings), Inter (body)
- **Animations**: Framer Motion with useReducedMotion support
- **Carousel**: Embla Carousel for testimonials

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/matangi-healings run dev` — run healing website

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
