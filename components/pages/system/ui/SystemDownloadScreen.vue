<!-- <script lang="ts" setup>
import { DownloadCard } from '@/components/features/download-card'
</script>

<template>
  <section class="bg-[#F8F9FC] py-[140px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">Downloads</h2>
      </div>
      <div class="grid grid-cols-4 gap-x-20 md:grid-cols-1 md:gap-10">
        <DownloadCard
          design-type="white"
          title="License 2020"
          excerpt="Little description of fi rutrum ut imperdiet diam id lobortis hendrerit. Dignissim aliquet ne."
          file-size="520 KB"
        />
        <DownloadCard
          design-type="white"
          title="Privacy policy"
          excerpt="Dignissim aliquet ne."
          file-size="163 KB"
        />
        <DownloadCard
          design-type="white"
          title="Terms and conditions"
          excerpt="Lobortis hendrerit. Dignissim aliquet ne."
          file-size="1 MB"
        />
        <DownloadCard
          design-type="white"
          title="License 2023"
          excerpt="Little description of fi rutrum ut imperdiet diam id lobortis hendrerit. Dignissim aliquet ne."
          file-size="24 KB"
        />
      </div>
    </div>
  </section>
</template> -->

<script lang="ts" setup>
import { DownloadCard } from '@/components/features/download-card'
</script>

<template>
  <section class="bg-[#F8F9FC] pb-[140px] pt-70 xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">Downloads</h2>
      </div>
      <div class="grid grid-cols-3 gap-x-20 md:grid-cols-1 md:gap-10">
        <DownloadCard
          design-type="white"
          title="Main catalogue"
          excerpt="Here you may find all technical information & description for Liechty products."
          description="Here you may find all technical information & description for Liechty products."
          file-size="162 KB"
        />
        <DownloadCard
          design-type="white"
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
