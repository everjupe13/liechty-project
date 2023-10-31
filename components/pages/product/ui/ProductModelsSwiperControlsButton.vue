<script lang="ts" setup>
defineProps({
  disabled: { type: Boolean, default: false }
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = () => emit('click')
</script>

<template>
  <button
    class="flex h-32 w-92 items-center justify-center rounded-full border border-dark bg-white transition-all hover:bg-[#fafafa] active:bg-[#f3f3f3] disabled:opacity-50 disabled:hover:bg-white disabled:active:bg-white"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
