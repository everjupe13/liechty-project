<script setup lang="ts">
import { computed, ref } from 'vue'

// import { getCurrentInstance } from 'vue'
import { DIAGRAMS, DIAGRAMS_TYPES } from '../model/constants'
import DiagramCanvas from './DiagramCanvas.vue'
import DiagramControls from './DiagramControls.vue'
import DiagramDescription from './DiagramDescription.vue'

type Props = {
  diagramType?: keyof typeof DIAGRAMS
}

const props = withDefaults(defineProps<Props>(), {
  diagramType: DIAGRAMS_TYPES.FIRST
})

// const instance = getCurrentInstance()

watch(
  () => props.diagramType,
  () => {
    if (props.diagramType) {
      currentTabId.value = usedDiagramData.value[0]?.id
      // instance?.proxy?.$forceUpdate()
    }
  }
)

const usedDiagramData = computed(() => DIAGRAMS[props.diagramType])
const currentTabId = ref(usedDiagramData.value[0]?.id || -1)
const currentTab = computed(
  () =>
    usedDiagramData.value.find(data => data.id === currentTabId.value) || {
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
        :items="usedDiagramData.map(data => ({ name: data.name, id: data.id }))"
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
