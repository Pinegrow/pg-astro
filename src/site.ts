// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'Vue Designer',
  description: 'Vue Designer Astro CSS - Quick start template',
  logo: 'i-emojione-rocket',
  author: 'Pinegrow',
  url: 'https://pg-astro-css.netlify.app',
  github: 'https://github.com/pinegrow/pg-astro',
  ogImageUrl: 'og-image.jpg', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      {
        title: 'Home',
        icon: 'i-mdi-home',
        to: '/',
      },
    ],
    secondary: [
      // {
      //   title: 'About',
      //   icon: 'i-mdi-home',
      //   to: '/about',
      // },
    ],
  },
}
