<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { DownloadCard } from '@/components/features/download-card'
import { useCompanyFilesDownload } from '@/composables/useCompanyFilesDownload'

const { files } = useCompanyFilesDownload()
const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')
</script>

<template>
  <div
    :class="[
      'grid gap-x-20 md:grid-cols-1 md:gap-10',
      isEN ? 'grid-cols-4' : 'grid-cols-3'
    ]"
  >
    <DownloadCard
      design-type="white"
      :title="$t('downloads.content[0].title')"
      :excerpt="$t('downloads.content[0].description')"
      :description="$t('downloads.content[0].description')"
      :file-link="files.catalog.url"
      :file-size="files.catalog.size"
    />
    <DownloadCard
      v-if="isEN"
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
</template>
