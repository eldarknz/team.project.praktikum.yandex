/* eslint-disable @typescript-eslint/no-non-null-assertion */
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { createReduxStore } from '@workspace/shared/src';
import { dbConnect } from '@db';
import userRouter from '@routers/UserRouter';
import topicRouter from '@routers/TopicRouter';
import commentRouter from '@routers/CommentRouter';
import replyRouter from '@routers/ReplyRouter';
import reactionRouter from '@routers/ReactionRouter';
import emojiReactionRouter from '@routers/EmojiReactionRouter';
import { PORT, CORS_ORIGIN_WHITELIST } from '@constants';

import { CLIENT_PATH } from './constants';

const CLIENT_DIST_PATH = path.resolve(CLIENT_PATH, 'dist');
const CLIENT_SSR_DIST_PATH = path.resolve(CLIENT_PATH, 'ssr-dist');
const CLIENT_RENDER_FILE_PATH = path.resolve(CLIENT_SSR_DIST_PATH, 'client.cjs');
const CLIENT_HTML_FILE_PATH = path.resolve(CLIENT_DIST_PATH, 'index.html');
const CLIENT_ASSETS_PATH = path.resolve(CLIENT_DIST_PATH, 'assets');

export async function createApp() {
  const app = express();

  app.disable('x-powered-by');
  app.enable('trust proxy');
  app.use(cookieParser());
  app.use(
    cors({
      credentials: true,
      origin: CORS_ORIGIN_WHITELIST,
    })
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  await dbConnect().then(() => {
    app.use('/api/v1/user', userRouter);
    app.use('/api/v1/topic', topicRouter);
    app.use('/api/v1/comment', commentRouter);
    app.use('/api/v1/reply', replyRouter);
    app.use('/api/v1/reaction', reactionRouter);
    app.use('/api/v1/emoji-reactions', emojiReactionRouter);
  });

  app.use('/assets', express.static(CLIENT_ASSETS_PATH));

  let staticFiles: string[] = [];

  fs.readdir(CLIENT_SSR_DIST_PATH, (err, files) => {
    if (err) {
      console.error('Ошибка при чтении папки:', err);
      return;
    }

    staticFiles = files;
  });

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      if (staticFiles.includes(req.baseUrl.replace('/', ''))) {
        res.sendFile(path.resolve(CLIENT_DIST_PATH, req.baseUrl.replace('/', '')));
        return;
      }

      const template = fs.readFileSync(CLIENT_HTML_FILE_PATH, 'utf-8');
      const render = (await import(CLIENT_RENDER_FILE_PATH)).render;

      const store = createReduxStore();
      const appHtml = await render(url, store);
      const storeState = store.getState();
      const storeIncrementHtml = `
        <script>
          window.__IS_SSR__ = true;
          window.__REDUX_STORE__ = ${JSON.stringify(storeState)}
        </script>`;
      const html = template
        .replace(`<!-- ssr-outlet -->`, appHtml)
        .replace(`<!-- store-outlet -->`, storeIncrementHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      next(e);
    }
  });

  app.listen(PORT, () => {
    console.log(
      `  ➜ 🎸 Server is listening on port: ${PORT}. Use this server: http://localhost:${PORT}`
    );
  });
}
