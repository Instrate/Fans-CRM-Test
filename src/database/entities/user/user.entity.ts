import { BeforeCreate, BeforeUpdate, Column, DataType, Model, Table, Unique } from "sequelize-typescript";
import * as bcrypt from 'bcrypt';
import * as process from "process";

export const UserEntityName = 'users';

@Table({
  tableName: UserEntityName,
  timestamps: true
})
export class UserEntity extends Model {
  @Unique
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  })
  email!: string;


  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  full_name!: string;


  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  phone!: string;


  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password!: string;

  @BeforeCreate
  @BeforeUpdate
  static encryptPassword(instance: UserEntity){
    instance.password = bcrypt.hashSync(instance.password, Number(process.env.DATABASE_DATA_HASH_ITERATIONS));
  }

  async validatePassword(password: string){
    return bcrypt.compare(password, this.password).catch((err) => false);
  }
}

