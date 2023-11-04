<script lang="ts" setup>
import { CategoryType } from 'api/categories/types'
import type { Swiper as ISwiper } from 'swiper'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed, provide, type Ref, ref } from 'vue'

import { ModelType } from '@/api/models/types'
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
  data: ModelType | null
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

const isVisible = computed(
  () =>
    props.data?.categories &&
    props.data?.categories.length > 0 &&
    props.data?.categories.some(category => category.products?.length > 0)
)
</script>

<template>
  <section
    v-if="isVisible"
    class="border-b border-dark/20 py-[140px] xl:py-80 lg:py-60 md:py-40"
  >
    <div class="container">
      <div
        v-for="category in props.data?.categories"
        :key="category.id"
        class="mb-60 last:mb-0"
      >
        <Swiper
          v-if="isLoaded && category.products && category.products.length > 0"
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
              <h2 class="section-title">{{ category.name }}</h2>
              <template v-if="!swiperRef?.isLocked || true">
                <ProductModelsSwiperControls />
              </template>
            </div>
          </template>
          <swiper-slide
            v-for="(item, index) in computeModels(category.products)"
            :key="index"
          >
            <Component
              :is="SwiperCardComponent"
              v-bind="isMobileScreen ? item : { data: item }"
            />
          </swiper-slide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
