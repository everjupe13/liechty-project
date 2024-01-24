<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import HomeApplicationsInfoBanner from './HomeApplicationsInfoBanner.vue'
import HomeApplicationsInfoCard from './HomeApplicationsInfoCard.vue'

const { t } = useI18n({ useScope: 'global' })

const ApplicationCards = computed(() => [
  {
    id: 0,
    title: t('home.applications.content.houses.title'),
    description: t('home.applications.content.houses.description'),
    image: '/images/home/applications/1.jpg'
  },
  {
    id: 1,
    title: t('home.applications.content.apartments.title'),
    description: t('home.applications.content.apartments.description'),
    image: '/images/home/applications/2.jpg'
  },
  {
    id: 2,
    title: t('home.applications.content.offices.title'),
    description: t('home.applications.content.offices.description'),
    image: '/images/home/applications/3.jpg'
  },
  {
    id: 3,
    title: t('home.applications.content.industry.title'),
    description: t('home.applications.content.industry.description'),
    image: '/images/home/applications/4.jpg'
  }
])
</script>

<template>
  <section class="pb-70 pt-[140px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-75 lg:mb-50 md:mb-30">
        <h2 class="section-title">{{ $t('home.applications.title') }}</h2>
      </div>
      <div
        class="mb-[140px] grid grid-cols-4 gap-x-20 xl:gap-x-15 lg:grid-cols-2 lg:gap-40 md:gap-20 sm:grid-cols-1"
      >
        <HomeApplicationsInfoCard
          v-for="(card, index) in ApplicationCards"
          :key="card.id"
          :index="index + 1"
          :title="card.title"
          :description="card.description"
          :image="card.image"
        />
      </div>
      <HomeApplicationsInfoBanner />
    </div>
  </section>
</template>
