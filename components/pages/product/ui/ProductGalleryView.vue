<script setup lang="ts">
import type { Swiper as ISwiper } from 'swiper'
import { ref } from 'vue'

import ProductGallery from './ProductGallery.vue'
import ProductGalleryThumbs from './ProductGalleryThumbs.vue'

const thumbsSwiper = ref<typeof ISwiper | null>(null)
const setThumbsSwiper = (swiper: typeof ISwiper) => {
  thumbsSwiper.value = swiper
}
</script>

<template>
  <div class="flex h-full gap-x-20 p-30">
    <ProductGalleryThumbs
      class="w-50 flex-shrink-0"
      @swiper="setThumbsSwiper"
    />
    <ProductGallery :thumbs-swiper="thumbsSwiper" />
    <div class="w-50 flex-shrink-0 basis-[50px]"></div>
  </div>
</template>
