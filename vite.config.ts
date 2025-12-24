import { defineConfig } from 'vite';

export default defineConfig({
  // Root is current directory
  root: './',
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});