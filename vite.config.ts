import { defineConfig } from 'vite';
import htmlIncludePlugin from './vite-plugin-html-include.ts';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [
    htmlIncludePlugin(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(/\$PACKAGE_VERSION/g, process.env.PACKAGE_VERSION);
      }
    }
  ],
  build: {
    sourcemap: true
  }
});