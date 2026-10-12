import 'dotenv/config';
import { loadConfig } from './config';
import { createPool } from './db/pool';
import { JobRunner } from './jobs/runner';

async function main(): Promise<void> {
  const config = loadConfig();
  const pool = createPool(config);

  const runner = new JobRunner(async () => {
    await pool.query('SELECT 1');
  }, config.pollIntervalMs);

  runner.start();
  console.log(`worker started, polling every ${config.pollIntervalMs}ms`);

  const shutdown = async () => {
    runner.stop();
    await pool.end();
    process.exit(0);
  };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

if (require.main === module) {
  main().catch((err) => {
    console.error('worker failed to start', err);
    process.exit(1);
  });
}
