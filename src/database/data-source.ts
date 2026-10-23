import {
  checkServerIdentity,
  type PeerCertificate,
  type TlsOptions,
} from 'node:tls';
import { readFileSync } from 'node:fs';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { fileURLToPath } from 'node:url';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'gestao_estoque',
  ssl:
    process.env.DB_SSL === 'true'
      ? {
          rejectUnauthorized: true,
          ca: readFileSync(
            process.env.DB_SSL_CA_FILE ?? './certs/railway-root.crt',
            'utf8',
          ),
          checkServerIdentity: (
            hostname: string,
            certificate: PeerCertificate,
          ) =>
            checkServerIdentity(
              process.env.DB_SSL_SERVERNAME || hostname,
              certificate,
            ),
        } as unknown as TlsOptions
      : false,
  synchronize: false,
  dropSchema: false,
  logging: process.env.NODE_ENV === 'development',
  entities: ['dist/**/*.entity.js'],
  migrations: [
    fileURLToPath(new URL('./migrations/*{.ts,.js}', import.meta.url)),
  ],
  migrationsRun: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
