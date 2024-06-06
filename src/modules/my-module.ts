// https://docs.astro.build/en/reference/integrations-reference/

import type { AstroIntegration } from 'astro'
import type { UserConfig } from 'vite'

// export interface ModuleOptions {
// 	//...
// }

export default function createIntegration(/* moduleOptions: ModuleOptions */): AstroIntegration {
  // See the Integration API docs for full details
  // https://docs.astro.build/en/reference/integrations-reference/
  return {
    name: '_PACKAGE_NAME_',
    hooks: {
      'astro:config:setup': async ({ updateConfig, injectScript }) => {
        // See the @astrojs/react integration for an example
        // https://github.com/withastro/astro/blob/main/packages/integrations/react/src/index.ts
        updateConfig({
          // vite: await getViteConfiguration(moduleOptions),
        })
      },
      'astro:server:setup': ({ server }) => {
        // @ts-ignore
        // server.config.plugins.splice(astroBuildIndex, 0, liveDesignerPlugin)
      },

      // 'astro:build:setup': ({ vite, pages, target }) => {
      // 	// See the @astrojs/netlify integration for an example
      // 	// https://github.com/withastro/astro/blob/main/packages/integrations/netlify/src/integration-functions.ts
      // },

      // 'astro:build:done': ({ dir, routes }) => {
      // 	// See the @astrojs/partytown integration for an example
      // 	// https://github.com/withastro/astro/blob/main/packages/integrations/partytown/src/index.ts
      // },
    },
  }
}

// async function getViteConfiguration(/*moduleOptions: ModuleOptions*/): Promise<UserConfig> {
// 	let vitePlugin: any

// 	try {
// 		const { liveDesigner } = await import('./live-designer.mjs')

// 		vitePlugin = liveDesigner({
// 			...(moduleOptions?.liveDesigner || {}),
// 		})
// 	} catch (err) {
// 		console.log(err)
// 		console.log('Pinegrow: @pinegrow/astro-module was unable to load @pinegrow/vite-plugin live-designer!')
// 		// console.log(err)
// 	}

// 	const config: UserConfig = {
// 		plugins: vitePlugin ? [vitePlugin] : [],
// 	}

// 	return config
// }
