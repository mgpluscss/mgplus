import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({

  build: {
    lib: {
      entry: resolve(__dirname, 'src/mgplus.ts'),
      name: 'mgplusPlugins',
      fileName: 'mgplus-plugins',
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
    }),
  ],
});