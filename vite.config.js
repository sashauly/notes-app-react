import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  build: {
    outDir: 'build',
  },
  base: '/notes-app-react/',
  plugins: [react()],
}));
