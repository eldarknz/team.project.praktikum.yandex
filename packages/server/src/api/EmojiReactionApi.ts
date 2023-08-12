import { Request, Response } from 'express';
import { emojiReactionService } from '../services/EmojiReactionService';

export class EmojiReactionApi {
  public static async addEmojiReaction(req: Request, res: Response) {
    try {
      const { comment_id, emoji_unicode, owner_id } = req.body;

      // Проверяем, что все необходимые поля переданы
      if (!comment_id || !emoji_unicode) {
        return res.status(400).json({ message: 'Не переданы все необходимые поля' });
      }

      // Создаем новую эмодзи-реакцию, используя наш сервис
      const emojiReaction = await emojiReactionService.createEmojiReaction({
        owner_id,
        comment_id,
        emoji_unicode,
      });

      return res.status(201).json(emojiReaction);
    } catch (error) {
      console.error('Ошибка при добавлении эмодзи-реакции:', error);
      return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
  }

  public static async getEmojiReactions(req: Request, res: Response) {
    try {
      const { comment_id } = req.query;

      // Если передан идентификатор комментария, получаем эмодзи-реакции для этого комментария
      if (comment_id) {
        const emojiReactions = await emojiReactionService.getEmojiReactions(Number(comment_id));
        return res.status(200).json(emojiReactions);
      }

      // Если идентификатор комментария не передан, получаем все эмодзи-реакции
      const allEmojiReactions = await emojiReactionService.getEmojiReactions();
      return res.status(200).json(allEmojiReactions);
    } catch (error) {
      console.error('Ошибка при получении эмодзи-реакций:', error);
      return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
  }
}
