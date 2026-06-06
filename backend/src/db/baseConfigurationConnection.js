import { getEnvVar } from "../util/getEnvVar.js";

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT || 5432;
const dbDialect = process.env.DB_DIALECT || "postgres";
const dbPassword = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;

export const baseConfig = {
  dialect: dbDialect,
  username: dbUser,
  port: parseInt(dbPort),
  host: dbHost,
  password: dbPassword,
  database: dbName,
  logging: false,
};
