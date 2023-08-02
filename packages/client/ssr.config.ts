import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { PWAConfig, configAliases } from './vite.config';

export default defineConfig({
  plugins: [svgr(), react(), VitePWA(PWAConfig)],
  mode: process.env.NODE_ENV as any,
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ssr.tsx'),
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
    alias: configAliases,
  },
});
