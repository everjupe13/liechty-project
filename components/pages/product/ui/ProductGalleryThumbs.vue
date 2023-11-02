<script setup lang="ts">
import type { Swiper as ISwiper } from 'swiper'
import { FreeMode, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const modules = [FreeMode, Thumbs]
const emit = defineEmits<{
  (e: 'swiper', swiperInstance: typeof ISwiper): void
}>()

const onSwiper = (swiper: typeof ISwiper) => {
  emit('swiper', swiper)
}

type Props = {
  gallery: {
    id: number
    image: string
    imageThumb: string
    is_main: boolean
    model: number
  }[]
  activeSlideIndex?: number | undefined
}

const props = defineProps<Props>()
const bindClasses = (index: number) => {
  return index === props.activeSlideIndex ? 'opacity-100' : 'opacity-20'
}
</script>

<template>
  <Swiper
    v-if="props.gallery && props.gallery.length > 0"
    :space-between="20"
    :slides-per-view="10"
    :free-mode="true"
    :modules="modules"
    :direction="'vertical'"
    class="h-full"
    @swiper="onSwiper"
  >
    <SwiperSlide v-for="(image, index) in props.gallery" :key="image.id">
      <div class="flex h-45 w-45 items-center justify-center">
        <img
          :src="image.image"
          class="block h-full w-full select-none object-scale-down transition-all"
          :class="bindClasses(index)"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
.swiper {
  overflow: visible !important;

  // .swiper-slide {
  //   @apply opacity-20;
  //   transition: opacity 0.25s ease;
  // }

  // .swiper-slide-active {
  //   @apply opacity-100;
  // }
}
</style>
