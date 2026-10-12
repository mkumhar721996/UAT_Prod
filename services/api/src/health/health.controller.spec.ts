import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { PG_POOL } from '../db/db.module';

describe('HealthController', () => {
  it('reports ok when the database responds', async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [{ provide: PG_POOL, useValue: { query: jest.fn().mockResolvedValue(undefined) } }],
    }).compile();

    const controller = moduleRef.get(HealthController);
    await expect(controller.check()).resolves.toEqual({ status: 'ok', database: 'up' });
  });

  it('reports degraded when the database query fails', async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [{ provide: PG_POOL, useValue: { query: jest.fn().mockRejectedValue(new Error('down')) } }],
    }).compile();

    const controller = moduleRef.get(HealthController);
    await expect(controller.check()).resolves.toEqual({ status: 'degraded', database: 'down' });
  });
});
