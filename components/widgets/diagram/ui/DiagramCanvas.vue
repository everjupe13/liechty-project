<script setup lang="ts">
defineProps({
  image: { type: String, default: '/images/system/mock-diagram.png' }
})
</script>

<template>
  <div class="aspect-[calc(780/460)] w-full rounded-[24px] bg-gray-light">
    <img
      class="pointer-events-none block h-full w-full rounded-[24px] object-fill"
      :src="image"
    />
  </div>
</template>
