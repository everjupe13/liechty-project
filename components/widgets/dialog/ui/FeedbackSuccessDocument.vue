<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { AppButton } from '@/components/shared/button'

const emit = defineEmits<{
  (e: 'submit'): void
}>()

const handleFormSubmit = () => {
  emit('submit')
}

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')
</script>

<template>
  <div>
    <div class="mb-[200px]">
      <div class="mb-35">
        <h2 class="mb-35 font-bold leading-none text-36 md:text-24">
          {{ isEN ? 'Thank you for message!' : 'Danke für die Nachricht!' }}
        </h2>
      </div>
      <div class="max-w-[650px] text-[#838383] text-16 md:text-14">
        <p class="mb-14">
          {{
            isEN
              ? 'We will process and respond to your message during business hours on the next business day.'
              : 'Wir werden Ihre Nachricht am nächsten Werktag während der Geschäftszeiten bearbeiten und beantworten.'
          }}
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
        <template v-if="isEN">
          {{ $route.path.includes('/equipment') ? 'Go to Homepage' : 'Close' }}
        </template>
        <template v-else>
          {{
            $route.path.includes('/equipment')
              ? 'Gehen Sie zur Startseite'
              : 'Schließen'
          }}
        </template>
      </AppButton>
    </div>
  </div>
</template>
