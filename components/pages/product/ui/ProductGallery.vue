<script setup lang="ts">
import { type Swiper as ISwiper } from 'swiper'
import { FreeMode, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ComponentPublicInstance } from 'vue'

const modules = [FreeMode, Thumbs]
type Props = {
  thumbsSwiper: (ComponentPublicInstance & typeof ISwiper) | null
}
const props = defineProps<Props>()
</script>

<template>
  <Swiper
    :thumbs="{ swiper: props.thumbsSwiper as typeof ISwiper }"
    :modules="modules"
    :space-between="5"
    class="h-full"
  >
    <SwiperSlide class="flex items-center justify-center">
      <div class="flex h-full items-center justify-center">
        <img
          src="/images/product/p.png"
          class="block h-full w-full select-none object-scale-down"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide class="flex items-center justify-center">
      <div class="flex h-full items-center justify-center">
        <img
          src="/images/product/p.png"
          class="block h-full w-full select-none object-scale-down"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide class="flex items-center justify-center">
      <div class="flex h-full items-center justify-center">
        <img
          src="/images/product/p.png"
          class="block h-full w-full select-none object-scale-down"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>
