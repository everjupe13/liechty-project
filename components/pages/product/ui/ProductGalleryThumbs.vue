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
</script>

<template>
  <Swiper
    :space-between="20"
    :slides-per-view="10"
    :free-mode="true"
    :watch-slides-progress="true"
    :modules="modules"
    :direction="'vertical'"
    class="h-full"
    @swiper="onSwiper"
  >
    <SwiperSlide>
      <div class="flex h-45 w-45 items-center justify-center">
        <img
          src="/images/product/p.png"
          class="block h-full w-full select-none object-scale-down"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="flex h-45 w-45 items-center justify-center">
        <img
          src="/images/product/p.png"
          class="object-scale block h-full w-full select-none object-scale-down"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="flex h-45 w-45 items-center justify-center">
        <img
          src="/images/product/p.png"
          class="block h-full w-full select-none object-scale-down"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
.swiper {
  overflow: visible !important;

  .swiper-slide {
    @apply opacity-20;
    transition: opacity 0.25s ease;
  }

  .swiper-slide-active {
    @apply opacity-100;
  }
}
</style>
