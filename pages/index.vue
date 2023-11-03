<script setup lang="ts">
import { useHead } from 'nuxt/app'

import {
  HomeApplicationsInfoScreen,
  HomeDownloadScreen,
  HomeFAQScreen,
  HomeFeedbackScreen,
  HomeHowWorksInfoScreen,
  HomeHumidificationInfoScreen,
  HomeTopBannerScreen
} from '@/components/pages/home'

useHead({
  title: 'Liechty - Air humidification system'
})
</script>

<template>
  <div>
    <HomeTopBannerScreen />
    <HomeHumidificationInfoScreen />
    <HomeApplicationsInfoScreen />
    <HomeHowWorksInfoScreen />
    <HomeDownloadScreen />
    <HomeFAQScreen />
    <HomeFeedbackScreen />
  </div>
</template>
