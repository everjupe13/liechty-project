<script lang="ts" setup>
defineProps({
  videoSrc: {
    type: String,
    required: true
  }
})
</script>

<template>
  <article class="flex w-full items-center justify-center">
    <div class="aspect-[calc(1440/780)] h-full w-full md:aspect-video">
      <iframe
        class="block h-full w-full"
        :src="videoSrc"
        title="Youtube play Liechty video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </article>
</template>
