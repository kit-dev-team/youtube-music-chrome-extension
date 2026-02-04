import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        // ✅ sidepanel은 루트 HTML
        sidepanel: resolve(__dirname, "sidepanel.html"),

        // ✅ service worker
        background: resolve(__dirname, "src/background/background.ts"),

        // ✅ content script
        content: resolve(__dirname, "src/content/content.ts"),
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
