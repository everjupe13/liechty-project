<script setup lang="ts">
import { type Swiper as ISwiper } from 'swiper'
import { FreeMode, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ComponentPublicInstance } from 'vue'

import { ProductGalleryExpose } from './ProductGallery.types'

const modules = [FreeMode, Thumbs]
type Props = {
  thumbsSwiper: (ComponentPublicInstance & typeof ISwiper) | null
  gallery: {
    id: number
    image: string
    imageThumb: string
    is_main: boolean
    model: number
  }[]
}
const props = defineProps<Props>()

const swiperRef: Ref<typeof ISwiper | null> = ref(null)
const swiperActiveIndex = ref(0)
const onSlideChange = (swiper: typeof ISwiper) => {
  swiperActiveIndex.value = swiper.activeIndex
}
const onSwiper = (swiper: typeof ISwiper) => {
  swiperRef.value = swiper
}

defineExpose<ProductGalleryExpose>({
  swiperActiveIndex
})
</script>

<template>
  <Swiper
    v-if="props.gallery && props.gallery.length > 0"
    :thumbs="{ swiper: props.thumbsSwiper as typeof ISwiper }"
    :modules="modules"
    :space-between="5"
    class="h-full"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <SwiperSlide
      v-for="image in props.gallery"
      :key="image.id"
      class="flex items-center justify-center"
    >
      <div class="flex h-full items-center justify-center">
        <img
          :src="image.image"
          class="block h-full w-full select-none object-scale-down"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>
