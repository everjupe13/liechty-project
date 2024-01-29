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
          {{
            isEN
              ? 'Thank you for placing your order!'
              : 'Vielen Dank für Ihre Bestellung!'
          }}
        </h2>
      </div>
      <div class="max-w-[650px] text-[#838383] text-16 md:text-14">
        <p class="mb-14">
          {{
            isEN
              ? 'Our managers will contact you to control your application, make the final payment and answer your questions!'
              : 'Unsere Manager werden sich mit Ihnen in Verbindung setzen, um Ihren Antrag zu prüfen, die Abschlusszahlung vorzunehmen und Ihre Fragen zu beantworten!'
          }}
        </p>
        <p class="mb-14">
          {{
            isEN
              ? 'You will also be informed in writing about the warranty conditions and maintenance of our central modules.'
              : 'Über die Garantiebedingungen und Wartung unserer Zentralmodule werden Sie ebenfalls schriftlich informiert.'
          }}
        </p>
        <p>
          {{
            isEN
              ? 'For all other questions, write to us by email:'
              : 'Für alle weiteren Fragen schreiben Sie uns per E-Mail:'
          }}
          <template v-if="isEN">
            <a href="mailto:info@liechty-humidity.com" class="text-blue">
              info@liechty-humidity.com
            </a>
          </template>
          <template v-else>
            <a href="mailto:info@liechty.li" class="text-blue">
              info@liechty.li
            </a>
          </template>
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
