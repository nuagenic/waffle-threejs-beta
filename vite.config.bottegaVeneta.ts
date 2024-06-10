import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  root: "project/playground/src/",
  publicDir: "../static/",
  base: "./",
  server: {
    host: true, // Open to local network and display URL
  },
  build: {
    outDir: "../dist", // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true, // Add sourcemap
  },
});
