<script setup lang="ts">
useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, minimum-scale=1'
    }
  ],
  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} | Liechty` : 'Liechty'
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
