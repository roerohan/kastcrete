import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  server: {
    port: 3000,
  },
  build: {
    outDir: "../dist",
  },
  base: process.env.CI ? process.env.REPOSITORY_NAME : '',
});
