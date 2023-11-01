<script lang="ts" setup>
import type { NavMenuItemType } from './NavMenuItem.types'

const props = defineProps<NavMenuItemType>()
</script>

<template>
  <li class="leading-none text-dark-text/70 text-20 xl:text-16">
    <NuxtLink :to="props.toLink">{{ props.label }}</NuxtLink>
  </li>
</template>
