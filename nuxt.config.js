export default {
  googleAnalytics: {
    id: 'UA-190154899-1'
  },

  // ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: "0.0.0.0",
  },

  router: {
    trailingSlash: false,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Блог из-под палки',
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
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    // subsets: 'cyrillic',
    families: {
      "Open+Sans": [400, 700],
      "Roboto": [400, 700, 900],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, {isClient}) {
      // Чтоб дебажить можно было
      // https://stackoverflow.com/a/57392125/5500609
      // Для дебага asyncData используй
      // fetchOnServer: false
      if (isClient) {
        config.devtool = '#source-map'
      }
    }
  },
}


