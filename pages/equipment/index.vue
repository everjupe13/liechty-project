<script lang="ts" setup>
import { useHead } from 'nuxt/app'

import {
  EquipmentAboutScreen,
  EquipmentFeaturesScreen,
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
      <BreadCrumbs
        :crumbs="[{ label: 'Equipment' }, { label: 'CL Series' }]"
        class="mb-30 mt-30"
      />
    </div>

    <EquipmentTopBannerScreen />
    <EquipmentAboutScreen />
    <EquipmentFeaturesScreen />
    <EquipmentTableScreen />
  </div>
</template>
