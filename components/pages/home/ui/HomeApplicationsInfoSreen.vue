<script setup lang="ts">
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
  <section class="border-b border-dark/20 py-[140px]">
    <div class="container">
      <div class="mb-75">
        <h2 class="section-title">Applications</h2>
      </div>
      <div class="grid grid-cols-4 gap-x-20">
        <HomeApplicationsInfoCard
          v-for="(card, index) in ApplicationCards"
          :key="card.id"
          :index="index + 1"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </div>
  </section>
</template>
