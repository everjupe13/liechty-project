<script lang="ts" setup>
const props = defineProps({
  index: { type: [Number, String], default: '' },
  image: { type: String, default: '/images/home/applications/1.jpg' },
  title: { type: String, default: '' },
  description: { type: String, default: '' }
})
</script>

<template>
  <article
    class="group relative flex aspect-square flex-col overflow-hidden p-20"
    :title="props.title"
  >
    <div
      class="absolute inset-0 z-[1] h-full w-full after:absolute after:inset-0 after:z-[2] after:block after:rounded-[19px] after:bg-gray-light after:opacity-90 after:transition-all after:duration-300 group-hover:after:bg-blue group-hover:after:opacity-40"
    >
      <img
        :src="props.image"
        alt=""
        class="relative z-[1] block h-full w-full rounded-[20px] object-cover"
      />
    </div>
    <div class="relative z-[2] flex flex-grow flex-col justify-between">
      <header>
        <div
          class="flex h-30 w-30 items-center justify-center rounded-full border-[2px] border-dark font-medium leading-none transition-all duration-300 text-18 group-hover:border-white group-hover:text-white"
        >
          {{ props.index }}
        </div>
      </header>
      <div>
        <h3
          class="mb-5 leading-normal transition-all duration-300 text-20 group-hover:text-white"
        >
          {{ props.title }}
        </h3>
        <p
          class="leading leading-normal text-dark/60 transition-all duration-300 text-16 group-hover:text-white"
        >
          {{ props.description }}
        </p>
      </div>
    </div>
  </article>
</template>
