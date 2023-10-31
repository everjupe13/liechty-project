<script lang="ts" setup>
import { computed, ref } from 'vue'

import { AppButton } from '@/components/shared/button'
import { DiagramConfig } from '@/components/widgets/diagram'

type Props = {
  tabs?: {
    id: number
    label: string
    description: string
  }[]
}
const props = withDefaults(defineProps<Props>(), {
  tabs: () => []
})

const DefaultTab = { id: -1, label: 'Diagram', isActive: false, description: 0 }
const activeTabId = ref(
  props.tabs && props.tabs.length > 0 ? props.tabs[0] : DefaultTab.id
)
const computedTabs = computed(() => [...props.tabs, DefaultTab])
const handleActiveIdChange = (id: number) => {
  activeTabId.value = id
}
</script>

<template>
  <div>
    <div
      class="mb-40 flex max-w-max items-center rounded-full border border-dark bg-black/10"
    >
      <AppButton
        v-for="tab in computedTabs"
        :key="tab.id"
        :theme="activeTabId === tab.id ? 'blue' : 'default'"
        :class="
          activeTabId !== tab.id ? '!bg-transparent hover:!border-blue' : ''
        "
        class="m-[-1px]"
        @click="handleActiveIdChange(tab.id)"
      >
        {{ tab.label }}
      </AppButton>
    </div>
    <div>
      <div v-if="activeTabId !== DefaultTab.id" class="prose max-w-[880px]" />
      <DiagramConfig v-else />
    </div>
  </div>
</template>
