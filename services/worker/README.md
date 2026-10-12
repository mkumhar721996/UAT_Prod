# comp_worker

Background worker service (TypeScript, PostgreSQL).

## Commands

Run from `services/worker/`:

- `pnpm install` — install dependencies
- `pnpm run build` — compile TypeScript to `dist/`
- `pnpm run start` — run the compiled worker
- `pnpm run dev` — run the worker directly with ts-node
- `pnpm test` — run the Jest test suite
- `pnpm run typecheck` — type-check without emitting output

## Configuration

Copy `.env.example` to `.env` and set `WORKER_DATABASE_URL` to a PostgreSQL connection string.
