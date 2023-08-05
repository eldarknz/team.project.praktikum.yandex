export const NODE_ENV = process.env.NODE_ENV;
export const IS_DEV = NODE_ENV === 'development';

export const PORT = Number(process.env.SERVER_PORT) || 3000;
console.log('CORS_ORIGIN_WHITELIST', process.env.CORS_ORIGIN_WHITELIST);
export const CORS_ORIGIN_WHITELIST = JSON.parse(process.env.CORS_ORIGIN_WHITELIST);

export const POSTGRES_HOST = process.env.POSTGRES_HOST;
export const POSTGRES_USER = process.env.POSTGRES_USER;
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
export const POSTGRES_DB = process.env.POSTGRES_DB;
export const POSTGRES_PORT = Number(process.env.POSTGRES_PORT);
