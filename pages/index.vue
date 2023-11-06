<script setup lang="ts">
import { useHead } from 'nuxt/app'

import {
  HomeApplicationsInfoScreen,
  HomeDownloadScreen,
  HomeFAQScreen,
  HomeFeedbackScreen,
  HomeHowWorksInfoScreen,
  HomeHumidificationInfoScreen,
  HomeTopBannerScreen,
  HomeVideoPlayerScreen
} from '@/components/pages/home'

useHead({
  title: 'Liechty - Air humidification system'
})
</script>

<template>
  <div>
    <HomeTopBannerScreen />
    <HomeHumidificationInfoScreen class="border-b border-dark/20" />
    <HomeApplicationsInfoScreen />
    <HomeHowWorksInfoScreen />
    <HomeVideoPlayerScreen />
    <HomeDownloadScreen class="border-b border-dark/20" />
    <HomeFAQScreen />
    <HomeFeedbackScreen />
  </div>
</template>
