import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: { // 定义当前开发环境服务器配置
    port: +process.env.VITE_PORT,
    host: "0.0.0.0",
  },
  // vite配置项...
  base: './', // 新增,打包的dist文件的index.html引入资源css/js的路径,这里使用相对路径,预防找不到的问题
  plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "pinia", "vue-router"],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'com@': path.resolve(__dirname, './src/components'),
      'page@': path.resolve(__dirname, './src/pages'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
})
