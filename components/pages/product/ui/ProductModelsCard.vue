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
        <SwiperSlide>
          <div class="h-full w-full">
            <img src="/images/product/nozzle.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="h-full w-full">
            <img src="/images/product/nozzle.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="h-full w-full">
            <img src="/images/product/nozzle.png" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div>
      <div class="mb-20">
        <h2 class="mb-10 font-bold leading-tight text-18">
          Гибкая стальная трубка 3мм длиной 10 см для установки PNS / PNM в GRM8
        </h2>
        <p class="font-medium leading-none text-blue text-12">M8mf Ext 10</p>
      </div>
      <div class="mb-20">
        <p
          class="mb-4 font-bold uppercase leading-none text-dark-text/60 text-8 lg:text-12"
        >
          Описание
        </p>
        <p class="leading-snug text-14">
          Удлинитель M8mf Ext 10 длиной 10 см вкручивается в резьбовое
          соединение M8 для направления наконечников форсунок PNS/PNM в разные
          стороны.
        </p>
      </div>
      <div>
        <p
          class="mb-4 font-bold uppercase leading-none text-dark-text/60 text-8 lg:text-12"
        >
          Характеристики
        </p>
        <ul class="flex flex-col overflow-hidden rounded-[8px]">
          <li
            class="flex h-22 items-center justify-between bg-gray px-12 leading-none text-12 odd:bg-white"
          >
            <p>размер (Ø х Д), мм:</p>
            <p>?</p>
          </li>
          <li
            class="flex h-22 items-center justify-between bg-gray px-12 leading-none text-12 odd:bg-white"
          >
            <p>соединения:</p>
            <p>?</p>
          </li>
          <li
            class="flex h-22 items-center justify-between bg-gray px-12 leading-none text-12 odd:bg-white"
          >
            <p>материал:</p>
            <p>нержавеющая сталь</p>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
