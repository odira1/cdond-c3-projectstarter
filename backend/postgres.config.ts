import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: parseInt(<string>process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [String(process.env.TYPEORM_ENTITIES)],
  synchronize: true,
  migrations: [String(process.env.TYPEORM_MIGRATIONS)],
  cli: { migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR },
};

module.exports = pgConfig;
