import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const srcDir = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
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
    }
  }
})
