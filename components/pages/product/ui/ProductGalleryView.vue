<script setup lang="ts">
import type { Swiper as ISwiper } from 'swiper'
import { ref, unref } from 'vue'

import { ProductGalleryComponent } from './ProductGallery.types'
import ProductGallery from './ProductGallery.vue'
import ProductGalleryThumbs from './ProductGalleryThumbs.vue'

const thumbsSwiper = ref<typeof ISwiper | null>(null)
const setThumbsSwiper = (swiper: typeof ISwiper) => {
  thumbsSwiper.value = swiper
}

type Props = {
  gallery: {
    id: number
    image: string
    imageThumb: string
    is_main: boolean
    model: number
  }[]
}

const props = defineProps<Props>()
const galleryRef = ref<ProductGalleryComponent>()
const activeSlideIndex = computed(() =>
  unref(galleryRef.value?.swiperActiveIndex)
)
</script>

<template>
  <div class="flex h-full gap-x-10 p-10 py-20">
    <ProductGalleryThumbs
      :active-slide-index="activeSlideIndex"
      class="w-50 flex-shrink-0 md:hidden"
      :gallery="props.gallery"
      @swiper="setThumbsSwiper"
    />
    <ProductGallery
      ref="galleryRef"
      :thumbs-swiper="thumbsSwiper"
      :gallery="props.gallery"
    />
    <div class="w-50 flex-shrink-0 basis-[50px] md:hidden"></div>
  </div>
</template>
