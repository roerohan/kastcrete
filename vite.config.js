import { resolve } from 'path'
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src', 'index.html'),
        about_us: resolve(__dirname, 'src', 'about_us.html'),
        arrah_gardens: resolve(__dirname, 'src', 'arrah_gardens.html'),
        avkash_residences: resolve(__dirname, 'src', 'avkash_residences.html'),
        '12_arrah_gardens': resolve(__dirname, 'src', '12_arrah_gardens.html'),
        krishna_savitri_gardens: resolve(__dirname, 'src', 'krishna_savitri_gardens.html'),
      }
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
  base: process.env.CI ? process.env.REPOSITORY_NAME : '',
});
