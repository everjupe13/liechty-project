<script setup lang="ts">
import HomeApplicationsInfoBanner from './HomeApplicationsInfoBanner.vue'
import HomeApplicationsInfoCard from './HomeApplicationsInfoCard.vue'

const ApplicationCards = [
  {
    id: 0,
    title: 'Houses',
    description:
      'Protect & prolong lifetime of surfaces and furniture made of wood'
  },
  {
    id: 1,
    title: 'Apartments',
    description: 'Take care about your skin & immune system indoors'
  },
  {
    id: 2,
    title: 'Offices',
    description:
      'Protect & prolong lifetime of surfaces and furniture made of wood'
  },
  {
    id: 3,
    title: 'Industry',
    description: 'Increase quality & lifetime of manufactured products'
  }
]
</script>

<template>
  <section class="pb-70 pt-[140px]">
    <div class="container">
      <div class="mb-75 lg:mb-50 md:mb-30">
        <h2 class="section-title">Applications</h2>
      </div>
      <div
        class="mb-[140px] grid grid-cols-4 gap-x-20 lg:grid-cols-2 lg:gap-40 md:gap-20 sm:grid-cols-1"
      >
        <HomeApplicationsInfoCard
          v-for="(card, index) in ApplicationCards"
          :key="card.id"
          :index="index + 1"
          :title="card.title"
          :description="card.description"
        />
      </div>
      <HomeApplicationsInfoBanner />
    </div>
  </section>
</template>
