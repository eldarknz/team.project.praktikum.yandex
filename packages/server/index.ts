/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import express from 'express';

import { createServer as createViteServer } from 'vite';
import type { ViteDevServer } from 'vite';

import { createReduxStore } from '../shared/store';
import { dbConnect } from './db';
import userRouter from './routers/UserRouter';
import cookeParser from 'cookie-parser';
import bodyParser from 'body-parser';
import topicRouter from './routers/TopicRouter';
import commentRouter from './routers/CommentRouter';
import replyRouter from './routers/ReplyRouter';
import reactionRouter from './routers/ReactionRouter';
import userThemeRoutes from './routers/UserThemeRouter';
import emojiReactionRouter from './routers/EmojiReactionRouter';

dotenv.config();

export const isDev = () => process.env.NODE_ENV === 'development';
export const originWhiteList = ['http://localhost:3001', 'http://localhost:3000'];
async function startServer() {
  const app = express();
  app.disable('x-powered-by');
  app.enable('trust proxy');
  //@ts-expect-error
  app.use(cookeParser());
  app.use(
    cors({
      credentials: true,
      origin: originWhiteList,
    }),
  );
  await dbConnect().then(() => {
    app.use('/api/v1/user', userRouter);
    app.use('/api/v1/topic', topicRouter);
    app.use('/api/v1/comment', commentRouter);
    app.use('/api/v1/reply', replyRouter);
    app.use('/api/v1/reaction', reactionRouter);
    app.use('/api/v1/theme', userThemeRoutes);
    app.use('/api/v1/emoji-reactions', emojiReactionRouter);
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  const port = Number(process.env.SERVER_PORT) || 3000;

  let vite: ViteDevServer | undefined;
  const distPath = path.resolve('../client/dist/');
  const ssrDistPath = path.resolve('../client/ssr-dist/');
  const srcPath = path.resolve('../client/');
  const ssrClientPath = path.resolve('../client/ssr-dist/client.cjs');

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    });

    app.use(vite.middlewares);
  }

  if (!isDev()) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')));
  }

  let staticFiles: string[] = [];

  fs.readdir(ssrDistPath, (err, files) => {
    if (err) {
      console.error('Ошибка при чтении папки:', err);
      return;
    }

    staticFiles = files;
  });

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;

      if (!isDev()) {
        if (staticFiles.includes(req.baseUrl.replace('/', ''))) {
          res.sendFile(path.resolve(distPath, req.baseUrl.replace('/', '')));
          return;
        }
      }

      if (!isDev()) {
        template = fs.readFileSync(path.resolve(distPath, 'index.html'), 'utf-8');
      } else {
        template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8');

        template = await vite!.transformIndexHtml(url, template);
      }

      let render: (url: string, store: object) => Promise<string>;

      if (!isDev()) {
        render = (await import(ssrClientPath)).render;
      } else {
        render = (await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))).render;
      }
      const store = createReduxStore();
      const appHtml = await render(url, store);
      const storeState = store.getState();
      const storeIncrementHtml = `<script>window.__REDUX_STORE__ = ${JSON.stringify(
        storeState,
      )}</script>`;
      const html = template
        .replace(`<!-- ssr-outlet -->`, appHtml)
        .replace(`<!-- store-outlet -->`, storeIncrementHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (isDev()) {
        vite!.ssrFixStacktrace(e as Error);
      }
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(
      `  ➜ 🎸 Server is listening on port: ${port}. Use this server: http://localhost:${port}`,
    );
  });
}

startServer();
