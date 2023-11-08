<script setup lang="ts">
import { useHead } from 'nuxt/app'

import { PrivacyPolicyScreen } from '@/components/pages/privacy-policy'
import { BreadCrumbs } from '@/components/widgets/bread-crumbs'

useHead({
  title: 'Liechty - Air humidification system'
})
</script>

<template>
  <div>
    <div class="container">
      <BreadCrumbs
        :crumbs="[{ label: 'Privacy Policy' }]"
        class="mb-30 mt-30 md:mb-15"
      />
    </div>
    <PrivacyPolicyScreen />
  </div>
</template>
