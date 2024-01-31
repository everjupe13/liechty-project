<script lang="ts" setup>
import { DownloadCard } from '@/components/features/download-card'
import { useCompanyFilesDownload } from '@/composables/useCompanyFilesDownload'

const { files } = useCompanyFilesDownload()
</script>

<template>
  <section class="bg-[#F8F9FC] pb-[140px] pt-70 xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">{{ $t('downloads.title') }}</h2>
      </div>
      <div class="grid grid-cols-4 gap-x-20 md:grid-cols-1 md:gap-10">
        <DownloadCard
          design-type="white"
          :title="$t('downloads.content[0].title')"
          :excerpt="$t('downloads.content[0].description')"
          :description="$t('downloads.content[0].description')"
          :file-link="files.booklet.url"
          :file-size="files.booklet.size"
        />
        <DownloadCard
          design-type="white"
          :title="$t('downloads.content[1].title')"
          :excerpt="$t('downloads.content[1].description')"
          :description="$t('downloads.content[1].description')"
          :file-link="files.booklet.url"
          :file-size="files.booklet.size"
        />
        <DownloadCard
          design-type="white"
          :title="$t('downloads.content[2].title')"
          :excerpt="$t('downloads.content[2].description')"
          :description="$t('downloads.content[2].description')"
          :file-link="files.configs.url"
          :file-size="files.configs.size"
        />
        <DownloadCard
          filled-card
          :title="$t('downloads.promt.title')"
          :excerpt="$t('downloads.promt.body')"
          :description="$t('downloads.promt.body')"
        />
      </div>
    </div>
  </section>
</template>
