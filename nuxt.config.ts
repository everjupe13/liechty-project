import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }]
    }
  },

  ssr: false,

  devtools: { enabled: false },

  experimental: {
    renderJsonPayloads: false
  },

  runtimeConfig: {
    public: {
      baseUrl: 'https://liechty.li'
    }
  },

  modules: ['@nuxtjs/eslint-module', '@pinia/nuxt'],

  // an empty array is disabling auto-importing
  components: [
    // {
    //   path: '~/components',
    //   pathPrefix: false
    // }
  ],

  alias: {
    '~': fileURLToPath(new URL('./', import.meta.url)),
    '@': fileURLToPath(new URL('./', import.meta.url)),
    assets: fileURLToPath(new URL('assets', import.meta.url)),
    public: fileURLToPath(new URL('public', import.meta.url))
  },

  css: [
    'vue-final-modal/style.css',
    'swiper/css',
    'swiper/css/free-mode',
    'swiper/css/pagination',
    'swiper/css/thumbs',

    '~/assets/scss/tailwind.scss',
    '~/assets/scss/index.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/custom-scrollbar.scss',
    '~/assets/scss/vue-transition-animations.scss'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {}
    }
  },

  build: {
    transpile: ['vue-i18n']
  },

  vite: {
    //   css: {
    //     preprocessorOptions: {
    //       scss: {
    //         additionalData: '@use "~/assets/scss/core.scss" as *;'
    //       }
    //     }
    //   }
    plugins: [
      VueI18nVitePlugin({
        strictMessage: false,
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  }
})
