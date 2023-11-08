<script lang="ts" setup>
import { useHead } from 'nuxt/app'

import {
  EquipmentAboutScreen,
  EquipmentFeaturesScreen,
  EquipmentFeedbackScreen,
  EquipmentTableScreen,
  EquipmentTopBannerScreen
} from '@/components/pages/equipment'
import { BreadCrumbs } from '@/components/widgets/bread-crumbs'

useHead({
  title: 'Liechty - Air humidification system'
})
</script>

<template>
  <div>
    <div class="container">
      <BreadCrumbs :crumbs="[{ label: 'Equipment' }]" class="mb-30 mt-30" />
    </div>

    <EquipmentTopBannerScreen />
    <EquipmentAboutScreen class="border-b border-dark/20" />
    <EquipmentFeaturesScreen class="border-b border-dark/20" />
    <EquipmentTableScreen class="border-b border-dark/20" />
    <EquipmentFeedbackScreen />
  </div>
</template>
