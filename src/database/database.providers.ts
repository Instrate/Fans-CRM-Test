import { Sequelize } from "sequelize-typescript";
import * as process from "process";

export const databaseProviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async() => {
      const sequelize = new Sequelize({
        repositoryMode: true,
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
      });
      sequelize.addModels([]);
      await sequelize.sync({ force: false });
      return sequelize;
    }
  }
]

