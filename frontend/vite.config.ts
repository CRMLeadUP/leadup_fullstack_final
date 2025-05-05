import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: "/static/",  // Necessário para garantir que os arquivos JS/CSS sejam encontrados corretamente
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: "assets", // Coloca arquivos estáticos na pasta /static/assets/
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
});
