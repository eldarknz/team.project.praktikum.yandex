import { IEmojiReaction, EmojiReactionModel } from '@db/models/emojiReaction';

class EmojiReactionService {
  async createEmojiReaction(emojiReactionData: IEmojiReaction) {
    try {
      // Создаем новую эмодзи-реакцию в базе данных
      const createdEmojiReaction = await EmojiReactionModel.create(emojiReactionData);

      return createdEmojiReaction;
    } catch (error) {
      console.error('Ошибка при создании эмодзи-реакции:', error);
      throw new Error('Внутренняя ошибка сервера');
    }
  }

  async getEmojiReactions(commentId?: number) {
    try {
      if (commentId) {
        // Получаем все эмодзи-реакции для указанного комментария
        const emojiReactions = await EmojiReactionModel.findAll({
          where: { comment_id: commentId },
        });

        return emojiReactions;
      } else {
        // Получаем все эмодзи-реакции
        const allEmojiReactions = await EmojiReactionModel.findAll();
        return allEmojiReactions;
      }
    } catch (error) {
      console.error('Ошибка при получении эмодзи-реакций:', error);
      throw new Error('Внутренняя ошибка сервера');
    }
  }
}

export const emojiReactionService = new EmojiReactionService();
