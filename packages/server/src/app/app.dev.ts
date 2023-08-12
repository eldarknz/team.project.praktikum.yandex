import cors from 'cors';
import fs from 'fs';
import path from 'path';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { createReduxStore } from '@workspace/shared/src';
import { PORT, CORS_ORIGIN_WHITELIST } from '@constants';
import userRouter from '@routers/UserRouter';
import topicRouter from '@routers/TopicRouter';
import commentRouter from '@routers/CommentRouter';
import replyRouter from '@routers/ReplyRouter';
import reactionRouter from '@routers/ReactionRouter';
import emojiReactionRouter from '@routers/EmojiReactionRouter';
import { dbConnect } from '@db';
import { CLIENT_PATH } from './constants';

const CLIENT_RENDER_FILE_PATH = path.resolve(CLIENT_PATH, 'src/index.ssr.tsx');
const CLIENT_HTML_FILE_PATH = path.resolve(CLIENT_PATH, 'index.html');

export async function createApp() {
  const app = express();

  app.disable('x-powered-by');
  app.enable('trust proxy');

  app.use(cookieParser());
  app.use(cors({ credentials: true, origin: CORS_ORIGIN_WHITELIST }));
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

  const vite = await createViteServer({
    server: { middlewareMode: true },
    root: CLIENT_PATH,
    appType: 'custom',
  });

  app.use(vite.middlewares);

  // let staticFiles: string[];

  // fs.readdir(CLIENT_SSR_DIST_PATH, (err, files) => {
  //   if (!err) {
  //     staticFiles = files;
  //   } else {
  //     console.error('Ошибка при чтении папки:', err);
  //   }
  // });

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const template = await vite.transformIndexHtml(
        url,
        fs.readFileSync(CLIENT_HTML_FILE_PATH, 'utf-8')
      );
      const { render } = await vite.ssrLoadModule(CLIENT_RENDER_FILE_PATH);
      const store = createReduxStore();
      const appHtml = await render(url, store);
      const storeState = store.getState();

      const storeIncrementHtml = `
        <script>
          window.__REDUX_STORE__ = ${JSON.stringify(storeState)};
          window.__IS_SSR__ = true;
        </script>`;
      const html = template
        .replace(`<!-- ssr-outlet -->`, appHtml)
        .replace(`<!-- store-outlet -->`, storeIncrementHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);

      next(e);
    }
  });

  app.listen(PORT, () => {
    console.log(
      `  ➜ 🎸 Server is listening on port: ${PORT}. Use this server: http://localhost:${PORT}`
    );
  });
}
