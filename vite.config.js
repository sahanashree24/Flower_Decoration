import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProd ? '/Flower_Decoration/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@css': path.resolve(__dirname, 'src/styles/css') },
  },
});






