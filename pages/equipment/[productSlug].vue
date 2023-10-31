<script lang="ts" setup>
import { useHead } from 'nuxt/app'

import {
  ProductFAQScreen,
  ProductInfoScreen,
  ProductModelsSwiperScreen
} from '@/components/pages/product'
import { BreadCrumbs } from '@/components/widgets/bread-crumbs'

useHead({
  title: 'Product'
})
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
    <ProductInfoScreen />
    <ProductModelsSwiperScreen />
    <ProductFAQScreen />
  </div>
</template>
