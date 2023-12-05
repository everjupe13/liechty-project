<script setup lang="ts">
import { AppButton } from '@/components/shared/button'
</script>

<template>
  <article
    class="relative overflow-hidden rounded-[20px] bg-[#D7E5E4] p-60 xl:p-40 md:p-30"
  >
    <div class="relative z-[2] max-w-[580px] lg:max-w-[400px]">
      <div class="mb-28">
        <h3 class="font-medium leading-tight text-48 md:text-28">СL Line</h3>
      </div>
      <div class="mb-40">
        <p class="leading-normal text-24 xl:text-18 md:text-18">
          {{ $t('home.applications.banner.subtitle') }}
        </p>
      </div>
      <AppButton outlined @click="$router.push('/equipment')">
        {{ $t('home.applications.banner.button') }}
      </AppButton>
    </div>
    <div
      class="pointer-events-none absolute bottom-0 right-0 z-[1] w-full max-w-[1100px] xl:right-[-180px] xl:h-full lg:hidden"
    >
      <img
        src="/images/home/applications/banner-pattern.png"
        class="pointer-events-none absolute inset-0 z-[1] block w-full select-none"
      />
      <img
        src="/images/home/applications/banner-image.png"
        class="pointer-events-none relative z-[2] block w-full select-none"
      />
    </div>
  </article>
</template>
