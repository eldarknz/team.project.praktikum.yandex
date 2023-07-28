import { Optional } from 'sequelize';
import { Table, Column, DataType, Model, ForeignKey, Index } from 'sequelize-typescript';
import { UserModel } from './user';
import { CommentModel } from './comment';

export interface IEmojiReaction {
  id?: number;
  owner_id: number;
  comment_id: number;
  emoji_unicode: string;
}

@Table({ tableName: 'emoji_reaction' })
export class EmojiReactionModel
  extends Model<IEmojiReaction, Optional<IEmojiReaction, 'id'>>
  implements IEmojiReaction
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id!: number;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false, type: DataType.INTEGER })
  owner_id!: number;

  @Index
  @ForeignKey(() => CommentModel)
  @Column({ allowNull: false, type: DataType.INTEGER })
  comment_id!: number;

  @Column({ allowNull: false, type: DataType.STRING })
  emoji_unicode!: string;
}
