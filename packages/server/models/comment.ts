import { Optional } from 'sequelize';
import { Table, Column, DataType, Model, ForeignKey } from 'sequelize-typescript';
import { UserModel } from './user';
import { TopicModel } from './topic';

export interface IComment {
  id?: number;
  text: string;
  createdAt: string;
  owner_id: number;
  topic_id: number;
}

@Table({ tableName: 'comment' })
export class CommentModel extends Model<IComment, Optional<IComment, 'id'>> implements IComment {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id!: number;

  @Column({ allowNull: false, type: DataType.TEXT })
  text!: string;

  @Column({ allowNull: false, type: DataType.TIME })
  createdAt!: string;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false, type: DataType.INTEGER })
  owner_id!: number;

  @ForeignKey(() => TopicModel)
  @Column({ allowNull: false, type: DataType.INTEGER })
  topic_id!: number;
}
