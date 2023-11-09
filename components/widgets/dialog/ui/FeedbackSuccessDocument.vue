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
  <div>
    <div class="mb-[200px]">
      <div class="mb-35">
        <h2 class="mb-35 font-bold leading-none text-36 md:text-24">
          Thank you for message!
        </h2>
      </div>
      <div class="max-w-[650px] text-[#838383] text-16 md:text-14">
        <p class="mb-14">
          We will process and respond to your message during business hours on
          the next business day.
        </p>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <AppButton
        type="submit"
        outlined
        class="w-full max-w-[415px]"
        theme="blue"
        @click="handleFormSubmit"
      >
        {{ $route.path.includes('/equipment') ? 'Go to Homepage' : 'Close' }}
      </AppButton>
    </div>
  </div>
</template>
