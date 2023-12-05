<script lang="ts" setup>
import { PropType } from 'vue'
import { useI18n } from 'vue-i18n'

import type { NavMenuItemType } from './NavMenuItem.types'
import NavMenuItem from './NavMenuItem.vue'

const { t } = useI18n({ useScope: 'global' })

const DEFAULT_LINKS = computed(() => [
  {
    toLink: '/',
    label: t('header.nav.main')
  },
  {
    toLink: '/about',
    label: t('header.nav.about')
  },
  {
    toLink: '/equipment',
    label: t('header.nav.equipment')
  },
  {
    toLink: '/system',
    label: t('header.nav.howWorks')
  },
  {
    toLink: '/contacts',
    label: t('header.nav.contacts')
  }
])

const props = defineProps({
  links: { type: Array as PropType<NavMenuItemType[]>, default: () => [] }
})

const computedLinks = computed(() =>
  props.links.length > 0 ? props.links : DEFAULT_LINKS.value
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
