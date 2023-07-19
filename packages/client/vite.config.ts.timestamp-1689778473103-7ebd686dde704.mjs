// ../client/vite.config.ts
import { defineConfig } from "file:///Users/nikitaprokuratov/Desktop/yap-middle/team.project.praktikum.yandex/node_modules/vite/dist/node/index.js";
import react from "file:///Users/nikitaprokuratov/Desktop/yap-middle/team.project.praktikum.yandex/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///Users/nikitaprokuratov/Desktop/yap-middle/team.project.praktikum.yandex/node_modules/vite-plugin-svgr/dist/index.js";
import dotenv from "file:///Users/nikitaprokuratov/Desktop/yap-middle/team.project.praktikum.yandex/node_modules/dotenv/lib/main.js";
import path from "path";
import { VitePWA } from "file:///Users/nikitaprokuratov/Desktop/yap-middle/team.project.praktikum.yandex/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "/Users/nikitaprokuratov/Desktop/yap-middle/team.project.praktikum.yandex/packages/client";
dotenv.config();
var PWAConfig = {
  strategies: "injectManifest",
  srcDir: "src",
  filename: "sw.js",
  outDir: "dist",
  devOptions: {
    enabled: true
  },
  injectManifest: {
    globPatterns: ["**/*.{html,js,css,png,svg,ico}"],
    globIgnores: ["maskable-icon-192.png", "icon-192.png", "icon-256.png", "icon-512.png"]
  },
  workbox: {},
  manifest: {
    name: "theTeam's game",
    short_name: "tT Game",
    description: "theTeam's game for praktikum",
    theme_color: "#ffffff",
    icons: [
      {
        src: "maskable-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "icon-256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
};
var configAliases = {
  "@api": path.resolve(__vite_injected_original_dirname, "./src/api"),
  "@assets": path.resolve(__vite_injected_original_dirname, "./src/assets"),
  "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
  "@controllers": path.resolve(__vite_injected_original_dirname, "./src/controllers"),
  "@core": path.resolve(__vite_injected_original_dirname, "./src/core"),
  "@hooks": path.resolve(__vite_injected_original_dirname, "./src/hooks"),
  "@layouts": path.resolve(__vite_injected_original_dirname, "./src/layouts"),
  "@pages": path.resolve(__vite_injected_original_dirname, "./src/pages"),
  "@routers": path.resolve(__vite_injected_original_dirname, "./src/routers"),
  "@service": path.resolve(__vite_injected_original_dirname, "./src/service"),
  "@styles": path.resolve(__vite_injected_original_dirname, "./src/styles"),
  "@utils": path.resolve(__vite_injected_original_dirname, "./src/utils"),
  "@shared": path.resolve(__vite_injected_original_dirname, "../shared"),
  "@public": path.resolve(__vite_injected_original_dirname, "./public")
};
var vite_config_default = defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3001
  },
  preview: {
    port: Number(process.env.CLIENT_PREVIEW_PORT) || 8080
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT
  },
  plugins: [svgr(), react(), VitePWA(PWAConfig)],
  resolve: {
    alias: configAliases
  }
});
export {
  PWAConfig,
  configAliases,
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vY2xpZW50L3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL25pa2l0YXByb2t1cmF0b3YvRGVza3RvcC95YXAtbWlkZGxlL3RlYW0ucHJvamVjdC5wcmFrdGlrdW0ueWFuZGV4L3BhY2thZ2VzL2NsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL25pa2l0YXByb2t1cmF0b3YvRGVza3RvcC95YXAtbWlkZGxlL3RlYW0ucHJvamVjdC5wcmFrdGlrdW0ueWFuZGV4L3BhY2thZ2VzL2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbmlraXRhcHJva3VyYXRvdi9EZXNrdG9wL3lhcC1taWRkbGUvdGVhbS5wcm9qZWN0LnByYWt0aWt1bS55YW5kZXgvcGFja2FnZXMvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xuaW1wb3J0IHR5cGUgeyBWaXRlUFdBT3B0aW9ucyB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5cbmRvdGVudi5jb25maWcoKTtcblxuZXhwb3J0IGNvbnN0IFBXQUNvbmZpZzogUGFydGlhbDxWaXRlUFdBT3B0aW9ucz4gPSB7XG4gIHN0cmF0ZWdpZXM6ICdpbmplY3RNYW5pZmVzdCcsXG4gIHNyY0RpcjogJ3NyYycsXG4gIGZpbGVuYW1lOiAnc3cuanMnLFxuICBvdXREaXI6ICdkaXN0JyxcbiAgZGV2T3B0aW9uczoge1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gIH0sXG4gIGluamVjdE1hbmlmZXN0OiB7XG4gICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2h0bWwsanMsY3NzLHBuZyxzdmcsaWNvfSddLFxuICAgIGdsb2JJZ25vcmVzOiBbJ21hc2thYmxlLWljb24tMTkyLnBuZycsICdpY29uLTE5Mi5wbmcnLCAnaWNvbi0yNTYucG5nJywgJ2ljb24tNTEyLnBuZyddLFxuICB9LFxuICB3b3JrYm94OiB7fSxcbiAgbWFuaWZlc3Q6IHtcbiAgICBuYW1lOiBcInRoZVRlYW0ncyBnYW1lXCIsXG4gICAgc2hvcnRfbmFtZTogJ3RUIEdhbWUnLFxuICAgIGRlc2NyaXB0aW9uOiBcInRoZVRlYW0ncyBnYW1lIGZvciBwcmFrdGlrdW1cIixcbiAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgIGljb25zOiBbXG4gICAgICB7XG4gICAgICAgIHNyYzogJ21hc2thYmxlLWljb24tMTkyLnBuZycsXG4gICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiAnaWNvbi0xOTIucG5nJyxcbiAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICdpY29uLTI1Ni5wbmcnLFxuICAgICAgICBzaXplczogJzI1NngyNTYnLFxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJ2ljb24tNTEyLnBuZycsXG4gICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ0FsaWFzZXMgPSB7XG4gICdAYXBpJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2FwaScpLFxuICAnQGFzc2V0cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hc3NldHMnKSxcbiAgJ0Bjb21wb25lbnRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMnKSxcbiAgJ0Bjb250cm9sbGVycyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb250cm9sbGVycycpLFxuICAnQGNvcmUnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29yZScpLFxuICAnQGhvb2tzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2hvb2tzJyksXG4gICdAbGF5b3V0cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9sYXlvdXRzJyksXG4gICdAcGFnZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcGFnZXMnKSxcbiAgJ0Byb3V0ZXJzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3JvdXRlcnMnKSxcbiAgJ0BzZXJ2aWNlJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3NlcnZpY2UnKSxcbiAgJ0BzdHlsZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc3R5bGVzJyksXG4gICdAdXRpbHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvdXRpbHMnKSxcbiAgJ0BzaGFyZWQnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc2hhcmVkJyksXG4gICdAcHVibGljJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vcHVibGljJyksXG59O1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LkNMSUVOVF9QT1JUKSB8fCAzMDAxLFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LkNMSUVOVF9QUkVWSUVXX1BPUlQpIHx8IDgwODAsXG4gIH0sXG4gIGRlZmluZToge1xuICAgIF9fU0VSVkVSX1BPUlRfXzogcHJvY2Vzcy5lbnYuU0VSVkVSX1BPUlQsXG4gIH0sXG4gIHBsdWdpbnM6IFtzdmdyKCksIHJlYWN0KCksIFZpdGVQV0EoUFdBQ29uZmlnKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogY29uZmlnQWxpYXNlcyxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwYixTQUFTLG9CQUFvQjtBQUN2ZCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFVBQVU7QUFDakIsU0FBUyxlQUFlO0FBTHhCLElBQU0sbUNBQW1DO0FBUXpDLE9BQU8sT0FBTztBQUVQLElBQU0sWUFBcUM7QUFBQSxFQUNoRCxZQUFZO0FBQUEsRUFDWixRQUFRO0FBQUEsRUFDUixVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsSUFDVixTQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsZ0JBQWdCO0FBQUEsSUFDZCxjQUFjLENBQUMsZ0NBQWdDO0FBQUEsSUFDL0MsYUFBYSxDQUFDLHlCQUF5QixnQkFBZ0IsZ0JBQWdCLGNBQWM7QUFBQSxFQUN2RjtBQUFBLEVBQ0EsU0FBUyxDQUFDO0FBQUEsRUFDVixVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxnQkFBZ0I7QUFBQSxFQUMzQixRQUFRLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsRUFDM0MsV0FBVyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLEVBQ2pELGVBQWUsS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLEVBQ3pELGdCQUFnQixLQUFLLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsRUFDM0QsU0FBUyxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLEVBQzdDLFVBQVUsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxFQUMvQyxZQUFZLEtBQUssUUFBUSxrQ0FBVyxlQUFlO0FBQUEsRUFDbkQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLEVBQy9DLFlBQVksS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxFQUNuRCxZQUFZLEtBQUssUUFBUSxrQ0FBVyxlQUFlO0FBQUEsRUFDbkQsV0FBVyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLEVBQ2pELFVBQVUsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxFQUMvQyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsRUFDOUMsV0FBVyxLQUFLLFFBQVEsa0NBQVcsVUFBVTtBQUMvQztBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU0sT0FBTyxRQUFRLElBQUksV0FBVyxLQUFLO0FBQUEsRUFDM0M7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU0sT0FBTyxRQUFRLElBQUksbUJBQW1CLEtBQUs7QUFBQSxFQUNuRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04saUJBQWlCLFFBQVEsSUFBSTtBQUFBLEVBQy9CO0FBQUEsRUFDQSxTQUFTLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxRQUFRLFNBQVMsQ0FBQztBQUFBLEVBQzdDLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNUO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
