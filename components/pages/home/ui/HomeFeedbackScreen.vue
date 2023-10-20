<script lang="ts" setup>
import { FeedbackForm } from '@/components/features/feedback'
</script>

<template>
  <section class="relative bg-gray-light py-[160px]">
    <div class="container z-[2]">
      <div class="mb-40">
        <h2 class="section-title">Any questions? Write us</h2>
      </div>
      <div class="max-w-[800px]">
        <FeedbackForm />
      </div>
    </div>
    <div class="absolute bottom-0 right-0 top-0 z-[1]">
      <img src="@/assets/img/bg-mesh-angeled.svg" alt="" />
    </div>
  </section>
</template>
