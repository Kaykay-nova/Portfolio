import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';


export default defineConfig({
  root: './src',
  publicDir: '../public',
  server: {
    hmr: false,
  },
  build: {
    outDir: '../dist',
    modulePreload: false,
  },
  plugins: [react(), svgr()],
});
