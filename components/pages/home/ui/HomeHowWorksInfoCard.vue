<script lang="ts" setup>
const props = defineProps({
  image: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' }
})
</script>

<template>
  <article
    class="transiton-all group relative min-h-[370px] overflow-hidden rounded-[20px] border border-white bg-white p-20 duration-300 hover:border-blue"
    :title="props.title"
  >
    <div class="mb-35 flex h-50 w-50 items-center justify-center">
      <img :src="image" alt="" class="block object-cover" />
    </div>
    <div>
      <h3
        class="mb-5 leading-normal transition-all duration-300 text-20 group-hover:text-blue"
      >
        {{ props.title }}
      </h3>
      <p
        class="leading text-15 leading-normal text-dark/60 transition-all duration-300"
      >
        {{ props.description }}
      </p>
    </div>
  </article>
</template>
