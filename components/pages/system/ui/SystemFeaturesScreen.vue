<script lang="ts" setup>
import { FeaturesCardsData } from '../model/mock-data'
import SystemAreasInfoCard from './SystemAreasInfoCard.vue'
</script>

<template>
  <section class="py-[140px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">Features</h2>
      </div>
      <div
        class="grid grid-cols-3 gap-20 xl:gap-50 lg:gap-40 md:grid-cols-1 md:gap-30"
      >
        <SystemAreasInfoCard
          v-for="card in FeaturesCardsData"
          :key="card.id"
          :title="card.title"
          :description="card.description"
          :image="card.image"
        />
      </div>
    </div>
  </section>
</template>
