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
  technicalData?: {
    id: number
    title: string
    text: string
  }[]
}
const props = withDefaults(defineProps<Props>(), {
  tabs: () => [],
  technicalData: () => []
})

const DefaultTabs = [
  { id: -1, label: 'Technical data', isActive: false, description: 0 },
  { id: -2, label: 'Diagram', isActive: false, description: 0 }
]
const activeTabId = ref(
  props.tabs && props.tabs.length > 0 ? props.tabs[0].id : DefaultTabs[1].id
)
const computedTabs = computed(() => [...props.tabs, ...DefaultTabs])
const handleActiveIdChange = (id: number) => {
  activeTabId.value = id
}
</script>

<template>
  <div>
    <div
      class="mb-40 flex max-w-max items-center gap-5 rounded-full bg-black/5 md:flex-wrap md:bg-transparent"
    >
      <AppButton
        v-for="tab in computedTabs"
        :key="tab.id"
        :theme="activeTabId === tab.id ? 'blue' : 'default'"
        :class="
          activeTabId !== tab.id
            ? '!border-transparent !bg-transparent !text-dark hover:!border-blue'
            : ''
        "
        class="m-[-1px]"
        @click="handleActiveIdChange(tab.id)"
      >
        {{ tab.label }}
      </AppButton>
    </div>
    <div>
      <div
        v-if="!DefaultTabs.some(tab => tab.id === activeTabId)"
        class="prosed max-w-[880px] leading-normal text-16 md:text-14"
        v-html="props.tabs.find(tab => tab.id === activeTabId)?.description"
      />
      <template v-if="DefaultTabs[0].id === activeTabId">
        <div>
          <ul class="flex flex-col overflow-hidden rounded-[8px]">
            <li
              v-for="data in props.technicalData"
              :key="data.id"
              class="flex h-22 items-center justify-between bg-gray px-12 leading-none text-16 odd:bg-white md:text-14"
            >
              <p>{{ data.title }}</p>
              <p>{{ data.text }}</p>
            </li>
          </ul>
        </div>
      </template>
      <DiagramConfig v-else-if="DefaultTabs[1].id === activeTabId" />
    </div>
  </div>
</template>
