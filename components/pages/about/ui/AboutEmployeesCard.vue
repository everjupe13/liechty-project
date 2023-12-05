<script lang="ts" setup>
type Props = {
  image: string
  name: string
  position: string
}
const props = defineProps<Props>()
</script>

<template>
  <article :title="props.name">
    <div class="mb-20 flex aspect-square items-center justify-center md:mb-10">
      <img :src="props.image" alt="" />
    </div>
    <div>
      <h3 class="mb-6 font-medium leading-none text-18">
        {{ props.name }}
      </h3>
      <h4 class="font-medium leading-none text-dark/60 text-14">
        {{ props.position }}
      </h4>
    </div>
  </article>
</template>
