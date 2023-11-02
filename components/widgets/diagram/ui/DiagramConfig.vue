<script setup lang="ts">
import { DiagramData } from '../model/mock-data'
import DiagramCanvas from './DiagramCanvas.vue'
import DiagramControls from './DiagramControls.vue'
import DiagramDescription from './DiagramDescription.vue'

const currentTabId = ref(DiagramData[0]?.id || -1)
const currentTab = computed(
  () =>
    DiagramData.find(data => data.id === currentTabId.value) || {
      title: '',
      description: '',
      image: ''
    }
)
const handleTabChange = (id: number) => {
  currentTabId.value = id
}
</script>

<template>
  <div
    class="grid grid-cols-[285px_calc(100%-285px-320px-80px)_320px] gap-x-40 xl:grid-cols-[235px_calc(100%-235px-260px-60px)_260px] xl:gap-x-30 lg:grid-cols-1 lg:gap-20"
  >
    <div class="lg:row-start-2 lg:row-end-3 lg:-mx-16">
      <DiagramControls
        :items="DiagramData.map(data => ({ name: data.name, id: data.id }))"
        :active-id="currentTabId"
        @change="handleTabChange"
      />
    </div>
    <div class="lg:row-start-1 lg:row-end-2">
      <DiagramCanvas :image="currentTab.image" />
    </div>
    <DiagramDescription
      :title="currentTab.title"
      :description="currentTab.description"
    />
  </div>
</template>
