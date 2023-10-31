<script lang="ts" setup>
import { useHead } from 'nuxt/app'

import { useModels } from '@/api/models'
import {
  ProductFAQScreen,
  ProductInfoScreen,
  ProductModelsSwiperScreen
} from '@/components/pages/product'
import { BreadCrumbs } from '@/components/widgets/bread-crumbs'

useHead({
  title: 'Product'
})

const route = useRoute()
const { fetchModelBySlug } = useModels()
const { data } = fetchModelBySlug(route.params.productSlug as string)
</script>

<template>
  <div>
    <div class="container">
      <BreadCrumbs
        :crumbs="[
          { label: 'Equipment', toLink: '/equipment' },
          { label: 'Central block' }
        ]"
        class="mb-30 mt-30"
      />
    </div>
    <ProductInfoScreen :data="data" />
    <ProductModelsSwiperScreen :data="data" />
    <ProductFAQScreen />
  </div>
</template>
