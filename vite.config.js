import { defineConfig } from "vite";

export default defineConfig({
  // Use relative asset paths so the site works in any GitHub Pages repo name.
  base: "./",
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Keep filenames stable so GitHub Pages clients don't break on stale cache.
        entryFileNames: "assets/app.js",
        chunkFileNames: "assets/chunk-[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "assets/app.css";
          }
          return "assets/[name][extname]";
        }
      }
    }
  }
});
