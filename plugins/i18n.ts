import { createI18n } from 'vue-i18n'

import de from '../locales/de.json'
import en from '../locales/en.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    warnHtmlMessage: false,
    messages: {
      en,
      de
    }
  })

  vueApp.use(i18n)
})
