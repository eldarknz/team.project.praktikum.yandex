import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import type { VitePWAOptions } from 'vite-plugin-pwa';

dotenv.config();

export const PWAConfig: Partial<VitePWAOptions> =
  {
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
      description: "theTeam's game for praktikum",
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
  };

export const configAliases = {
  '@api': path.resolve(__dirname, './src/api'),
  '@assets': path.resolve(
    __dirname,
    './src/assets'
  ),
  '@components': path.resolve(
    __dirname,
    './src/components'
  ),
  '@controllers': path.resolve(
    __dirname,
    './src/controllers'
  ),
  '@core': path.resolve(__dirname, './src/core'),
  '@hooks': path.resolve(
    __dirname,
    './src/hooks'
  ),
  '@layouts': path.resolve(
    __dirname,
    './src/layouts'
  ),
  '@pages': path.resolve(
    __dirname,
    './src/pages'
  ),
  '@routers': path.resolve(
    __dirname,
    './src/routers'
  ),
  '@service': path.resolve(
    __dirname,
    './src/service'
  ),
  '@styles': path.resolve(
    __dirname,
    './src/styles'
  ),
  '@utils': path.resolve(
    __dirname,
    './src/utils'
  ),
  '@public': path.resolve(__dirname, './public'),
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3001,
  },
  preview: {
    port:
      Number(process.env.CLIENT_PREVIEW_PORT) ||
      8080,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [svgr(), react(), VitePWA(PWAConfig)],
  resolve: {
    alias: configAliases,
  },
});
