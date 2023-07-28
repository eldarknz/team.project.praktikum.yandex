// ../client/vite.config.ts
import { defineConfig } from "file:///D:/PROGRAMMING/_PROJECTS/course_team.project.praktikum.yandex/node_modules/vite/dist/node/index.js";
import react from "file:///D:/PROGRAMMING/_PROJECTS/course_team.project.praktikum.yandex/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///D:/PROGRAMMING/_PROJECTS/course_team.project.praktikum.yandex/node_modules/vite-plugin-svgr/dist/index.js";
import dotenv from "file:///D:/PROGRAMMING/_PROJECTS/course_team.project.praktikum.yandex/node_modules/dotenv/lib/main.js";
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
    enabled: true
  },
  injectManifest: {
    globPatterns: ["**/*.{html,js,css,png,svg,ico,mp3}"],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vY2xpZW50L3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcUFJPR1JBTU1JTkdcXFxcX1BST0pFQ1RTXFxcXGNvdXJzZV90ZWFtLnByb2plY3QucHJha3Rpa3VtLnlhbmRleFxcXFxwYWNrYWdlc1xcXFxjbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFBST0dSQU1NSU5HXFxcXF9QUk9KRUNUU1xcXFxjb3Vyc2VfdGVhbS5wcm9qZWN0LnByYWt0aWt1bS55YW5kZXhcXFxccGFja2FnZXNcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9QUk9HUkFNTUlORy9fUFJPSkVDVFMvY291cnNlX3RlYW0ucHJvamVjdC5wcmFrdGlrdW0ueWFuZGV4L3BhY2thZ2VzL2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XHJcbmltcG9ydCB0eXBlIHsgVml0ZVBXQU9wdGlvbnMgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBXQUNvbmZpZzogUGFydGlhbDxWaXRlUFdBT3B0aW9ucz4gPSB7XHJcbiAgc3RyYXRlZ2llczogJ2luamVjdE1hbmlmZXN0JyxcclxuICBzcmNEaXI6ICdzcmMnLFxyXG4gIGZpbGVuYW1lOiAnc3cuanMnLFxyXG4gIG91dERpcjogJ2Rpc3QnLFxyXG4gIGRldk9wdGlvbnM6IHtcclxuICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgfSxcclxuICBpbmplY3RNYW5pZmVzdDoge1xyXG4gICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2h0bWwsanMsY3NzLHBuZyxzdmcsaWNvLG1wM30nXSxcclxuICAgIGdsb2JJZ25vcmVzOiBbJ21hc2thYmxlLWljb24tMTkyLnBuZycsICdpY29uLTE5Mi5wbmcnLCAnaWNvbi0yNTYucG5nJywgJ2ljb24tNTEyLnBuZyddLFxyXG4gIH0sXHJcbiAgd29ya2JveDoge30sXHJcbiAgbWFuaWZlc3Q6IHtcclxuICAgIG5hbWU6IFwidGhlVGVhbSdzIGdhbWVcIixcclxuICAgIHNob3J0X25hbWU6ICd0VCBHYW1lJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcInRoZVRlYW0ncyBnYW1lIGZvciBwcmFrdGlrdW1cIixcclxuICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBpY29uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiAnbWFza2FibGUtaWNvbi0xOTIucG5nJyxcclxuICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6ICdpY29uLTE5Mi5wbmcnLFxyXG4gICAgICAgIHNpemVzOiAnMTkyeDE5MicsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6ICdpY29uLTI1Ni5wbmcnLFxyXG4gICAgICAgIHNpemVzOiAnMjU2eDI1NicsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6ICdpY29uLTUxMi5wbmcnLFxyXG4gICAgICAgIHNpemVzOiAnNTEyeDUxMicsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnQWxpYXNlcyA9IHtcclxuICAnQGFwaSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hcGknKSxcclxuICAnQGFzc2V0cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hc3NldHMnKSxcclxuICAnQGNvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxyXG4gICdAY29udHJvbGxlcnMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29udHJvbGxlcnMnKSxcclxuICAnQGNvcmUnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29yZScpLFxyXG4gICdAaG9va3MnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvaG9va3MnKSxcclxuICAnQGxheW91dHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvbGF5b3V0cycpLFxyXG4gICdAcGFnZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcGFnZXMnKSxcclxuICAnQHJvdXRlcnMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcm91dGVycycpLFxyXG4gICdAc2VydmljZSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zZXJ2aWNlJyksXHJcbiAgJ0BzdHlsZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc3R5bGVzJyksXHJcbiAgJ0B1dGlscyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy91dGlscycpLFxyXG4gICdAc2hhcmVkJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NoYXJlZCcpLFxyXG4gICdAcHVibGljJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vcHVibGljJyksXHJcbn07XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LkNMSUVOVF9QT1JUKSB8fCAzMDAxLFxyXG4gIH0sXHJcbiAgcHJldmlldzoge1xyXG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LkNMSUVOVF9QUkVWSUVXX1BPUlQpIHx8IDgwODAsXHJcbiAgfSxcclxuICBkZWZpbmU6IHtcclxuICAgIF9fU0VSVkVSX1BPUlRfXzogcHJvY2Vzcy5lbnYuU0VSVkVSX1BPUlQsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbc3ZncigpLCByZWFjdCgpLCBWaXRlUFdBKFBXQUNvbmZpZyldLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiBjb25maWdBbGlhc2VzLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFhLFNBQVMsb0JBQW9CO0FBQ2xjLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sVUFBVTtBQUNqQixTQUFTLGVBQWU7QUFMeEIsSUFBTSxtQ0FBbUM7QUFRekMsT0FBTyxPQUFPO0FBRVAsSUFBTSxZQUFxQztBQUFBLEVBQ2hELFlBQVk7QUFBQSxFQUNaLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxFQUNSLFlBQVk7QUFBQSxJQUNWLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQSxnQkFBZ0I7QUFBQSxJQUNkLGNBQWMsQ0FBQyxvQ0FBb0M7QUFBQSxJQUNuRCxhQUFhLENBQUMseUJBQXlCLGdCQUFnQixnQkFBZ0IsY0FBYztBQUFBLEVBQ3ZGO0FBQUEsRUFDQSxTQUFTLENBQUM7QUFBQSxFQUNWLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLGFBQWE7QUFBQSxJQUNiLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLGdCQUFnQjtBQUFBLEVBQzNCLFFBQVEsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxFQUMzQyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsRUFDakQsZUFBZSxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsRUFDekQsZ0JBQWdCLEtBQUssUUFBUSxrQ0FBVyxtQkFBbUI7QUFBQSxFQUMzRCxTQUFTLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsRUFDN0MsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLEVBQy9DLFlBQVksS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxFQUNuRCxVQUFVLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsRUFDL0MsWUFBWSxLQUFLLFFBQVEsa0NBQVcsZUFBZTtBQUFBLEVBQ25ELFlBQVksS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxFQUNuRCxXQUFXLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsRUFDakQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLEVBQy9DLFdBQVcsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxFQUM5QyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxVQUFVO0FBQy9DO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTSxPQUFPLFFBQVEsSUFBSSxXQUFXLEtBQUs7QUFBQSxFQUMzQztBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTSxPQUFPLFFBQVEsSUFBSSxtQkFBbUIsS0FBSztBQUFBLEVBQ25EO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixpQkFBaUIsUUFBUSxJQUFJO0FBQUEsRUFDL0I7QUFBQSxFQUNBLFNBQVMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLFFBQVEsU0FBUyxDQUFDO0FBQUEsRUFDN0MsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLEVBQ1Q7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
