<script setup lang="ts">
import { watch } from 'vue'
import { VueFinalModal } from 'vue-final-modal'

import { NavMenu } from '@/components/shared/nav-menu'

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

const route = useRoute()
watch(
  () => route.path,
  () => {
    emit('confirm')
  }
)
</script>

<template>
  <VueFinalModal
    class="flex items-center justify-center"
    content-class="hidden md:block w-screen h-screen bg-white"
  >
    <div class="relative flex h-full flex-col items-center justify-center p-16">
      <button
        class="absolute right-16 top-40 hidden items-center justify-center p-5 md:flex"
      >
        <img
          src="@/assets/img/burger-icon-opened.svg"
          alt=""
          @click="emit('confirm')"
        />
      </button>
      <NavMenu class="flex-col gap-y-17 [&>li]:!text-24" />
    </div>
  </VueFinalModal>
</template>
