<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal'

import { AppFooter } from '@/components/widgets/footer'
import { AppHeader } from '@/components/widgets/header'

const appWidth = ref()
const setAppWidth = (width: number) => {
  appWidth.value = width
}

if (process.client) {
  appWidth.value = ref(window.innerWidth)
  const setWindowWidth = () => setAppWidth.bind(null, window.innerWidth)

  const isMdScreen = computed(() => appWidth.value < 768)
  const isLgScreen = computed(() => appWidth.value > 992)

  provide('isMdScreen', isMdScreen)
  provide('isLgScreen', isLgScreen)

  onMounted(() =>
    window.addEventListener('resize', setWindowWidth, { passive: true })
  )

  onUnmounted(() => window.removeEventListener('resize', setWindowWidth))
}
</script>

<template>
  <AppHeader />
  <main class="main-section-layout">
    <slot></slot>
  </main>
  <AppFooter />
  <ModalsContainer />
</template>
