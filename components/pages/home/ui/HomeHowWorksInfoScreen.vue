<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import HomeHowWorksInfoCard from './HomeHowWorksInfoCard.vue'

const { t } = useI18n({ useScope: 'global' })
const Cards = computed(() => [
  {
    id: 0,
    icon: '/images/home/how-works/1.svg',
    title: t('home.howWorks.content[0].title'),
    description: t('home.howWorks.content[0].description')
  },
  {
    id: 1,
    icon: '/images/home/how-works/2.svg',
    title: t('home.howWorks.content[1].title'),
    description: t('home.howWorks.content[1].description')
  },
  {
    id: 2,
    icon: '/images/home/how-works/3.svg',
    title: t('home.howWorks.content[2].title'),
    description: t('home.howWorks.content[2].description')
  },
  {
    id: 3,
    icon: '/images/home/how-works/4.svg',
    title: t('home.howWorks.content[3].title'),
    description: t('home.howWorks.content[3].description')
  },
  {
    id: 4,
    icon: '/images/home/how-works/5.svg',
    title: t('home.howWorks.content[4].title'),
    description: t('home.howWorks.content[4].description')
  }
])
</script>

<template>
  <section class="pb-[140px] pt-70 xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">{{ $t('home.howWorks.title') }}</h2>
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
