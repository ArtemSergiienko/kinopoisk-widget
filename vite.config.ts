import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/kinopoisk-widget/',
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8000,
    open: true,
  },
});
