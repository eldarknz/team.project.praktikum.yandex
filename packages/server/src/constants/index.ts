export const APP_ENV = process.env.NODE_ENV;
export const IS_DEV = APP_ENV === 'development';

export const PORT = Number(process.env.PORT) || 3000;
export const CORS_ORIGIN_WHITELIST = JSON.parse(process.env.CORS_ORIGIN_WHITELIST);

export const POSTGRES_USER = process.env.POSTGRES_USER;
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
export const POSTGRES_DB = process.env.POSTGRES_DB;
export const POSTGRES_PORT = process.env.POSTGRES_PORT;
