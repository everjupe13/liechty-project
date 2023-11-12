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
        class="absolute bottom-20 right-20 h-auto w-full max-w-[420px] rounded-[14px] bg-dark p-20 md:max-w-[calc(100%-32px)]"
      >
        <p class="mb-20 font-medium text-white text-18 md:text-16">
          We use cookies to ensure you get the best experience on our website.
        </p>
        <AppButton theme="blue" fluid @click="confirmCookie">Confirm</AppButton>
      </div>
    </transition>
  </div>
</template>
