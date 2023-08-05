import { Optional } from 'sequelize';
import { Table, Column, DataType, Model } from 'sequelize-typescript';

export interface ITopicModel {
  id: number;
  authorId: number;
  title: string;
  content: string;
}

@Table({ tableName: 'topic' })
export class TopicModel
  extends Model<ITopicModel, Optional<ITopicModel, 'id'>>
  implements ITopicModel
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id!: number;

  @Column({ allowNull: false, type: DataType.STRING })
  authorId!: number;

  @Column({ allowNull: false, type: DataType.STRING })
  title!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  content!: string;
}
