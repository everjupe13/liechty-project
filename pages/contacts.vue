<script lang="ts" setup>
import { useHead } from 'nuxt/app'

import { BreadCrumbs } from '@/components/widgets/bread-crumbs'
import { ContactsScreen } from '@/components/widgets/contacts'

useHead({
  title: 'Liechty - Air humidification system'
})
</script>

<template>
  <div>
    <div class="container">
      <BreadCrumbs
        :crumbs="[{ label: 'Contacts' }]"
        class="mb-60 mt-30 md:mb-40"
      />
    </div>
    <ContactsScreen />
  </div>
</template>
