<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import PrivacyPolicyDeustch from './PrivacyPolicyDeustch.vue'
import PrivacyPolicyEnglish from './PrivacyPolicyEnglish.vue'

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <section class="pb-60 pt-30">
    <div class="container prose">
      <div class="mx-auto max-w-[900px]">
        <PrivacyPolicyEnglish v-if="locale === 'en'" />
        <PrivacyPolicyDeustch v-else />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
