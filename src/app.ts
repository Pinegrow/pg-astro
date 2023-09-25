// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtools = devtools
// }

// import 'uno.css' // Not required for astro unocss integration

import type {App} from 'vue'

import pinia from '@/plugins/pinia'
import head from '@/plugins/head'

export default (app: App) => {
  app.use(pinia)
  app.use(head)
}
