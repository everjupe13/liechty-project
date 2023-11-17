<script setup lang="ts">
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
</script>

<template>
  <div class="fixed bottom-0 right-0 z-[9999] h-0 w-full">
    <transition name="fade-effect">
      <div
        v-if="isVisible"
        class="absolute bottom-20 right-20 h-auto w-full max-w-[560px] rounded-[14px] bg-dark p-20 md:max-w-[calc(100%-32px)]"
      >
        <h3 class="mb-10 font-bold text-white text-20 md:text-18">Cookies</h3>
        <p class="mb-20 font-medium text-white text-14">
          We use cookies to make our website more user-friendly and to
          continuously improve your web experience. While some of the cookies
          may be strictly necessary for your usage of the website and its
          features, others help us to improve your online experience. You can
          accept all cookies by clicking "I accept" or reject all but the
          strictly necessary cookies by clicking on "Accept only strictly
          necessary cookies". To find further information about what cookies we
          use, please consult our
          <NuxtLink href="/privacy-policy" class="text-[#1689f3]">
            Privacy Policy
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
              Accept
            </AppButton>
          </div>
          <div class="flex flex-grow flex-col">
            <AppButton
              theme="blue"
              fluid
              class="!h-full flex-grow !px-20"
              @click="confirmCookie"
            >
              Accept only strictly necessary cookies
            </AppButton>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
