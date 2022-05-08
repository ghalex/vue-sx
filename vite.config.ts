import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import typescript from 'rollup-plugin-typescript2'

const srcDir = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...typescript({
        tsconfigOverride: {
          declaration: true,
          declarationDir: "dist/types",
          exclude: ['src/dev']
        }
      }),
      apply: 'build'
    },  
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: [
      { find: '@', replacement: srcDir }
    ]
  },
  build: {
    lib: {
      entry: srcDir + '/lib/index.ts',
      name: 'vue-sx',
      fileName: (format) => `vue-sx.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
