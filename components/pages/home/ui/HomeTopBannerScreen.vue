<script lang="ts" setup>
import { AppButton } from '@/components/shared/button'
</script>

<template>
  <section
    class="relative overflow-hidden bg-gray py-80 pb-[140px] before:absolute before:-inset-90 before:z-[1] before:block before:bg-[url('@/assets/img/bg-mesh.svg')] xl:pb-[100px]"
  >
    <div class="container z-[2]">
      <div class="relative z-[2] mb-[230px] max-w-[940px] xl:mb-[160px]">
        <h1 class="font-bold leading-none text-96 xl:text-82">
          Air humidification
          <br />
          system
        </h1>
      </div>

      <div class="relative z-[2] max-w-[500px]">
        <p class="mb-40 leading-snug text-24 xl:text-20">
          Designed to improve microclimate in your
          <br />
          house, apartment or office
        </p>
        <AppButton outlined class="bg-gray">See How it Works</AppButton>
      </div>

      <div
        class="pointer-events-none absolute bottom-[-280px] left-[450px] z-[1] w-[1080px] select-none xl:bottom-[-240px] xl:w-[860px] lg:left-[400px]"
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
