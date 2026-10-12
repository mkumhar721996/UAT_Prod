import { Pool } from 'pg';
import { WorkerConfig } from '../config';

export function createPool(config: WorkerConfig): Pool {
  return new Pool({ connectionString: config.databaseUrl });
}
