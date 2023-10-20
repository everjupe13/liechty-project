<script setup lang="ts">
import { useHead } from 'nuxt/app'

import {
  HomeApplicationsInfoSreen,
  HomeFAQScreen,
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
    <HomeFAQScreen />
  </div>
</template>
