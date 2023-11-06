<script setup lang="ts">
import { DiagramConfig, DIAGRAMS_TYPES } from '@/components/widgets/diagram'

type DigramTogglerItem = {
  id: number
  title: string
  value: (typeof DIAGRAMS_TYPES)[keyof typeof DIAGRAMS_TYPES]
}
const DiagramToggler: DigramTogglerItem[] = [
  {
    id: 0,
    title: 'CL Manioba',
    value: DIAGRAMS_TYPES.FIRST
  },
  {
    id: 1,
    title: 'CL Playgreen',
    value: DIAGRAMS_TYPES.SECOND
  }
]

const currentDiagramType = ref(DIAGRAMS_TYPES.FIRST)
const handleDiagramTypeChange = (id: DigramTogglerItem['id']) => {
  currentDiagramType.value = DiagramToggler.find(
    toggler => toggler.id === id
  )!.value
}
</script>

<template>
  <section class="pb-[140px] pt-30 xl:pb-90 lg:pb-80 md:pb-60">
    <div class="container">
      <div class="mb-40">
        <div
          class="flex items-center justify-between md:flex-col md:items-start md:gap-y-30"
        >
          <h2 class="section-title">Structural diagram</h2>
          <div class="flex items-center gap-x-20">
            <button
              v-for="toggler in DiagramToggler"
              :key="toggler.id"
              class="select-none leading-none transition-all text-20"
              :class="{ 'text-blue': toggler.value === currentDiagramType }"
              @click="handleDiagramTypeChange(toggler.id)"
            >
              {{ toggler.title }}
            </button>
          </div>
        </div>
      </div>
      <DiagramConfig :diagram-type="currentDiagramType" />
    </div>
  </section>
</template>
