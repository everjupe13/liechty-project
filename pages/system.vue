<script lang="ts" setup>
import { useHead } from 'nuxt/app'

import {
  SystemDiagramScreen,
  SystemDownloadScreen,
  SystemFeaturesScreen,
  SystemFeedbackScreen
} from '@/components/pages/system'
import { BreadCrumbs } from '@/components/widgets/bread-crumbs'

useHead({
  title: 'Liechty - Air humidification system'
})
</script>

<template>
  <div>
    <div class="container">
      <BreadCrumbs
        :crumbs="[{ label: 'How it works' }]"
        class="mb-30 mt-30 md:mb-15"
      />
    </div>
    <SystemDiagramScreen class="border-b border-dark/20" />
    <SystemFeaturesScreen />
    <SystemDownloadScreen class="border-b border-dark/20" />
    <SystemFeedbackScreen />
  </div>
</template>
