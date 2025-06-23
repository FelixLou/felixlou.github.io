import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for GitHub Pages
  build: {
    outDir: 'docs', // GitHub Pages can serve from docs folder
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});