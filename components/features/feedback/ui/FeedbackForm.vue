<script lang="ts" setup>
import { AppInput } from '@/components/shared/input'
</script>

<template>
  <form @submit.prevent>
    <AppInput class="mb-20" placeholder="Your name" />
    <AppInput class="mb-20" placeholder="Phone number" />
    <AppInput class="mb-20" placeholder="Your e-mail" />
  </form>
</template>
