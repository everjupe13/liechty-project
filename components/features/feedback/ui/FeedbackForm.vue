<script lang="ts" setup>
import { AppButton } from '@/components/shared/button'
import { AppInput } from '@/components/shared/input'
</script>

<template>
  <form @submit.prevent>
    <AppInput class="mb-15 lg:mb-10" placeholder="Your name" />
    <AppInput class="mb-15 lg:mb-10" placeholder="Phone number" />
    <AppInput class="mb-50 lg:mb-30" placeholder="Your e-mail" />
    <AppButton theme="blue" outlined>Send message</AppButton>
  </form>
</template>
