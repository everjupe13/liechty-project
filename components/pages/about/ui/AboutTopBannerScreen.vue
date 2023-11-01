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
            “We make the air cleaner and sweeter and your lungs healthier”
          </h1>
          <AppButton outlined>Discover</AppButton>
        </div>
      </div>
      <div>
        <img src="/images/about/index.jpg" alt="" class="block w-full" />
      </div>
    </div>
  </section>
</template>
