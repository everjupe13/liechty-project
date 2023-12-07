<script lang="ts" setup>
import { ProductType } from 'api/categories/types'

import ProductModelsCard from './ProductModelsCard.vue'

const props = defineProps<{ data: ProductType }>()
</script>

<template>
  <div>
    <ProductModelsCard v-bind="props.data" />
  </div>
</template>
