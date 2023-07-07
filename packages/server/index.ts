import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import express from 'express';

dotenv.config();

async function startServer() {
  const app = express();
  app.use(cors());
  const port =
    Number(process.env.SERVER_PORT) || 3010;

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)');
  });

  const distPath = path.dirname(
    require.resolve('client/dist/index.html'),
  );
  const ssrClientPath = require.resolve(
    'client/ssr-dist/client.cjs',
  );

  app.use(
    '/assets',
    express.static(
      path.resolve(distPath, 'assets'),
    ),
  );

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    console.log('url:', url);
    console.log('base:', req.baseUrl);

    const staticFiles = [
      '/vite.svg',
      '/manifest.webmanifest',
      '/registerSW.js',
      '/sw.js',
    ];

    if (staticFiles.includes(req.baseUrl)) {
      res.sendFile(
        path.resolve(
          distPath,
          req.baseUrl.replace('/', ''),
        ),
      );
      return;
    }

    try {
      const template = fs.readFileSync(
        path.resolve(distPath, 'index.html'),
        'utf-8',
      );

      const { render } = await import(
        ssrClientPath
      );

      const appHtml = await render(url);

      const html = template.replace(
        `<!-- ssr-outlet -->`,
        appHtml,
      );

      res
        .status(200)
        .set({ 'Content-Type': 'text/html' })
        .end(html);
    } catch (e) {
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(
      `  ➜ 🎸 Server is listening on port: ${port}. http://localhost:${port}`,
    );
  });
}

startServer();
