import { Optional } from 'sequelize';
import { Table, Column, DataType, Model, ForeignKey } from 'sequelize-typescript';
import { UserModel } from './user';
import { CommentModel } from './comment';

export interface IReply {
  id?: number;
  text: string;
  createdAt: string;
  owner_id: number;
  comment_id: number;
}

@Table({ tableName: 'reply' })
export class ReplyModel extends Model<IReply, Optional<IReply, 'id'>> implements IReply {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id!: number;

  @Column({ allowNull: false, type: DataType.TEXT })
  text!: string;

  @Column({ allowNull: false, type: DataType.TIME })
  createdAt!: string;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false, type: DataType.INTEGER })
  owner_id!: number;

  @ForeignKey(() => CommentModel)
  @Column({ allowNull: false, type: DataType.INTEGER })
  comment_id!: number;
}
