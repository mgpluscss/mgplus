import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import stylelint from 'vite-plugin-stylelint';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $package_version: "${process.env.PACKAGE_VERSION}";        
        `
      }
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/mgplus.ts'),
      name: 'mgplusPlugins',
      fileName: 'mgplus-vanilla',
      formats: ['es', 'umd'],
    },
    sourcemap: false,
    cssCodeSplit: true,
    // rollupOptions: {
    //   plugins: [
    //     require('rollup-plugin-postcss')({
    //       plugins: [
    //         require('autoprefixer')()
    //       ]
    //     })
    //   ]
    // }
  },
  plugins: [
    dts({
      tsconfigPath: './tsconfig.node.json',
      include: 'src/plugins/main.ts',
      outDir: 'dist/types'
    }),
    stylelint({
      include: ['src/scss/*.scss']
    })
  ],
});