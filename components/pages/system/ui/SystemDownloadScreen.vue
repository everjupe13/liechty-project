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
import { useCompanyFilesDownload } from '@/composables/useCompanyFilesDownload'

const { fileUrl } = useCompanyFilesDownload()
</script>

<template>
  <section class="bg-[#F8F9FC] pb-[140px] pt-70 xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">{{ $t('downloads.title') }}</h2>
      </div>
      <div class="grid grid-cols-3 gap-x-20 md:grid-cols-1 md:gap-10">
        <DownloadCard
          design-type="white"
          :title="$t('downloads.content[0].title')"
          :excerpt="$t('downloads.content[0].description')"
          :description="$t('downloads.content[0].description')"
          :file-link="fileUrl"
          file-size="4.2 MB"
        />
        <DownloadCard
          design-type="white"
          :title="$t('downloads.content[1].title')"
          :excerpt="$t('downloads.content[1].description')"
          :description="$t('downloads.content[1].description')"
          :file-link="fileUrl"
          file-size="4.2 MB"
        />
        <DownloadCard
          filled-card
          :title="$t('downloads.promt.title')"
          :excerpt="$t('downloads.promt.body')"
          :description="$t('downloads.promt.body')"
          :file-link="fileUrl"
          file-size="4.2 MB"
        />
      </div>
    </div>
  </section>
</template>
