import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config({ path: './apps/data-layer-service/.env' });

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env['DB_PORT']!),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [],
  synchronize: false,
  migrationsTableName: 'Migrations',
  migrations: ['apps/data-layer-service/src/migrations/*.ts'],
});
