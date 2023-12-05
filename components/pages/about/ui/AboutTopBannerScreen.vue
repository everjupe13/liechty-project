<script lang="ts" setup>
import { AppButton } from '@/components/shared/button'
import { AppLogo } from '@/components/shared/logo'
</script>

<template>
  <section>
    <div class="container">
      <div class="grid grid-cols-2 gap-x-80 pb-85 md:grid-cols-1 md:pb-40">
        <div class="pr-20 lg:pr-40 md:pr-30">
          <AppLogo icon-classes="w-full h-auto" link-classes="w-full" />
        </div>
        <div class="pt-50 lg:pt-30">
          <h1 class="mb-20 leading-tight text-40 xl:text-32 md:text-24">
            {{ $t('about.tagline') }}
          </h1>
          <AppButton outlined @click="$router.push('/equipment')">
            {{ $t('about.button') }}
          </AppButton>
        </div>
      </div>
      <div
        class="grid grid-cols-4 gap-x-30 pb-60 lg:grid-cols-2 lg:gap-30 md:grid-cols-1 md:pb-40"
      >
        <div>
          <h2 class="section-title">{{ $t('about.brand.title') }}</h2>
        </div>
        <div class="col-span-3">
          <div>
            <p
              v-for="(item, index) in $tm('about.brand.content')"
              :key="index"
              class="mb-18 leading-snug text-16 last:mb-0 md:mb-14 md:text-14"
            >
              {{ $rt(item) }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/about/index.jpg" alt="" class="block w-full" />
      </div>
    </div>
  </section>
</template>
