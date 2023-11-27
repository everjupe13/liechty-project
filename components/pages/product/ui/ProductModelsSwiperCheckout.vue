<script lang="ts" setup>
import { CategoryType } from 'api/categories/types'
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

type Props = {
  category: CategoryType
}
const props = defineProps<Props>()
const computeModels = (products: CategoryType['products']) => {
  if (isMobileScreen.value) {
    return products
  }

  const newProducts = []
  for (let i = 0; i < products.length; i += 4) {
    newProducts.push(products.slice(i, i + 4))
  }

  return newProducts
}
</script>

<template>
  <Swiper
    v-if="
      isLoaded && props.category.products && props.category.products.length > 0
    "
    :space-between="24"
    :modules="modules"
    :slides-per-view="1"
    :slides-per-group="1"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <template #container-start>
      <div
        class="mb-40 flex items-center justify-between md:flex-col md:gap-y-20"
      >
        <h2 class="section-title">{{ props.category.name }}</h2>
        <template v-if="!swiperRef?.isLocked || true">
          <ProductModelsSwiperControls />
        </template>
      </div>
    </template>
    <swiper-slide
      v-for="(item, index) in computeModels(props.category.products)"
      :key="index"
    >
      <Component
        :is="SwiperCardComponent"
        v-bind="isMobileScreen ? item : { data: item }"
      />
    </swiper-slide>
  </Swiper>
</template>
