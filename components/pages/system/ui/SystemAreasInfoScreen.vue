<script lang="ts" setup>
import SystemAreasInfoCard from './SystemAreasInfoCard.vue'
</script>

<template>
  <section
    class="border-b border-dark/20 py-[140px] xl:py-80 lg:py-60 md:py-40"
  >
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">Areas of application</h2>
      </div>
      <div class="grid grid-cols-2 gap-20 lg:grid-cols-1">
        <SystemAreasInfoCard
          v-for="(_icon, idx) in 4"
          :key="idx"
          :title="'Hygiene'"
          :description="'Microbes from the air quickly infest even pre-distilled water in household humidifiers. In direct spray humidification, the water does not come into contact with the air until atomization, before which it undergoes a multi-level purification and. '"
        />
      </div>
    </div>
  </section>
</template>
