import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";

const root = SequelizeModule.forRoot({
  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadModels: true,
  synchronize: true,
});

@Module({
  imports: [root],
  exports: [root]
})
export class DatabaseModule {}
