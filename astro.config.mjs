import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'

import Pinegrow from '@pinegrow/astro-module'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/astro'
import Unocss from 'unocss/astro'
import presetIcons from '@unocss/preset-icons'
// import VueDevTools from 'vite-plugin-vue-devtools'

import site from './src/site'
const {url} = site

// https://astro.build/config
export default defineConfig({
  site: url,
  integrations: [
    Pinegrow({
      liveDesigner: {
        iconPreferredCase: 'unocss',
        // default value (can be removed), unocss by default uses the unocss format for icon names
        devtoolsKey: 'devtools',
        // see app.ts
        // plugins: [
        //   {
        //     name: 'My Awesome Lib 3.0',
        //     key: 'my-awesome-lib',
        //     pluginPath: fileURLToPath(
        //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
        //     ),
        //   },
        // ],
      },
    }),
    vue({
      appEntrypoint: '/src/app',
    }),
    react(),
    preact(),
    svelte(),
    Unocss({
      presets: [
        presetIcons({
          prefix: 'i-', // default prefix, do not change
        }),
      ],
    }),
    mdx(),
    sitemap(),
    // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
    AutoImportAPIs({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
        /\.mdx$/, // .mdx
      ],
      imports: [
        'vue',
        // 'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
        'pinia',
      ],
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
      dts: 'auto-imports.d.ts',
    }),
  ],
  vite: {
    plugins: [
      // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
      AutoImportComponents({
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        dirs: ['src/components'],

        // allow auto load markdown components under ./src/components/
        extensions: ['vue', 'md'],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

        // resolvers: [], // Auto-import using resolvers
        dts: 'components.d.ts',
      }),
      // VueDevTools()
    ],
    resolve: {
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },
})
