<script lang="ts" setup>
import { reactive } from 'vue'

import AppCollapsable from './AppCollapsable.vue'

interface IAppDropdown {
  dropdownData: {
    label: string
    body: string
    opened: boolean
  }[]
}
const props = defineProps<IAppDropdown>()

const dropdownData = reactive(props.dropdownData)
const handleDropdownItemClick = (index: number) => {
  dropdownData.forEach((state, idx) => {
    state.opened = !state.opened

    if (idx !== index && state.opened) {
      state.opened = false
    }
  })
}
</script>

<template>
  <div class="dropdown">
    <article
      v-for="(state, idx) in dropdownData"
      :key="idx"
      class="group border-b border-dark/20 transition-all hover:border-blue"
    >
      <div
        class="dropdown__label flex cursor-pointer items-center justify-between gap-x-10 py-30 md:py-20"
        @click="handleDropdownItemClick(idx)"
      >
        <h3
          class="flex-grow leading-normal transition text-24 group-hover:text-blue md:text-18"
          v-html="state.label"
        ></h3>
        <div
          class="dropdown__label-badge grow-0"
          :class="{ '--active': state.opened }"
        ></div>
      </div>
      <AppCollapsable v-model="state.opened">
        <div class="max-w-[800px]">
          <div
            class="prose pb-30 leading-normal text-20 md:pb-20 md:text-16"
            v-html="state.body"
          ></div>
        </div>
      </AppCollapsable>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  &__label-badge {
    @apply relative h-full w-68 min-w-[68px] basis-68 md:w-40 md:min-w-[40px] md:basis-40;

    &:after,
    &:before {
      content: '';
      transition-property: height;
      transition-duration: 300ms;
      @apply absolute left-1/2 top-1/2 h-2 w-20 -translate-x-1/2 -translate-y-1/2 bg-dark/60;
    }

    &:after {
      @apply h-20 w-2;
    }
    &:before {
      @apply h-2 w-20;
    }

    &.--active {
      &:after {
        @apply h-2 w-20;
      }
    }
  }
}
</style>
