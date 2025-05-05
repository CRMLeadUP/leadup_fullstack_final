import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: "/static/",  // 🔴 Isso diz para o React que os arquivos vão estar na pasta /static/
  build: {
    outDir: 'dist',        // Para onde o React gera o build
    emptyOutDir: true,
    assetsDir: "assets"    // Os arquivos como JS e CSS vão para /static/assets/
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
