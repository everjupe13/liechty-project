<script lang="ts" setup>
import { DownloadablePromotion } from '@/components/widgets/downloadable-promotion'
</script>

<template>
  <section class="bg-[#F8F9FC] pb-[140px] pt-70 xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">{{ $t('downloads.title') }}</h2>
      </div>
      <DownloadablePromotion />
    </div>
  </section>
</template>
