<script lang="ts" setup>
import FeedbackForm from './FeedbackForm.vue'
</script>

<template>
  <section class="relative bg-gray-light py-[160px] xl:py-80 lg:py-60 md:py-40">
    <div class="container z-[2]">
      <div class="mb-40">
        <h2 class="section-title">{{ $t('feedbackForm.title') }}</h2>
      </div>
      <div class="max-w-[750px] xl:max-w-[57%] md:max-w-full">
        <FeedbackForm />
      </div>
    </div>
    <div
      class="absolute bottom-0 left-[60%] right-0 top-0 z-[1] xl:-right-40 md:hidden"
    >
      <img
        src="@/assets/img/bg-mesh-square.svg"
        alt=""
        class="block h-full w-full"
      />
    </div>
  </section>
</template>
