<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { YoutubeVideoPlayer } from '@/components/widgets/video-player'

const { locale } = useI18n({ useScope: 'global' })
const src = computed(() =>
  locale.value !== 'en'
    ? 'https://www.youtube.com/embed/IdYFK_gz_1E?si=553cXPIdtUpXIQSq'
    : 'https://www.youtube.com/embed/sQiNYFcWOdw?si=s-3W7D2mkaQJPO7C'
)
</script>

<template>
  <section class="pb-90 pt-60 xl:py-50 lg:py-50 md:py-30">
    <div class="container">
      <div class="flex items-center justify-center">
        <YoutubeVideoPlayer :video-src="src" />
      </div>
    </div>
  </section>
</template>
