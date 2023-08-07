// ../client/vite.config.ts
import { defineConfig } from "file:///D:/PROGRAMMING/_PROJECTS/course_team.project.praktikum.yandex/node_modules/vite/dist/node/index.js";
import react from "file:///D:/PROGRAMMING/_PROJECTS/course_team.project.praktikum.yandex/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///D:/PROGRAMMING/_PROJECTS/course_team.project.praktikum.yandex/node_modules/vite-plugin-svgr/dist/index.js";
import dotenv from "file:///D:/PROGRAMMING/_PROJECTS/course_team.project.praktikum.yandex/packages/client/node_modules/dotenv/lib/main.js";
import path from "path";
import { VitePWA } from "file:///D:/PROGRAMMING/_PROJECTS/course_team.project.praktikum.yandex/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "D:\\PROGRAMMING\\_PROJECTS\\course_team.project.praktikum.yandex\\packages\\client";
dotenv.config();
var PWAConfig = {
  strategies: "injectManifest",
  srcDir: "src",
  filename: "sw.js",
  outDir: "dist",
  devOptions: {
    enabled: false
  },
  injectManifest: {
    globPatterns: ["**/*.{html,js,css,png,svg,ico,mp3}"],
    globIgnores: ["maskable-icon-192.png", "icon-192.png", "icon-256.png", "icon-512.png"]
  },
  mode: process.env.NODE_ENV,
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
  "@public": path.resolve(__vite_injected_original_dirname, "./public")
};
var vite_config_default = defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3001
  },
  preview: {
    port: Number(process.env.CLIENT_PREVIEW_PORT) || 8080
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vY2xpZW50L3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcUFJPR1JBTU1JTkdcXFxcX1BST0pFQ1RTXFxcXGNvdXJzZV90ZWFtLnByb2plY3QucHJha3Rpa3VtLnlhbmRleFxcXFxwYWNrYWdlc1xcXFxjbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFBST0dSQU1NSU5HXFxcXF9QUk9KRUNUU1xcXFxjb3Vyc2VfdGVhbS5wcm9qZWN0LnByYWt0aWt1bS55YW5kZXhcXFxccGFja2FnZXNcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9QUk9HUkFNTUlORy9fUFJPSkVDVFMvY291cnNlX3RlYW0ucHJvamVjdC5wcmFrdGlrdW0ueWFuZGV4L3BhY2thZ2VzL2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcbmltcG9ydCB0eXBlIHsgVml0ZVBXQU9wdGlvbnMgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBjb25zdCBQV0FDb25maWc6IFBhcnRpYWw8Vml0ZVBXQU9wdGlvbnM+ID0ge1xuICBzdHJhdGVnaWVzOiAnaW5qZWN0TWFuaWZlc3QnLFxuICBzcmNEaXI6ICdzcmMnLFxuICBmaWxlbmFtZTogJ3N3LmpzJyxcbiAgb3V0RGlyOiAnZGlzdCcsXG4gIGRldk9wdGlvbnM6IHtcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgfSxcbiAgaW5qZWN0TWFuaWZlc3Q6IHtcbiAgICBnbG9iUGF0dGVybnM6IFsnKiovKi57aHRtbCxqcyxjc3MscG5nLHN2ZyxpY28sbXAzfSddLFxuICAgIGdsb2JJZ25vcmVzOiBbJ21hc2thYmxlLWljb24tMTkyLnBuZycsICdpY29uLTE5Mi5wbmcnLCAnaWNvbi0yNTYucG5nJywgJ2ljb24tNTEyLnBuZyddLFxuICB9LFxuICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOViBhcyBhbnksXG4gIHdvcmtib3g6IHt9LFxuICBtYW5pZmVzdDoge1xuICAgIG5hbWU6IFwidGhlVGVhbSdzIGdhbWVcIixcbiAgICBzaG9ydF9uYW1lOiAndFQgR2FtZScsXG4gICAgZGVzY3JpcHRpb246IFwidGhlVGVhbSdzIGdhbWUgZm9yIHByYWt0aWt1bVwiLFxuICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgaWNvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgc3JjOiAnbWFza2FibGUtaWNvbi0xOTIucG5nJyxcbiAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICdpY29uLTE5Mi5wbmcnLFxuICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJ2ljb24tMjU2LnBuZycsXG4gICAgICAgIHNpemVzOiAnMjU2eDI1NicsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiAnaWNvbi01MTIucG5nJyxcbiAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlnQWxpYXNlcyA9IHtcbiAgJ0BhcGknOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvYXBpJyksXG4gICdAYXNzZXRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2Fzc2V0cycpLFxuICAnQGNvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxuICAnQGNvbnRyb2xsZXJzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbnRyb2xsZXJzJyksXG4gICdAY29yZSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb3JlJyksXG4gICdAaG9va3MnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvaG9va3MnKSxcbiAgJ0BsYXlvdXRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2xheW91dHMnKSxcbiAgJ0BwYWdlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9wYWdlcycpLFxuICAnQHJvdXRlcnMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcm91dGVycycpLFxuICAnQHNlcnZpY2UnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc2VydmljZScpLFxuICAnQHN0eWxlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zdHlsZXMnKSxcbiAgJ0B1dGlscyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy91dGlscycpLFxuICAnQHB1YmxpYyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3B1YmxpYycpLFxufTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IE51bWJlcihwcm9jZXNzLmVudi5DTElFTlRfUE9SVCkgfHwgMzAwMSxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IE51bWJlcihwcm9jZXNzLmVudi5DTElFTlRfUFJFVklFV19QT1JUKSB8fCA4MDgwLFxuICB9LFxuICBwbHVnaW5zOiBbc3ZncigpLCByZWFjdCgpLCBWaXRlUFdBKFBXQUNvbmZpZyldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IGNvbmZpZ0FsaWFzZXMsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcWEsU0FBUyxvQkFBb0I7QUFDbGMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsZUFBZTtBQUx4QixJQUFNLG1DQUFtQztBQVF6QyxPQUFPLE9BQU87QUFFUCxJQUFNLFlBQXFDO0FBQUEsRUFDaEQsWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBLEVBQ1IsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsWUFBWTtBQUFBLElBQ1YsU0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLGdCQUFnQjtBQUFBLElBQ2QsY0FBYyxDQUFDLG9DQUFvQztBQUFBLElBQ25ELGFBQWEsQ0FBQyx5QkFBeUIsZ0JBQWdCLGdCQUFnQixjQUFjO0FBQUEsRUFDdkY7QUFBQSxFQUNBLE1BQU0sUUFBUSxJQUFJO0FBQUEsRUFDbEIsU0FBUyxDQUFDO0FBQUEsRUFDVixVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxnQkFBZ0I7QUFBQSxFQUMzQixRQUFRLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsRUFDM0MsV0FBVyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLEVBQ2pELGVBQWUsS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLEVBQ3pELGdCQUFnQixLQUFLLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsRUFDM0QsU0FBUyxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLEVBQzdDLFVBQVUsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxFQUMvQyxZQUFZLEtBQUssUUFBUSxrQ0FBVyxlQUFlO0FBQUEsRUFDbkQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLEVBQy9DLFlBQVksS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxFQUNuRCxZQUFZLEtBQUssUUFBUSxrQ0FBVyxlQUFlO0FBQUEsRUFDbkQsV0FBVyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLEVBQ2pELFVBQVUsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxFQUMvQyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxVQUFVO0FBQy9DO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTSxPQUFPLFFBQVEsSUFBSSxXQUFXLEtBQUs7QUFBQSxFQUMzQztBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTSxPQUFPLFFBQVEsSUFBSSxtQkFBbUIsS0FBSztBQUFBLEVBQ25EO0FBQUEsRUFDQSxTQUFTLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxRQUFRLFNBQVMsQ0FBQztBQUFBLEVBQzdDLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNUO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
