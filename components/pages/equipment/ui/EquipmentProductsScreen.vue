<script setup lang="ts">
import { computed } from 'vue'

import { useCategories } from '@/api/categories'
import { ProductModelsSwiperCheckout } from '@/components/pages/product'

const { categories } = useCategories()

const isVisible = computed(
  () =>
    categories.value &&
    categories.value.some(category => category.products?.length > 0)
)
</script>

<template>
  <section
    v-if="isVisible"
    class="border-b border-dark/20 py-[140px] xl:py-80 lg:py-60 md:py-40"
  >
    <div class="container">
      <div
        v-for="category in categories"
        :key="category.id"
        class="mb-60 last:mb-0"
      >
        <ProductModelsSwiperCheckout :category="category" />
      </div>
    </div>
  </section>
</template>
