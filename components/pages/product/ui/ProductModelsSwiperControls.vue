<script lang="ts" setup>
import { useSwiper } from 'swiper/vue'
import { computed, inject, Ref } from 'vue'

import {
  NavigationArrowLeftIcon,
  NavigationArrowRightIcon
} from '@/components/shared/icons'

import ProductModelsSwiperControlsButton from './ProductModelsSwiperControlsButton.vue'

const swiper = useSwiper()
const swiperOptions = inject('swiperOptions') as {
  isSwiperEnd: Ref<boolean | undefined>
  isSwiperBeginning: Ref<boolean | undefined>
}

const isPrevDisabled = computed<true | false>(
  () => !!swiperOptions.isSwiperBeginning.value
)
const isNextDisabled = computed<true | false>(
  () => !!swiperOptions.isSwiperEnd.value
)

const onClickPrev = () => {
  swiper.value.slidePrev()
}

const onClickNext = () => {
  swiper.value.slideNext()
}
</script>

<template>
  <div class="flex items-center gap-x-10">
    <ProductModelsSwiperControlsButton
      :disabled="isPrevDisabled"
      @click="onClickPrev"
    >
      <NavigationArrowLeftIcon />
    </ProductModelsSwiperControlsButton>
    <ProductModelsSwiperControlsButton
      :disabled="isNextDisabled"
      @click="onClickNext"
    >
      <NavigationArrowRightIcon />
    </ProductModelsSwiperControlsButton>
  </div>
</template>
