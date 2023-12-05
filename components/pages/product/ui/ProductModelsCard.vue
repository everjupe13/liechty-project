<script lang="ts" setup>
import type { Swiper as ISwiper } from 'swiper'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { provide, type Ref, ref } from 'vue'
import { useI18n } from 'vue-i18n'

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
  name_alt?: string | null
  vendor_code?: string
  description?: string
  description_alt?: string
  features?: {
    id: number
    label: string
    label_alt: string | null
    value: string
    value_alt: string | null
    product: number
  }[]
}
const props = defineProps<Props>()
const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')
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
          {{ isEN ? props.name : props.name_alt }}
        </h2>
        <p class="font-medium leading-none text-blue text-12">
          {{ props.vendor_code }}
        </p>
      </div>
      <div class="mb-20">
        <p
          class="leading-snug text-14"
          v-html="isEN ? props.description : props.description_alt"
        ></p>
      </div>
      <div>
        <ul class="flex flex-col overflow-hidden rounded-[8px]">
          <li
            v-for="feature in props.features"
            :key="feature.id"
            class="min-h-22 flex items-center justify-between bg-gray px-12 py-5 leading-none text-12 odd:bg-white"
          >
            <p>{{ isEN ? feature.label : feature.label_alt }}</p>
            <p>{{ isEN ? feature.value : feature.value_alt }}</p>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
