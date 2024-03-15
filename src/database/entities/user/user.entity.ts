import { Column, Model, Table, Unique } from "sequelize-typescript";


@Table({
  timestamps: true
})
export class UserEntity extends Model{
  @Unique
  @Column
  email!: string;


  @Column
  full_name!: string;


  @Column
  phone!: string;


  @Column
  password!: string;
}

export const UserEntityName = 'users';