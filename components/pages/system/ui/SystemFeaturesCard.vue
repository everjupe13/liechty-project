<script lang="ts" setup>
type Props = {
  title?: string
  description?: string
  image?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
  image: '/images/icons/system-features-icon.svg'
})
</script>

<template>
  <article :title="props.title">
    <div
      class="mb-15 flex h-100 w-100 items-center justify-center rounded-full"
    >
      <img
        :src="props.image"
        class="block h-full w-full object-cover"
        :alt="props.title"
      />
    </div>
    <h3 class="mb-8 leading-normal text-20 md:text-18">{{ props.title }}</h3>
    <div class="leading-normal text-dark-text/70 text-16 md:text-14">
      {{ props.description }}
    </div>
  </article>
</template>
