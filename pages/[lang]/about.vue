<script lang="ts" setup>
import { useHead } from 'nuxt/app'

import {
  AboutEmployeesScreen,
  AboutFeedbackScreen,
  AboutInfoScreen,
  AboutTopBannerScreen
} from '@/components/pages/about'
import { BreadCrumbs } from '@/components/widgets/bread-crumbs'

useHead({
  title: 'Liechty - Air humidification system'
})
</script>

<template>
  <div>
    <div class="container">
      <BreadCrumbs
        :crumbs="[{ label: $t('header.nav.about') }]"
        class="mb-60 mt-30"
      />
    </div>
    <AboutTopBannerScreen />
    <AboutInfoScreen class="border-b border-dark/20" />
    <AboutEmployeesScreen />
    <AboutFeedbackScreen />
  </div>
</template>
