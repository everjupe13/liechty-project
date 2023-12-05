<script lang="ts" setup>
import { useHead } from 'nuxt/app'

import { useModels } from '@/api/models'
import {
  ProductDownloadScreen,
  ProductFAQScreen,
  ProductInfoScreen,
  ProductModelsSwiperScreen
} from '@/components/pages/product'
import { BreadCrumbs } from '@/components/widgets/bread-crumbs'

useHead({
  title: 'Liechty - Air humidification system'
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
          { label: $t('header.nav.equipment'), toLink: '/equipment' },
          { label: data?.name || '' }
        ]"
        class="mb-30 mt-30"
      />
    </div>
    <ProductInfoScreen :data="data" />
    <ProductModelsSwiperScreen :data="data" />
    <ProductDownloadScreen />
    <ProductFAQScreen />
  </div>
</template>
