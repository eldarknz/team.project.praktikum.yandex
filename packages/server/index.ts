/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import express from 'express';

import { createServer as createViteServer } from 'vite';
import type { ViteDevServer } from 'vite';

dotenv.config();

const isDev = () =>
  process.env.NODE_ENV === 'development';

async function startServer() {
  const app = express();
  app.use(cors());
  const port =
    Number(process.env.SERVER_PORT) || 3000;

  let vite: ViteDevServer | undefined;
  const distPath = path.dirname(
    require.resolve('client/dist/index.html'),
  );
  const ssrDistPath = path.dirname(
    require.resolve('client/ssr-dist/client.cjs'),
  );
  const srcPath = path.dirname(
    require.resolve('client'),
  );
  const ssrClientPath = require.resolve(
    'client/ssr-dist/client.cjs',
  );

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    });

    app.use(vite.middlewares);
  }

  if (!isDev()) {
    app.use(
      '/assets',
      express.static(
        path.resolve(distPath, 'assets'),
      ),
    );
  }

  let staticFiles: string[] = [];

  fs.readdir(ssrDistPath, (err, files) => {
    if (err) {
      console.error(
        'Ошибка при чтении папки:',
        err,
      );
      return;
    }

    staticFiles = files;
  });

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;

      if (!isDev()) {
        if (
          staticFiles.includes(
            req.baseUrl.replace('/', ''),
          )
        ) {
          res.sendFile(
            path.resolve(
              distPath,
              req.baseUrl.replace('/', ''),
            ),
          );
          return;
        }
      }

      if (!isDev()) {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8',
        );
      } else {
        template = fs.readFileSync(
          path.resolve(srcPath, 'index.html'),
          'utf-8',
        );

        template = await vite!.transformIndexHtml(
          url,
          template,
        );
      }

      let render: (
        url: string,
        store: object,
      ) => Promise<string>;

      if (!isDev()) {
        render = (await import(ssrClientPath))
          .render;
      } else {
        render = (
          await vite!.ssrLoadModule(
            path.resolve(srcPath, 'ssr.tsx'),
          )
        ).render;
      }
      const { createReduxStore } =
        await vite!.ssrLoadModule(
          path.resolve(
            srcPath,
            'src/service/store/index.ts',
          ),
        );
      const store = createReduxStore();
      const appHtml = await render(url, store);
      const storeState = store.getState();
      const storeIncrementHtml = `<script>window.__REDUX_STORE__ = ${JSON.stringify(
        storeState,
      )}</script>`;
      const html = template
        .replace(`<!-- ssr-outlet -->`, appHtml)
        .replace(
          `<!-- store-outlet -->`,
          storeIncrementHtml,
        );

      res
        .status(200)
        .set({ 'Content-Type': 'text/html' })
        .end(html);
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
