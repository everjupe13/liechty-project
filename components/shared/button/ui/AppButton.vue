<script setup lang="ts">
import { computed } from 'vue'

interface IAppButton {
  theme?: 'default' | 'blue'
  outlined?: boolean
  fluid?: boolean
}

const props = withDefaults(defineProps<IAppButton>(), {
  theme: 'default',
  fluid: false
})

const componentsClasses = computed(() => {
  return [
    `app-btn_theme-${props.theme}`,
    props.outlined ? 'app-btn_outlined' : '',
    { 'w-full': props.fluid }
  ]
})
</script>

<template>
  <button class="app-btn" :class="componentsClasses">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.app-btn {
  @apply flex items-center justify-center px-40 py-20;
  @apply rounded-full border border-transparent;
  @apply font-medium leading-none text-18;
  @apply transition-all duration-300 active:translate-y-2 disabled:opacity-50;

  &:not(.app-btn_outlined) {
    &.app-btn {
      &_theme-default {
        @apply border-dark bg-dark text-white;
      }

      &_theme-blue {
        @apply border-blue bg-blue text-white;
      }
    }
  }

  &_outlined {
    &.app-btn_theme-default {
      @apply border-dark text-dark hover:bg-dark hover:text-white;
    }
    &.app-btn_theme-blue {
      @apply border-blue text-blue hover:bg-blue hover:text-white;
    }
  }
}
</style>
