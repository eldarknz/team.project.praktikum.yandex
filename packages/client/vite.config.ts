import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@api': path.resolve(
        __dirname,
        './src/api'
      ),
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
      '@core': path.resolve(
        __dirname,
        './src/core'
      ),
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
      '@public': path.resolve(
        __dirname,
        './src/public'
      ),
      '@context': path.resolve(
        __dirname,
        './src/context'
      ),
    },
  },
});
