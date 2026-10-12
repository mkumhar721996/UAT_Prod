# comp_api

Core API service (TypeScript, NestJS, PostgreSQL).

## Commands

Run from `services/api/`:

- `pnpm install` — install dependencies
- `pnpm run build` — compile to `dist/`
- `pnpm run start` — run the compiled app
- `pnpm run dev` — run with live reload
- `pnpm test` — run the Jest unit test suite
- `pnpm run test:e2e` — run the Supertest end-to-end suite
- `pnpm run typecheck` — type-check without emitting output

## Configuration

Copy `.env.example` to `.env` and set `API_DATABASE_URL` to a PostgreSQL connection string.
