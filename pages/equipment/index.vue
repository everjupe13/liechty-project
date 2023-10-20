<script lang="ts" setup>
import { useHead } from 'nuxt/app'

import {
  EquipmentTableScreen,
  EquipmentTopBannerScreen
} from '@/components/pages/equipment'
import { BreadCrumbs } from '@/components/widgets/bread-crumbs'

useHead({
  title: 'Product'
})
</script>

<template>
  <div>
    <div class="container">
      <BreadCrumbs :crumbs="[{ label: 'Equipment' }]" class="mb-30 mt-30" />
    </div>
    <EquipmentTopBannerScreen />
    <EquipmentTableScreen />
  </div>
</template>
