<script lang="ts" setup>
import { CategoryType } from 'api/categories/types'

import ProductModelsCard from './ProductModelsCard.vue'

const props = defineProps<{ data: CategoryType['products'] }>()
</script>

<template>
  <div class="grid grid-cols-2 gap-20">
    <ProductModelsCard
      v-for="product in props.data"
      :key="product.id"
      v-bind="product"
    />
  </div>
</template>
