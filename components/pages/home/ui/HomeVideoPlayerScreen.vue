<script setup lang="ts">
import { YoutubeVideoPlayer } from '@/components/widgets/video-player'
</script>

<template>
  <section class="pb-90 pt-60 xl:py-50 lg:py-50 md:py-30">
    <div class="container">
      <div class="flex items-center justify-center">
        <YoutubeVideoPlayer
          video-src="https://www.youtube-nocookie.com/embed/IdYFK_gz_1E?si=9FLC8F9lu-7H9tct"
        />
      </div>
    </div>
  </section>
</template>
