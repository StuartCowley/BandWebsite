import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  // Keep the existing VUE_APP_* env var names so the hosting config doesn't need changing
  envPrefix: ["VITE_", "VUE_APP_"],
  css: {
    preprocessorOptions: {
      scss: {
        // Lets components keep using `@use "src/scss/toolkit" as *;`
        loadPaths: [projectRoot]
      }
    }
  }
});
