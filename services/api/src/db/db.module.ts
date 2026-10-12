import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { createPool } from './pool';

export const PG_POOL = 'PG_POOL';

@Module({
  providers: [
    {
      provide: PG_POOL,
      inject: [ConfigService],
      useFactory: (config: ConfigService): Pool =>
        createPool(
          config.get<string>('API_DATABASE_URL', 'postgresql://localhost:5432/api'),
        ),
    },
  ],
  exports: [PG_POOL],
})
export class DbModule {}
