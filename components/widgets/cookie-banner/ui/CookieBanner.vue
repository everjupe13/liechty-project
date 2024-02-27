<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { AppButton } from '@/components/shared/button'

const LOCAL_STORAGE_STATE_KEY = 'cookie-accepted'
const isVisible = ref(false)

onMounted(() => {
  const stateStorage = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_STATE_KEY) || 'null'
  ) as boolean | null

  if (!stateStorage) {
    isVisible.value = true
  }
})

const confirmCookie = () => {
  localStorage.setItem(LOCAL_STORAGE_STATE_KEY, 'true')
  isVisible.value = false
}

const LOCALES = {
  en: {
    title: 'Cookies',
    text: `
      We use cookies to make our website more user-friendly and to
      continuously improve your web experience. While some of the cookies
      may be strictly necessary for your usage of the website and its
      features, others help us to improve your online experience. You can
      accept all cookies by clicking "I accept" or reject all but the
      strictly necessary cookies by clicking on "Accept only strictly
      necessary cookies". To find further information about what cookies we
      use, please consult our
    `
  },
  de: {
    title: 'Kekse',
    text: `
      Wir verwenden Cookies, um unsere Website benutzerfreundlicher zu gestalten
      und um Ihr Web-Erlebnis kontinuierlich zu verbessern. Während einige der
      Cookies für die Nutzung der Website und ihrer Funktionen unbedingt
      erforderlich sind, helfen uns andere dabei, Ihr Online-Erlebnis zu
      verbessern. Sie können alle Cookies akzeptieren, indem Sie auf "Ich
      akzeptiere" klicken, oder alle Cookies bis auf die unbedingt notwendigen
      ablehnen, indem Sie auf "Nur unbedingt notwendige Cookies akzeptieren"
      klicken. Weitere Informationen darüber, welche Cookies wir verwenden, finden
      Sie in unserer
    `
  }
}

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')
const currentLocaleData = computed(() => LOCALES[locale.value as 'de' | 'en'])
</script>

<template>
  <div class="fixed bottom-0 right-0 z-[9999] h-0 w-full">
    <transition name="fade-effect">
      <div
        v-if="isVisible"
        class="absolute bottom-20 right-20 h-auto w-full max-w-[560px] rounded-[14px] bg-dark p-20 md:max-w-[calc(100%-32px)]"
      >
        <h3 class="mb-10 font-bold text-white text-20 md:text-18">
          {{ currentLocaleData.title }}
        </h3>
        <p class="mb-20 font-medium text-white text-14">
          {{ currentLocaleData.text }}
          <NuxtLink href="/privacy-policy" class="text-[#1689f3]">
            {{ isEN ? 'Privacy Policy' : 'Datenschutzerklärung' }}
          </NuxtLink>
        </p>
        <div class="flex items-stretch gap-15 md:flex-col">
          <div class="flex flex-grow flex-col">
            <AppButton
              theme="blue"
              fluid
              class="!h-full flex-grow !px-20"
              @click="confirmCookie"
            >
              {{ isEN ? 'Accept' : 'Akzeptieren' }}
            </AppButton>
          </div>
          <div class="flex flex-grow flex-col">
            <AppButton
              theme="blue"
              fluid
              class="!h-full flex-grow !px-20"
              @click="confirmCookie"
            >
              {{
                isEN
                  ? 'Accept only strictly necessary cookies'
                  : 'Akzeptieren Sie nur notwendige Cookies'
              }}
            </AppButton>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
