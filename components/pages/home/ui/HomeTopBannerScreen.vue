<script lang="ts" setup>
import { AppButton } from '@/components/shared/button'
</script>

<template>
  <section
    class="relative overflow-hidden bg-gray py-80 pb-[140px] before:absolute before:-inset-90 before:z-[1] before:block before:bg-[url('@/assets/img/bg-mesh.svg')]"
  >
    <div class="container z-[2]">
      <div class="mb-[230px] max-w-[940px]">
        <h1 class="font-bold leading-none text-96">
          Air humidification
          <br />
          system
        </h1>
      </div>

      <div class="max-w-[500px]">
        <p class="mb-40 leading-snug">
          Designed to improve microclimate in your
          <br />
          house, apartment or office
        </p>
        <AppButton outlined class="bg-gray">See How it Works</AppButton>
      </div>
    </div>
  </section>
</template>
