<script lang="ts" setup>
import type { NavMenuItemType } from './NavMenuItem.types'

const props = defineProps<NavMenuItemType>()
const route = useRoute()
const isActive = computed(
  () => `/${route.path.slice(1).split('/').slice(1).join('/')}` === props.toLink
)
</script>

<template>
  <li
    class="leading-none text-dark-text/70 text-18 hover:text-blue/80 xl:text-16"
  >
    <NuxtLink
      :to="props.toLink"
      :class="[linkClasses, { 'router-link-active': isActive }]"
    >
      {{ props.label }}
    </NuxtLink>
  </li>
</template>

<style lang="scss">
.router-link-active {
  &:not(.router-link-active_not-styled) {
    @apply text-blue hover:text-blue;
  }
}
</style>
