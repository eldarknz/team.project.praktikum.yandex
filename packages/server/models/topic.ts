import { Optional } from 'sequelize';
import { Table, Column, DataType, Model } from 'sequelize-typescript';

export interface ITopicModel {
  id: number;
  author: string;
  post_name: string;
  message_count: number;
}

@Table({ tableName: 'topic' })
export class TopicModel
  extends Model<ITopicModel, Optional<ITopicModel, 'id'>>
  implements ITopicModel
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id!: number;

  @Column({ allowNull: false, type: DataType.STRING })
  author!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  post_name!: string;

  @Column({ allowNull: false, type: DataType.INTEGER })
  message_count!: number;
}
