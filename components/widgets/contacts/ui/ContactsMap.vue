<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')
const MAPS_FRAME_URL = computed(() =>
  isEN.value
    ? 'https://maps.google.com/maps?q=1260%20Clarence%20Avenue,%20Winnipeg,%20Manitoba%20R3T%201T2&t=&z=13&ie=UTF8&iwloc=&output=embed'
    : 'https://maps.google.com/maps?q=Im%20alten%20Riet%20153,%209494%20Schaan,%20Liechtenstein&t=&z=13&ie=UTF8&iwloc=&output=embed'
)
</script>

<template>
  <div
    class="flex aspect-[calc(1360/520)] items-center justify-center md:aspect-[calc(1020/480)]"
  >
    <iframe
      class="block h-full w-full grayscale-[0.3]"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      :src="MAPS_FRAME_URL"
    ></iframe>
  </div>
</template>
