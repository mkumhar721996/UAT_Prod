import { loadConfig } from '../config';

describe('loadConfig', () => {
  it('uses defaults when env vars are unset', () => {
    const config = loadConfig({});
    expect(config.databaseUrl).toBe('postgresql://localhost:5432/worker');
    expect(config.pollIntervalMs).toBe(5000);
  });

  it('reads values from the provided env', () => {
    const config = loadConfig({
      WORKER_DATABASE_URL: 'postgresql://example/db',
      WORKER_POLL_INTERVAL_MS: '1000',
    });
    expect(config.databaseUrl).toBe('postgresql://example/db');
    expect(config.pollIntervalMs).toBe(1000);
  });
});
