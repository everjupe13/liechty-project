<script setup lang="ts">
import { useHead } from 'nuxt/app'

import {
  HomeApplicationsInfoSreen,
  HomeDownloadScreen,
  HomeFAQScreen,
  HomeFeedbackScreen,
  HomeHowWorksInfoScreen,
  HomeHumidificationInfoScreen,
  HomeTopBannerScreen
} from '@/components/pages/home'

useHead({
  title: 'Home'
})
</script>

<template>
  <div>
    <HomeTopBannerScreen />
    <HomeHumidificationInfoScreen />
    <HomeApplicationsInfoSreen />
    <HomeHowWorksInfoScreen />
    <HomeDownloadScreen />
    <HomeFAQScreen />
    <HomeFeedbackScreen />
  </div>
</template>
