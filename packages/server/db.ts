// import { TopicModel } from './models/Topic';
// import { TopicModel } from './models/Topic';
import { SequelizeOptions, Sequelize } from 'sequelize-typescript';

// const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } = process.env;

// const CLIENT_PORT=3000

// const SERVER_PORT=3001
const POSTGRES_USER = 'test2';
const POSTGRES_PASSWORD = 'test2';
const POSTGRES_DB = 'postgres';
const POSTGRES_PORT = 5432;

const sequelizeOptions: SequelizeOptions = {
  username: POSTGRES_USER,
  host: 'localhost',
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: Number(POSTGRES_PORT),
  // models: [TopicModel],
  dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);

export const dbConnect = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
