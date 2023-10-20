<script setup lang="ts">
defineProps({
  iconClasses: { type: String, default: '' },
  linkClasses: { type: String, default: '' }
})
</script>

<template>
  <div class="flex items-center">
    <NuxtLink to="/" :class="['flex items-center', linkClasses]">
      <slot />
    </NuxtLink>
  </div>
</template>
