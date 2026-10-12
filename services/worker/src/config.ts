export interface WorkerConfig {
  databaseUrl: string;
  pollIntervalMs: number;
}

export function loadConfig(env: NodeJS.ProcessEnv = process.env): WorkerConfig {
  return {
    databaseUrl: env.WORKER_DATABASE_URL ?? 'postgresql://localhost:5432/worker',
    pollIntervalMs: Number(env.WORKER_POLL_INTERVAL_MS ?? 5000),
  };
}
