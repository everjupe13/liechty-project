<script setup lang="ts">
import HomeHowWorksInfoCard from './HomeHowWorksInfoCard.vue'

const Cards = [
  {
    id: 0,
    icon: '/images/home/how-works/1.svg',
    title: 'Total purification',
    description:
      'Inlet water goes through multi-stage filtration, including double-stage RO system and volume UV sterilization. We exclude 99,9% hardness salts.'
  },
  {
    id: 1,
    icon: '/images/home/how-works/2.svg',
    title: 'Central equipment',
    description:
      'Our equipment is designed to operate in residential premises, that’s why our pumps and valves operate without any noise. Moreover, modules can be maintained at place of use.'
  },
  {
    id: 2,
    icon: '/images/home/how-works/3.svg',
    title: 'HP hoseline',
    description:
      'Our hoses’ inner layer made of PTFE with stainless steel braiding. Our hoseline is looped especially for high hygiene & safety standards.'
  },
  {
    id: 3,
    icon: '/images/home/how-works/4.svg',
    title: 'Nozzles',
    description:
      'Miniature nozzles usually installed in vent diffusers, walls, or ceilings and spray purified water directly in premises.'
  },
  {
    id: 4,
    icon: '/images/home/how-works/5.svg',
    title: 'Hygrostats',
    description:
      'System is controlled by highly precise hygrostats, which measure RH level in premises and monitor deviations from set humidity level.'
  }
]
</script>

<template>
  <section class="border-b border-dark/20 pb-[140px] pt-70">
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
