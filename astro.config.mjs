import {defineConfig} from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'

import Pinegrow from '@pinegrow/astro-module'
import {fileURLToPath, URL} from 'node:url'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/astro'
import Unocss from 'unocss/astro'
import presetIcons from '@unocss/preset-icons'
// import VueDevTools from 'vite-plugin-vue-devtools'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
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
    vue(),
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
        /.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /.vue$/,
        /.vue?vue/, // .vue
        /.md$/, // .md
      ],
      imports: [
        'vue',
        // 'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        // '@vueuse/core',
        'pinia',
      ],
      dirs: [
        // 'src/composables',
        // 'src/stores',
      ],
      vueTemplate: true,
      dts: 'auto-imports.d.ts',
    }),
  ],
  vite: {
    plugins: [
      AutoImportComponents({
        // dirs: ['src/components'], // default
        // resolvers: [], // Auto-import using resolvers
        dts: 'components.d.ts',
      }),
      // VueDevTools()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },
})
