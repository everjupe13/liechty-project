<script lang="ts" setup>
import { LinkArrowIcon } from '@/components/shared/icons'

const props = defineProps({
  image: { type: String, default: '/images/icons/system-areas-icon.svg' },
  title: { type: String, default: '' },
  description: { type: String, default: '' }
})
</script>

<template>
  <article
    class="group relative min-h-[300px] overflow-hidden rounded-[20px] border border-dark/20 bg-white p-35 transition-all duration-300 hover:border-blue lg:min-h-max lg:p-20"
    :title="props.title"
  >
    <div class="mb-40 flex justify-between">
      <div class="flex h-70 w-70 items-center justify-center">
        <img :src="image" alt="" class="block object-cover" />
      </div>
      <a href="/" class="flex items-center justify-center px-7 pb-5 pt-2">
        <LinkArrowIcon
          class="hidden h-30 w-30 transition-all duration-300 group-hover:text-blue"
        />
      </a>
    </div>

    <div>
      <h3
        class="mb-5 leading-normal transition-all duration-300 text-20 group-hover:text-blue md:text-18"
      >
        {{ props.title }}
      </h3>
      <p
        class="leading leading-normal text-dark/70 transition-all duration-300 text-16 md:text-14"
      >
        {{ props.description }}
      </p>
    </div>
  </article>
</template>
