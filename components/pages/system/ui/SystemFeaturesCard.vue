<script lang="ts" setup>
type Props = {
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: ''
})
</script>

<template>
  <article>
    <div
      class="mb-15 flex h-100 w-100 items-center justify-center rounded-full"
    >
      <img
        src="/images/icons/system-features-icon.svg"
        class="block h-full w-full object-cover"
        alt=""
      />
    </div>
    <h3 class="mb-8 leading-normal text-20 md:text-18">{{ props.title }}</h3>
    <div class="leading-normal text-dark-text/70 text-16 md:text-14">
      {{ props.description }}
    </div>
  </article>
</template>
