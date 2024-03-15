import { Model } from "sequelize-typescript";

export type Entity<T> = Omit<{
  [key in keyof T]: any;
}, keyof Model>;