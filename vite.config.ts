import { defineConfig } from 'vite';
import htmlIncludePlugin from './vite-plugin-html-include.ts';

export default defineConfig({
  plugins: [
    htmlIncludePlugin(),
  ],
  build: {
    sourcemap: true
  }
});