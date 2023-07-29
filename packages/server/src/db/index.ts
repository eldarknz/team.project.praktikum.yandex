import { SequelizeOptions, Sequelize } from 'sequelize-typescript';

import { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, IS_DEV } from '@constants';

import { TopicModel, UserModel, CommentModel, ReplyModel, ReactionModel } from './models';

const sequelizeOptions: SequelizeOptions = {
  username: POSTGRES_USER,
  host: 'localhost',
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: Number(POSTGRES_PORT),
  models: [ReplyModel, CommentModel, TopicModel, UserModel, ReactionModel],
  dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);

export const dbConnect = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: IS_DEV });

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
