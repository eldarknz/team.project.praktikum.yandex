import { Optional } from 'sequelize';
import { Table, Column, DataType, Model, ForeignKey } from 'sequelize-typescript';
import { UserModel } from './user';
import { CommentModel } from './comment';

export interface IReaction {
  id?: number;
  owner_id: number;
  comment_id: number;
}

@Table({ tableName: 'reaction' })
export class ReactionModel
  extends Model<IReaction, Optional<IReaction, 'id'>>
  implements IReaction
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id!: number;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false, type: DataType.INTEGER })
  owner_id!: number;

  @ForeignKey(() => CommentModel)
  @Column({ allowNull: false, type: DataType.INTEGER })
  comment_id!: number;
}
