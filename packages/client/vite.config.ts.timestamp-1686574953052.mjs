// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import dotenv from "dotenv";
import path from "path";
var __vite_injected_original_dirname = "D:\\PROGRAMMING\\team.project.praktikum.yandex\\packages\\client";
dotenv.config();
var vite_config_default = defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3e3
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT
  },
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      "@api": path.resolve(
        __vite_injected_original_dirname,
        "./src/api"
      ),
      "@assets": path.resolve(
        __vite_injected_original_dirname,
        "./src/assets"
      ),
      "@components": path.resolve(
        __vite_injected_original_dirname,
        "./src/components"
      ),
      "@controllers": path.resolve(
        __vite_injected_original_dirname,
        "./src/controllers"
      ),
      "@core": path.resolve(
        __vite_injected_original_dirname,
        "./src/core"
      ),
      "@hooks": path.resolve(
        __vite_injected_original_dirname,
        "./src/hooks"
      ),
      "@layouts": path.resolve(
        __vite_injected_original_dirname,
        "./src/layouts"
      ),
      "@pages": path.resolve(
        __vite_injected_original_dirname,
        "./src/pages"
      ),
      "@routers": path.resolve(
        __vite_injected_original_dirname,
        "./src/routers"
      ),
      "@service": path.resolve(
        __vite_injected_original_dirname,
        "./src/service"
      ),
      "@styles": path.resolve(
        __vite_injected_original_dirname,
        "./src/styles"
      ),
      "@utils": path.resolve(
        __vite_injected_original_dirname,
        "./src/utils"
      ),
      "@public": path.resolve(
        __vite_injected_original_dirname,
        "./src/public"
      ),
      "@context": path.resolve(
        __vite_injected_original_dirname,
        "./src/context"
      )
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQUk9HUkFNTUlOR1xcXFx0ZWFtLnByb2plY3QucHJha3Rpa3VtLnlhbmRleFxcXFxwYWNrYWdlc1xcXFxjbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFBST0dSQU1NSU5HXFxcXHRlYW0ucHJvamVjdC5wcmFrdGlrdW0ueWFuZGV4XFxcXHBhY2thZ2VzXFxcXGNsaWVudFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUFJPR1JBTU1JTkcvdGVhbS5wcm9qZWN0LnByYWt0aWt1bS55YW5kZXgvcGFja2FnZXMvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xyXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IE51bWJlcihwcm9jZXNzLmVudi5DTElFTlRfUE9SVCkgfHwgMzAwMCxcclxuICB9LFxyXG4gIGRlZmluZToge1xyXG4gICAgX19TRVJWRVJfUE9SVF9fOiBwcm9jZXNzLmVudi5TRVJWRVJfUE9SVCxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtzdmdyKCksIHJlYWN0KCldLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAYXBpJzogcGF0aC5yZXNvbHZlKFxyXG4gICAgICAgIF9fZGlybmFtZSxcclxuICAgICAgICAnLi9zcmMvYXBpJ1xyXG4gICAgICApLFxyXG4gICAgICAnQGFzc2V0cyc6IHBhdGgucmVzb2x2ZShcclxuICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgJy4vc3JjL2Fzc2V0cydcclxuICAgICAgKSxcclxuICAgICAgJ0Bjb21wb25lbnRzJzogcGF0aC5yZXNvbHZlKFxyXG4gICAgICAgIF9fZGlybmFtZSxcclxuICAgICAgICAnLi9zcmMvY29tcG9uZW50cydcclxuICAgICAgKSxcclxuICAgICAgJ0Bjb250cm9sbGVycyc6IHBhdGgucmVzb2x2ZShcclxuICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgJy4vc3JjL2NvbnRyb2xsZXJzJ1xyXG4gICAgICApLFxyXG4gICAgICAnQGNvcmUnOiBwYXRoLnJlc29sdmUoXHJcbiAgICAgICAgX19kaXJuYW1lLFxyXG4gICAgICAgICcuL3NyYy9jb3JlJ1xyXG4gICAgICApLFxyXG4gICAgICAnQGhvb2tzJzogcGF0aC5yZXNvbHZlKFxyXG4gICAgICAgIF9fZGlybmFtZSxcclxuICAgICAgICAnLi9zcmMvaG9va3MnXHJcbiAgICAgICksXHJcbiAgICAgICdAbGF5b3V0cyc6IHBhdGgucmVzb2x2ZShcclxuICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgJy4vc3JjL2xheW91dHMnXHJcbiAgICAgICksXHJcbiAgICAgICdAcGFnZXMnOiBwYXRoLnJlc29sdmUoXHJcbiAgICAgICAgX19kaXJuYW1lLFxyXG4gICAgICAgICcuL3NyYy9wYWdlcydcclxuICAgICAgKSxcclxuICAgICAgJ0Byb3V0ZXJzJzogcGF0aC5yZXNvbHZlKFxyXG4gICAgICAgIF9fZGlybmFtZSxcclxuICAgICAgICAnLi9zcmMvcm91dGVycydcclxuICAgICAgKSxcclxuICAgICAgJ0BzZXJ2aWNlJzogcGF0aC5yZXNvbHZlKFxyXG4gICAgICAgIF9fZGlybmFtZSxcclxuICAgICAgICAnLi9zcmMvc2VydmljZSdcclxuICAgICAgKSxcclxuICAgICAgJ0BzdHlsZXMnOiBwYXRoLnJlc29sdmUoXHJcbiAgICAgICAgX19kaXJuYW1lLFxyXG4gICAgICAgICcuL3NyYy9zdHlsZXMnXHJcbiAgICAgICksXHJcbiAgICAgICdAdXRpbHMnOiBwYXRoLnJlc29sdmUoXHJcbiAgICAgICAgX19kaXJuYW1lLFxyXG4gICAgICAgICcuL3NyYy91dGlscydcclxuICAgICAgKSxcclxuICAgICAgJ0BwdWJsaWMnOiBwYXRoLnJlc29sdmUoXHJcbiAgICAgICAgX19kaXJuYW1lLFxyXG4gICAgICAgICcuL3NyYy9wdWJsaWMnXHJcbiAgICAgICksXHJcbiAgICAgICdAY29udGV4dCc6IHBhdGgucmVzb2x2ZShcclxuICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgJy4vc3JjL2NvbnRleHQnXHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdYLFNBQVMsb0JBQW9CO0FBQzdZLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU16QyxPQUFPLE9BQU87QUFHZCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixNQUFNLE9BQU8sUUFBUSxJQUFJLFdBQVcsS0FBSztBQUFBLEVBQzNDO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixpQkFBaUIsUUFBUSxJQUFJO0FBQUEsRUFDL0I7QUFBQSxFQUNBLFNBQVMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQUEsRUFDekIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsUUFBUSxLQUFLO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXLEtBQUs7QUFBQSxRQUNkO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGVBQWUsS0FBSztBQUFBLFFBQ2xCO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGdCQUFnQixLQUFLO0FBQUEsUUFDbkI7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUyxLQUFLO0FBQUEsUUFDWjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVLEtBQUs7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFlBQVksS0FBSztBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVSxLQUFLO0FBQUEsUUFDYjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxZQUFZLEtBQUs7QUFBQSxRQUNmO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFlBQVksS0FBSztBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVyxLQUFLO0FBQUEsUUFDZDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVLEtBQUs7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVcsS0FBSztBQUFBLFFBQ2Q7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWSxLQUFLO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
