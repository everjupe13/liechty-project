<script setup lang="ts">
import HomeHowWorksInfoCard from './HomeHowWorksInfoCard.vue'

const Cards = [
  {
    id: 0,
    icon: '/images/home/how-works/1.svg',
    title: 'Total purification',
    description:
      'Inlet water goes through multi-stage filtration, including a double-stage RO system and volumetric UV sterilization. We eliminate 99.9% of hardness salts.'
  },
  {
    id: 1,
    icon: '/images/home/how-works/2.svg',
    title: 'Central equipment',
    description:
      'Our equipment is specifically designed for use in residential premises, which is why our pumps and valves operate silently. Furthermore, our modules can be easily maintained on-site.'
  },
  {
    id: 2,
    icon: '/images/home/how-works/3.svg',
    title: 'HP hoseline',
    description:
      'Our hoses have an inner layer made of PTFE with stainless steel braiding. Our hoseline is specifically designed to meet high hygiene and safety standards.'
  },
  {
    id: 3,
    icon: '/images/home/how-works/4.svg',
    title: 'Nozzles',
    description:
      'Miniature nozzles are typically installed in vent diffusers, walls, or ceilings, where they spray purified water directly into the premises.'
  },
  {
    id: 4,
    icon: '/images/home/how-works/5.svg',
    title: 'Hygrostats',
    description:
      'The system is controlled by highly precise hygrostats that measure and monitor RH levels in the premises, ensuring it remains at the set humidity level.'
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
