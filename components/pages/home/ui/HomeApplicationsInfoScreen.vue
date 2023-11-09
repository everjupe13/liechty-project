<script setup lang="ts">
import HomeApplicationsInfoBanner from './HomeApplicationsInfoBanner.vue'
import HomeApplicationsInfoCard from './HomeApplicationsInfoCard.vue'

const ApplicationCards = [
  {
    id: 0,
    title: 'Houses',
    description:
      'Our systems are designed to keep relative humidity in the optimum range at your house to protect and prolong the lifetime of surfaces and furniture made of wood.',
    image: '/images/home/applications/1.jpg'
  },
  {
    id: 1,
    title: 'Apartments',
    description:
      'Liechty systems help to create an optimum microclimate in your apartment, take care of your skin and mucous membranes, and support your immune system.',
    image: '/images/home/applications/2.jpg'
  },
  {
    id: 2,
    title: 'Offices',
    description:
      'Protect and prolong the lifetime of computers, laptops, printers, server room equipment, and reduce the risk of respiratory diseases among staff.',
    image: '/images/home/applications/3.jpg'
  },
  {
    id: 3,
    title: 'Industry',
    description:
      'Increase the quality and lifetime of raw materials and finished products, and improve the manufacturing process generally.',
    image: '/images/home/applications/4.jpg'
  }
]
</script>

<template>
  <section class="pb-70 pt-[140px] xl:py-80 lg:py-60 md:py-40">
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
          :image="card.image"
        />
      </div>
      <HomeApplicationsInfoBanner />
    </div>
  </section>
</template>
