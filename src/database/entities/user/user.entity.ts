import { Column, Model, Table } from "sequelize-typescript";


@Table
export class UserEntity extends Model{
  @Column
  full_name!: string;

  @Column
  email!: string;

  @Column
  phone!: string;

  @Column
  password!: string;
}