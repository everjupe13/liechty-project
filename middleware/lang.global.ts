import { defineNuxtRouteMiddleware } from 'nuxt/app'

const languages = new Set(['en', 'de'])

export default defineNuxtRouteMiddleware((to, _from) => {
  if (process.server) {
    return
  }

  const splittedRoute = to.fullPath.slice(1).split('/')
  const langParam = splittedRoute[0]
  const currentLanguage =
    (localStorage.getItem('selected-language') as 'en' | 'de' | null) || 'en'

  if (!languages.has(langParam)) {
    const formedUrl = `/${currentLanguage}/${splittedRoute.join('/')}`
    return navigateTo(formedUrl)
  }
})
