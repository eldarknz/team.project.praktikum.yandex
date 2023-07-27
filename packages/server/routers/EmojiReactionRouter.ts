import { Router } from 'express';
import { EmojiReactionApi } from '../api/EmojiReactionApi';

const emojiReactionRouter: Router = Router();

emojiReactionRouter.post('/add', EmojiReactionApi.addEmojiReaction);

emojiReactionRouter.get('/recibe', EmojiReactionApi.getEmojiReactions);

export default emojiReactionRouter;
