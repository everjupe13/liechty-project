<script setup lang="ts">
import { YoutubeVideoPlayer } from '@/components/widgets/video-player'
</script>

<template>
  <section class="pb-90 pt-60 xl:py-50 lg:py-50 md:py-30">
    <div class="container">
      <div class="flex items-center justify-center">
        <YoutubeVideoPlayer
          video-src="https://www.youtube.com/embed/sQiNYFcWOdw?si=s-3W7D2mkaQJPO7C"
        />
      </div>
    </div>
  </section>
</template>
