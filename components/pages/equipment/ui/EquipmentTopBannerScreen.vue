<script lang="ts" setup>
import { AppButton } from '@/components/shared/button'
</script>

<template>
  <section class="pb-60 pt-30">
    <div class="container">
      <div
        class="relative overflow-hidden bg-gray px-80 py-80 pb-[160px] before:absolute before:-inset-90 before:z-[1] before:block before:bg-[url('@/assets/img/bg-mesh.svg')] xl:p-40 md:p-30"
      >
        <div class="z-[2]">
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
            >
              Designed to improve microclimate in your
              <br class="md:hidden" />
              house, apartment or office
            </p>
            <AppButton
              outlined
              class="bg-gray"
              @click="$router.push('/system')"
            >
              See How it Works
            </AppButton>
          </div>

          <div
            class="select-non pointer-events-none absolute bottom-0 right-0 z-[1] w-[790px] xl:w-[600px] lg:hidden"
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
