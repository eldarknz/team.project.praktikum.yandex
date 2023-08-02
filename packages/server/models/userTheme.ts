import { Optional } from 'sequelize';
import { Table, Column, DataType, Model, ForeignKey } from 'sequelize-typescript';
import { UserModel } from './user';

export interface IUserTheme {
  id: number;
  theme: string;
  owner_id: number;
}

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'user_theme',
})
export class UserThemeModel
  extends Model<IUserTheme, Optional<IUserTheme, 'id'>>
  implements IUserTheme
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id!: number;

  @Column({ allowNull: false, type: DataType.STRING })
  theme!: string;

  @ForeignKey(() => UserModel)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'owner_id',
  })
  owner_id!: number;
}
