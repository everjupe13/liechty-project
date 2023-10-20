<script lang="ts" setup>
const props = defineProps({
  image: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' }
})
</script>

<template>
  <article
    class="transiton-all group relative min-h-[370px] overflow-hidden rounded-[20px] border border-dark/20 bg-white p-20 duration-300 hover:border-blue xl:min-h-[320px] xl:p-15"
    :title="props.title"
  >
    <div class="mb-35 flex h-50 w-50 items-center justify-center xl:mb-25">
      <img :src="image" alt="" class="block object-cover" />
    </div>
    <div>
      <h3
        class="mb-5 leading-tight transition-all duration-300 text-20 group-hover:text-blue"
      >
        {{ props.title }}
      </h3>
      <p
        class="leading text-15 leading-normal text-dark/60 transition-all duration-300 xl:text-14"
      >
        {{ props.description }}
      </p>
    </div>
  </article>
</template>
