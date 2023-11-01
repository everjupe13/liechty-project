import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // imports: {
  //   autoImport: false
  // },

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

  components: [
    // disabled auto-importing
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
  }

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "~/assets/scss/core.scss" as *;'
  //       }
  //     }
  //   }
  // }
})
