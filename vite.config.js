import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Flower_Decoration/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@css': path.resolve(__dirname, 'src/styles/css'),
    },
  },
});


