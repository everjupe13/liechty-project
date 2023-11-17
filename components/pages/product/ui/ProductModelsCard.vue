<script lang="ts" setup>
import type { Swiper as ISwiper } from 'swiper'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { provide, type Ref, ref } from 'vue'

const modules = [FreeMode, Pagination]

const isSwiperEnd = ref(false)
const isSwiperBeginning = ref(true)

provide('swiperOptions', {
  isSwiperEnd,
  isSwiperBeginning
})

const onSlideChange = (swiper: typeof ISwiper) => {
  isSwiperEnd.value = swiper.isEnd
  isSwiperBeginning.value = swiper.isBeginning
  swiperActiveIndex.value = swiper.activeIndex
}
const onSwiper = (swiper: typeof ISwiper) => {
  swiperRef.value = swiper
}

const swiperRef: Ref<typeof ISwiper | null> = ref(null)
const swiperActiveIndex = ref(0)

type Props = {
  image?: string
  name?: string
  vendor_code?: string
  description?: string
  features?: {
    id: number
    label: string
    value: string
    product: number
  }[]
}
const props = defineProps<Props>()
</script>

<template>
  <article class="flex gap-20 bg-gray p-30 lg:flex-col lg:p-20">
    <div class="aspect-square w-[280px] flex-shrink-0 lg:w-full">
      <Swiper
        :space-between="24"
        :modules="modules"
        :slides-per-view="1"
        :slides-per-group="1"
        :pagination="true"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
      >
        <SwiperSlide v-for="(imageUrl, index) in [props.image]" :key="index">
          <div class="h-full w-full">
            <img :src="imageUrl" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div>
      <div class="mb-20">
        <h2 class="mb-10 font-bold leading-tight text-18">
          {{ props.name }}
        </h2>
        <p class="font-medium leading-none text-blue text-12">
          {{ props.vendor_code }}
        </p>
      </div>
      <div class="mb-20">
        <p class="leading-snug text-14" v-html="props.description"></p>
      </div>
      <div>
        <ul class="flex flex-col overflow-hidden rounded-[8px]">
          <li
            v-for="feature in props.features"
            :key="feature.id"
            class="min-h-22 flex items-center justify-between bg-gray px-12 leading-none text-12 odd:bg-white"
          >
            <p>{{ feature.label }}</p>
            <p>{{ feature.value }}</p>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
