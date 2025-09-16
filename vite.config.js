import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import svgSpritePlugin from './src/index.ts'
import svgSpritePlugin from '@pivanov/vite-plugin-svg-sprite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgSpritePlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: '[name]',
      svgDomId: 'svg-sprite',
      svgoConfig: {
        plugins: ['preset-default', 'removeDimensions']
      }
    }),
  ]
})
