<script lang="ts" setup>
import { AppLogo } from '@/components/shared/logo'
</script>

<template>
  <section class="">
    <div class="container">
      <div class="grid grid-cols-2 gap-x-80 pb-85">
        <div class="pr-20">
          <AppLogo icon-classes="w-full h-auto" link-classes="w-full" />
        </div>
        <div class="pt-50">
          <h1 class="mb-20 leading-tight text-40">
            “We make the air cleaner and sweeter and your lungs healthier”
          </h1>
          <button
            class="button bg-white px-40 py-20 font-medium leading-none text-18"
          >
            Discover
          </button>
        </div>
      </div>
      <div>
        <img src="/images/about/index.jpg" alt="" class="block w-full" />
      </div>
    </div>
  </section>
</template>
