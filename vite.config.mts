// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import vueDevTools from 'vite-plugin-vue-devtools'


// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import electron from "vite-plugin-electron"
import electronRenderer from "vite-plugin-electron-renderer"
import polyfillExports from "vite-plugin-electron-renderer"
// import monacoEditorPlugin from 'vite-plugin-monaco-editor'
// import Icons from "unplugin-icons/vite"
// import IconResolver from "unplugin-icons/resolver" 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify(),
    Components(),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
    electron([{
      entry: "electron-main/index.ts", // 主进程文件
    },
    {
      entry: 'electron-preload/preload.ts'
    }
    ]),
    vueDevTools(),
    electronRenderer(),
    polyfillExports(),
    // monacoEditorPlugin({
    //   languageWorkers: ['editorWorkerService', 'typescript', 'json', 'html']
    // })
  ],
  build: {
    emptyOutDir: false, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
    outDir: "dist-electron"
  },
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  // server: {
  //   port: 3000,
  // },
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler',
      },
    },
  },
  optimizeDeps: {
    include: [
      'monaco-editor/esm/vs/editor/editor.worker?worker',
      'monaco-editor/esm/vs/language/json/json.worker?worker',
      'monaco-editor/esm/vs/language/typescript/ts.worker?worker',
    ]
  }
})
