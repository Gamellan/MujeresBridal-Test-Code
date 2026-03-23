import { defineConfig } from "vite";

export default defineConfig({
  // Use relative asset paths so the site works in any GitHub Pages repo name.
  base: "./",
  build: {
    outDir: "docs",
    emptyOutDir: true
  }
});
