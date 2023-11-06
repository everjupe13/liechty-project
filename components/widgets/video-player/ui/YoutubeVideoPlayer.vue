<script lang="ts" setup>
defineProps({
  videoSrc: {
    type: String,
    required: true
  }
})
</script>

<template>
  <article class="flex items-center justify-center">
    <iframe
      class="block aspect-[calc(1440/640)] w-full"
      width="full"
      height="640"
      :src="videoSrc"
      title="Youtube play Liechty video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </article>
</template>
