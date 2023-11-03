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
          Thank you for placing your order!
        </h2>
      </div>
      <div class="max-w-[650px] text-[#838383] text-16 md:text-14">
        <p class="mb-14">
          Our managers will contact you to control your application, make the
          final payment and answer your questions!
        </p>
        <p class="mb-14">
          You will also be informed in writing about the warranty conditions and
          maintenance of our central modules.
        </p>
        <p>
          For all other questions, write to us by email:
          <a href="mailto:info@liechty.li" class="text-blue">info@liechty.li</a>
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
        Go to Homepage
      </AppButton>
    </div>
  </div>
</template>
