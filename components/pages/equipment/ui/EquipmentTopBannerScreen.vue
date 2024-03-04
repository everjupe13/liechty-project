<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import { AppButton } from '@/components/shared/button'

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')

const subtitleLocaled = computed(() =>
  isEN.value
    ? `Designed to improve microclimate in your <br class="md:hidden" />house, apartment or office`
    : `Entwickelt zur Verbesserung des Mikroklimas in Ihrem <br class="md:hidden" /> Haus, Ihrer Wohnung oder Ihrem Büro`
)
</script>

<template>
  <section class="pb-60 pt-30">
    <div class="container">
      <div
        class="relative overflow-hidden bg-gray px-80 py-80 pb-[160px] before:absolute before:-inset-90 before:z-[1] before:block before:bg-[url('@/assets/img/bg-mesh.svg')] xl:p-40 md:p-30"
      >
        <div class="z-[2] md:pb-[100px] sm:pb-[170px]">
          <div
            class="xl:mb-[160px relative z-[2] mb-25 max-w-[640px] lg:mb-80 md:mb-60"
          >
            <h1
              class="font-bold leading-none text-96 xl:text-82 lg:text-68 md:text-38"
            >
              Classic line series (CL)
            </h1>
          </div>

          <div class="relative z-[2] max-w-[500px]">
            <p
              class="mb-40 leading-snug text-24 xl:text-20 lg:mb-20 md:text-16"
              v-html="subtitleLocaled"
            />
            <AppButton
              outlined
              class="bg-gray"
              @click="$router.push('/system')"
            >
              {{ $t('home.button') }}
            </AppButton>
          </div>

          <div
            class="pointer-events-none absolute bottom-0 right-0 z-[1] w-[790px] select-none xl:w-[600px] lg:w-[450px] md:w-[300px] sm:w-[280px]"
          >
            <img
              src="/images/equipment/top-banner.png"
              alt="Liechty CL12 Manitoba"
              class="pointer-events-none block w-full select-none"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
