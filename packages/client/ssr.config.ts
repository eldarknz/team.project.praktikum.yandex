import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';
import * as path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      outDir: 'dist',
      devOptions: {
        enabled: true,
      },
      injectManifest: {
        globPatterns: [
          '**/*.{html,js,css,png,svg,ico}',
        ],
        globIgnores: [
          'maskable-icon-192.png',
          'icon-192.png',
          'icon-256.png',
          'icon-512.png',
        ],
      },
      workbox: {},
      manifest: {
        name: "theTeam's game",
        short_name: 'tT Game',
        description:
          "theTeam's game for praktikum",
        theme_color: '#ffffff',
        icons: [
          {
            src: 'maskable-icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'ssr.tsx'),
      name: 'Client',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'ssr-dist',
      },
    },
  },
  resolve: {
    alias: {
      '@api': path.resolve(
        __dirname,
        './src/api',
      ),
      '@assets': path.resolve(
        __dirname,
        './src/assets',
      ),
      '@components': path.resolve(
        __dirname,
        './src/components',
      ),
      '@controllers': path.resolve(
        __dirname,
        './src/controllers',
      ),
      '@core': path.resolve(
        __dirname,
        './src/core',
      ),
      '@hooks': path.resolve(
        __dirname,
        './src/hooks',
      ),
      '@layouts': path.resolve(
        __dirname,
        './src/layouts',
      ),
      '@pages': path.resolve(
        __dirname,
        './src/pages',
      ),
      '@routers': path.resolve(
        __dirname,
        './src/routers',
      ),
      '@service': path.resolve(
        __dirname,
        './src/service',
      ),
      '@styles': path.resolve(
        __dirname,
        './src/styles',
      ),
      '@utils': path.resolve(
        __dirname,
        './src/utils',
      ),
      '@public': path.resolve(
        __dirname,
        './public',
      ),
    },
  },
});
