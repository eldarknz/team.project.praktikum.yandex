import { Optional } from 'sequelize';
import { Table, Column, DataType, Model } from 'sequelize-typescript';

export interface IUser {
  id: number;
  avatar: string | null;
  display_name: string | null;
  email: string | null;
  first_name: string | null;
  login: string | null;
  phone: string | null;
  second_name: string | null;
}

@Table({ tableName: 'users' })
export class UserModel extends Model<IUser, Optional<IUser, 'id'>> implements IUser {
  @Column({ primaryKey: true, type: DataType.INTEGER })
  id!: number;

  @Column({ allowNull: true, type: DataType.STRING })
  avatar!: string;

  @Column({ allowNull: true, type: DataType.STRING })
  display_name!: string;

  @Column({ allowNull: true, type: DataType.STRING })
  email!: string;

  @Column({ allowNull: true, type: DataType.STRING })
  first_name!: string;

  @Column({ allowNull: true, type: DataType.STRING })
  login!: string;

  @Column({ allowNull: true, type: DataType.STRING })
  phone!: string;

  @Column({ allowNull: true, type: DataType.STRING })
  second_name!: string;
}
