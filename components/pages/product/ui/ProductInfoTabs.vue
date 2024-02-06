<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { AppButton } from '@/components/shared/button'
import { DiagramConfig } from '@/components/widgets/diagram'

type Props = {
  tabs?: {
    id: number
    label: string | null
    description: string | null
  }[]
  technicalData?: {
    id: number
    label: string | null
    value: string | null
  }[]
  scheme?: number
}
const props = withDefaults(defineProps<Props>(), {
  tabs: () => [],
  technicalData: () => [],
  scheme: undefined
})

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')

const DefaultTabs = computed(() => [
  {
    id: -1,
    label: isEN.value ? 'Technical data' : 'Technische Daten',
    isActive: false,
    description: 0
  },
  {
    id: -2,
    label: isEN.value ? 'Diagram' : 'Diagramm',
    isActive: false,
    description: 0
  }
])

const activeTabId = ref(
  props.tabs && props.tabs.length > 0
    ? props.tabs[0].id
    : DefaultTabs.value[1].id
)
const computedTabs = computed(() => [...props.tabs, ...DefaultTabs.value])
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
        <div class="max-w-[600px]">
          <ul class="flex flex-col overflow-hidden rounded-[8px]">
            <li
              v-for="data in props.technicalData"
              :key="data.id"
              class="flex h-35 flex-shrink-0 items-center justify-between bg-gray px-12 leading-tight text-18 even:bg-white lg:text-16 md:h-28 md:text-14"
            >
              <p>{{ data.label }}</p>
              <p>{{ data.value }}</p>
            </li>
          </ul>
        </div>
      </template>
      <DiagramConfig
        v-else-if="DefaultTabs[1].id === activeTabId && props.scheme"
        :diagram-type="props.scheme"
      />
    </div>
  </div>
</template>
