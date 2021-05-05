import {NuxtConfig} from '@nuxt/types'


const config: NuxtConfig = {
  googleAnalytics: {
    id: 'UA-190154899-1'
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    host: "0.0.0.0",
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'potykion.github.io',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png"},
      {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png"},
      {rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png"},
      {rel: "manifest", href: "/favicon/site.webmanifest"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/swiper',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/swiper.ts",
    "~/plugins/viewer.ts",
    "~/plugins/vue-clipboard.ts",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    '@nuxtjs/google-analytics'

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://www.npmjs.com/package/nuxt-highlightjs
    [
      'nuxt-highlightjs',
      {style: "atom-one-light"},
    ],
    '@nuxtjs/markdownit',
  ],


  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    linkify: true,
  },

  // Отключаем все - чтоб перформанс был
  // https://github.com/larsdouweschuitema-nuxt/nuxt-boilerplate/blob/master/nuxt.config.ts
  loading: false,
  loadingIndicator: false,
  fetch: {
    client: false,
    server: false
  },
  features: {
    store: false,
    middleware: false,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: true,
    componentAliases: false,
    componentClientOnly: false
  },
  build: {
    parallel: true,
    hardSource: true,
    cache: true,
    indicator: false,
    terser: true
  }
}

export default config;
