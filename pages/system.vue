<script lang="ts" setup>
import { useHead } from 'nuxt/app'

import {
  SystemAreasInfoScreen,
  SystemDiagramScreen,
  SystemFeaturesScreen
} from '@/components/pages/system'
import { BreadCrumbs } from '@/components/widgets/bread-crumbs'

useHead({
  title: 'Product'
})
</script>

<template>
  <div>
    <div class="container">
      <BreadCrumbs :crumbs="[{ label: 'How it works' }]" class="mb-30 mt-30" />
    </div>
    <SystemDiagramScreen />
    <SystemFeaturesScreen />
    <SystemAreasInfoScreen />
  </div>
</template>
