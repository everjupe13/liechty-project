<script lang="ts" setup>
import { computed, provide, ref } from 'vue'

import { ModelType } from '@/api/models/types'

import ProductModelsSwiperCheckout from './ProductModelsSwiperCheckout.vue'

const isSwiperEnd = ref(false)
const isSwiperBeginning = ref(true)

provide('swiperOptions', {
  isSwiperEnd,
  isSwiperBeginning
})

const isLoaded = ref(false)

onMounted(() => {
  isLoaded.value = true
})

type Props = {
  data: ModelType | null
}
const props = defineProps<Props>()
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
        <ProductModelsSwiperCheckout :category="category" />
      </div>
    </div>
  </section>
</template>
