<script lang="ts" setup>
import { AppButton } from '@/components/shared/button'

const emit = defineEmits<{
  (e: 'submit'): void
}>()

const handleFormSubmit = () => {
  emit('submit')
}
</script>

<template>
  <div class="flex h-full flex-col items-center p-10">
    <div class="flex h-full w-full flex-col">
      <h3 class="mb-20 text-26">Thanks</h3>
      <div class="mb-40 max-w-[550px]">
        Our manager will contact you soon. Please await.
      </div>
      <div class="mt-auto flex items-center justify-between">
        <AppButton type="submit" theme="blue" @click="handleFormSubmit">
          Close
        </AppButton>
      </div>
    </div>
  </div>
</template>
