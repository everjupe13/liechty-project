<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import { FeaturesCardsData } from '../model/mock-data'
import SystemAreasInfoCard from './SystemAreasInfoCard.vue'

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <section class="py-[140px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">{{ $t('system.features.title') }}</h2>
      </div>
      <div
        class="grid grid-cols-3 gap-20 xl:gap-50 lg:gap-40 md:grid-cols-1 md:gap-30"
      >
        <SystemAreasInfoCard
          v-for="card in FeaturesCardsData"
          :key="card.id"
          :title="card.title[locale as 'en' | 'de']"
          :description="card.description[locale as 'en' | 'de']"
          :image="card.image"
        />
      </div>
    </div>
  </section>
</template>
