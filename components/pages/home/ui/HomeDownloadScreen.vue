<script lang="ts" setup>
import { DownloadCard } from '@/components/features/download-card'
</script>

<template>
  <section class="pb-[140px] pt-70 xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">Downloads</h2>
      </div>
      <div class="grid grid-cols-3 gap-x-20 md:grid-cols-1 md:gap-10">
        <DownloadCard
          title="Main catalogue"
          excerpt="Here you may find all technical information & description for Liechty products."
          description="Here you may find all technical information & description for Liechty products."
          file-size="162 KB"
        />
        <DownloadCard
          title="Booklet"
          excerpt="Our booklet for an overview of Liechty developments."
          description="Our booklet for an overview of Liechty developments."
          file-size="162 KB"
        />
        <DownloadCard
          filled-card
          title="Booklet"
          excerpt="Dignissim aliquet ne."
          description="To request all other documentation about our products, please contact us using the contact details or leave a request in the form below."
          file-size="162 KB"
        />
      </div>
    </div>
  </section>
</template>
