<script lang="ts" setup>
import type { Swiper as ISwiper } from 'swiper'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed, provide, type Ref, ref } from 'vue'

import { useWidthBreakpoints } from '@/composables/useWidthBreakpoints'

import ProductModelsSwiperControls from './ProductModelsSwiperControls.vue'
import ProductModelsSwiperDesktop from './ProductModelsSwiperDesktop.vue'
import ProductModelsSwiperMobile from './ProductModelsSwiperMobile.vue'

const { smallerOrEqual } = useWidthBreakpoints()

const isMobileScreen = computed(() => smallerOrEqual('lg').value)
const modules = !isMobileScreen.value ? [FreeMode] : []

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

const isLoaded = ref(false)

onMounted(() => {
  isLoaded.value = true
})
const SwiperCardComponent = computed(() =>
  isMobileScreen.value ? ProductModelsSwiperMobile : ProductModelsSwiperDesktop
)
const _modelsLength = 10
const computedModels = computed(() =>
  isMobileScreen.value ? _modelsLength : Math.ceil(_modelsLength / 4)
)
</script>

<template>
  <section
    class="border-b border-dark/20 py-[140px] xl:py-80 lg:py-60 md:py-40"
  >
    <div class="container">
      <div>
        <Swiper
          v-if="isLoaded"
          :space-between="24"
          :modules="modules"
          :slides-per-view="1"
          :slides-per-group="1"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
          <template #container-start>
            <div class="mb-40 flex items-center justify-between">
              <h2 class="section-title">Nozzle accessories</h2>
              <template v-if="!swiperRef?.isLocked || true">
                <ProductModelsSwiperControls />
              </template>
            </div>
          </template>
          <swiper-slide v-for="item in computedModels" :key="item">
            <Component :is="SwiperCardComponent" />
          </swiper-slide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
