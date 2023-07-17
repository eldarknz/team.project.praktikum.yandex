import { Optional } from 'sequelize';
import { Table, Column, DataType, Model } from 'sequelize-typescript';

export interface ITopicModel {
  id: number;
  author: string;
}

@Table({ tableName: 'topic' })
export class TopicModel
  extends Model<ITopicModel, Optional<ITopicModel, 'id'>>
  implements ITopicModel
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  //@ts-ignore
  id: number;

  @Column({ allowNull: false, type: DataType.STRING })
  author!: string;
}
