<script setup lang="ts">
import { DiagramConfig } from '@/components/widgets/diagram'
</script>

<template>
  <section
    class="border-b border-dark/20 pb-[140px] pt-30 xl:pb-90 lg:pb-80 md:pb-60"
  >
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">Structural diagram</h2>
      </div>
      <DiagramConfig />
    </div>
  </section>
</template>
