<script lang="ts" setup>
import { PropType } from 'vue'

import type { NavMenuItemType } from './NavMenuItem.types'
import NavMenuItem from './NavMenuItem.vue'

const DEFAULT_LINKS = [
  {
    toLink: '/',
    label: 'Main'
  },
  {
    toLink: '/about',
    label: 'About'
  },
  {
    toLink: '/equipment',
    label: 'Equipment'
  },
  {
    toLink: '/system',
    label: 'How it works'
  },
  {
    toLink: '/contacts',
    label: 'Contacts'
  }
]

const props = defineProps({
  links: { type: Array as PropType<NavMenuItemType[]>, default: () => [] }
})

const computedLinks = computed(() =>
  props.links.length > 0 ? props.links : DEFAULT_LINKS
)
</script>

<template>
  <ul class="flex gap-x-24">
    <NavMenuItem
      v-for="link in computedLinks"
      :key="link.label"
      :label="link.label"
      :to-link="link.toLink"
    />
  </ul>
</template>
