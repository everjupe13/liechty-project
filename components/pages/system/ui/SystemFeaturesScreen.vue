<script lang="ts" setup>
import SystemFeaturesCard from './SystemFeaturesCard.vue'
</script>

<template>
  <section class="border-b border-dark/20 py-[140px]">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">Features</h2>
      </div>
      <div class="grid grid-cols-3 gap-80 lg:gap-40 md:gap-20">
        <SystemFeaturesCard />
        <SystemFeaturesCard />
        <SystemFeaturesCard />
        <SystemFeaturesCard />
        <SystemFeaturesCard />
        <SystemFeaturesCard />
        <SystemFeaturesCard />
        <SystemFeaturesCard />
      </div>
    </div>
  </section>
</template>
