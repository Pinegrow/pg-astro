<script setup lang="ts">
  import {useHead, useSeoMeta} from 'unhead'

  // import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
  // import type { Script } from '@unhead/schema'
  // type TurboScript = Script & { once: true }

  import site from '~/site'
  import image from '@/screenshots/image.jpg'
  // import { pg_font_urls } from '~~/themes/pg-tailwindcss/tokens.mjs'

  const link: any = [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.svg',
    },
  ]
  const noscript: any = []

  // if (pg_font_urls.length) {
  //   const googleapis = 'https://fonts.googleapis.com'
  //   const gstatic = 'https://fonts.gstatic.com'
  //   link.push(
  //     { rel: 'dns-prefetch', href: googleapis },
  //     { rel: 'dns-prefetch', href: gstatic },
  //     { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
  //     { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
  //     {
  //       rel: 'preload',
  //       as: 'style',
  //       onload: "this.onload=null;this.rel='stylesheet'",
  //       href: pg_font_urls.toString(),
  //     },
  //   )
  //   noscript.push(
  //     `<link rel="stylesheet" crossorigin="anonymous" href="${pg_font_urls.toString()}" />`,
  //   )
  // }

  const {title, description, url} = site

  useSeoMeta({
    // title,
    // description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogImageAlt: title,
    // og:image:width
    // og:image:height
    // og:image:alt
    // og:image: type
    // og:image: secure_url
    ogUrl: url,
    ogSiteName: title,
    // og: locale
    // og: type
  })

  useHead({
    // title,
    // titleTemplate: (titleChunk) => {
    //   return titleChunk ? `${titleChunk} - ${title}` : title
    // },
    htmlAttrs: {lang: 'en-US'},
    meta: [
      {property: 'charset', content: 'utf-8'},
      {
        property: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {property: 'author', content: 'Pinegrow'},
      // { property: 'keywords', content: computed(() => frontmatter.tags) },
      {
        property: 'twitter:title',
        content: title,
      },
      {
        property: 'twitter:description',
        content: description,
      },
      {
        property: 'twitter:image',
        content: image,
      },
      {
        property: 'twitter:image:alt',
        content: title,
      },
      {
        property: 'twitter:site',
        content: url,
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    // script: [{innerHTML: checkDarkTheme, once: true} as TurboScript],
    link,
    noscript,
  })
</script>

<template>
  <div></div>
</template>
