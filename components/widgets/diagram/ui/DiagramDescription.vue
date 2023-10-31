<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="diagram-description-content">
    <div v-html="props.title"></div>
    <div v-html="props.description"></div>
  </div>
</template>

<style lang="scss">
.diagram-description-content {
  h3 {
    @apply mb-10 font-medium leading-tight text-16;
  }

  p {
    @apply leading-normal text-dark-text/70 text-16;
  }
}
</style>
