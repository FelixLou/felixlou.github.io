import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // For user GitHub Pages site (username.github.io)
  build: {
    outDir: 'docs', // GitHub Pages can serve from docs folder
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});