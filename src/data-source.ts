import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { config } from 'dotenv';
import * as process from 'node:process';

config({ path: 'src/.env' });

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: `${process.env.mysql_server_host}`,
  port: +`${process.env.mysql_server_port}`,
  username: `${process.env.mysql_server_username}`,
  password: `${process.env.mysql_server_password}`,
  database: `${process.env.mysql_server_database}`,
  synchronize: false,
  logging: true,
  entities: [User],
  migrations: ['./src/migration/**.ts'],
  subscribers: [],
  poolSize: 10,
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'sha256_password',
  },
});
