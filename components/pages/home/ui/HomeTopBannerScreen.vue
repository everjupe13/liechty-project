<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import { AppButton } from '@/components/shared/button'

const { locale } = useI18n({ useScope: 'global' })
const isDE = computed(() => locale.value === 'de')
</script>

<template>
  <section
    class="relative overflow-hidden bg-gray pb-[140px] pt-80 before:absolute before:inset-[-100px] before:z-[1] before:block before:bg-[url('@/assets/img/bg-mesh.svg')] before:bg-cover xl:pb-80 xl:pt-60 lg:pb-60 lg:pt-40 md:py-40"
  >
    <div class="container z-[2]">
      <div
        class="relative z-[2] mb-[230px] max-w-[940px] xl:mb-[160px] md:mb-[120px]"
      >
        <h1
          :class="[
            'font-bold leading-none',
            isDE
              ? 'h-[calc(96px*2)] break-all text-64 xl:h-[calc(82px*2)] xl:text-58 lg:h-[calc(60px*2)] lg:text-52 md:h-[calc(40px*2)] md:text-28'
              : 'text-96 xl:text-82 lg:text-60 md:text-40'
          ]"
          v-html="$t('home.title')"
        ></h1>
      </div>

      <div class="relative z-[2] max-w-[500px]">
        <p
          class="mb-40 leading-snug text-24 xl:text-20 lg:text-18 md:mb-20 md:text-16"
          v-html="$t('home.subtitle')"
        ></p>
        <AppButton outlined class="bg-gray" @click="$router.push('/system')">
          {{ $t('home.button') }}
        </AppButton>
      </div>

      <div
        class="pointer-events-none absolute bottom-[-280px] left-[450px] z-[1] w-[1080px] select-none xl:bottom-[-240px] xl:w-[860px] lg:left-[400px] md:hidden"
      >
        <img
          src="/images/home/top-banner.png"
          alt="Liechty CL12 Manitoba"
          class="pointer-events-none block w-full select-none"
        />
      </div>
    </div>
  </section>
</template>
