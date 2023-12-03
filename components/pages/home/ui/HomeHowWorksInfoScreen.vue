<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import HomeHowWorksInfoCard from './HomeHowWorksInfoCard.vue'

const { t } = useI18n({ useScope: 'global' })
const Cards = [
  {
    id: 0,
    icon: '/images/home/how-works/1.svg',
    title: 'Total purification',
    description: t('home.howWorks.content[0]')
  },
  {
    id: 1,
    icon: '/images/home/how-works/2.svg',
    title: 'Central equipment',
    description: t('home.howWorks.content[1]')
  },
  {
    id: 2,
    icon: '/images/home/how-works/3.svg',
    title: 'HP hoseline',
    description: t('home.howWorks.content[2]')
  },
  {
    id: 3,
    icon: '/images/home/how-works/4.svg',
    title: 'Nozzles',
    description: t('home.howWorks.content[3]')
  },
  {
    id: 4,
    icon: '/images/home/how-works/5.svg',
    title: 'Hygrostats',
    description: t('home.howWorks.content[4]')
  }
]
</script>

<template>
  <section class="pb-[140px] pt-70 xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">How it works?</h2>
      </div>
      <div
        class="grid grid-cols-5 gap-x-20 xl:gap-x-10 md:grid-cols-2 md:gap-10"
      >
        <HomeHowWorksInfoCard
          v-for="card in Cards"
          :key="card.id"
          :image="card.icon"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </div>
  </section>
</template>
