import { Optional } from 'sequelize';
import { Table, Column, DataType, Model, ForeignKey } from 'sequelize-typescript';
import { TopicModel } from './topic';

export interface IComment {
  id: number;
  text: string;
  authorId: number;
  topicId: number;
}

@Table({ tableName: 'comment' })
export class CommentModel extends Model<IComment, Optional<IComment, 'id'>> implements IComment {
  @Column({ allowNull: false, primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id!: number;

  @Column({ allowNull: false, type: DataType.TEXT })
  text!: string;

  @Column({ allowNull: false, type: DataType.INTEGER })
  authorId!: number;

  @ForeignKey(() => TopicModel)
  @Column({ allowNull: false, type: DataType.INTEGER })
  topicId!: number;
}
