<script lang="ts" setup>
import { CategoryType } from 'api/categories/types'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import ProductModelsCard from './ProductModelsCard.vue'

const isLoaded = ref(false)

onMounted(() => {
  isLoaded.value = true
})

type Props = {
  category: CategoryType
}
const props = defineProps<Props>()

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')
</script>

<template>
  <div class="mb-40 flex items-center justify-between md:flex-col md:gap-y-20">
    <h2 class="section-title">
      {{ isEN ? props.category.name : props.category.name_alt }}
    </h2>
  </div>
  <div class="grid grid-cols-2 gap-20 md:grid-cols-1">
    <ProductModelsCard
      v-for="product in props.category.products"
      :key="product.id"
      v-bind="product"
    />
  </div>
</template>
