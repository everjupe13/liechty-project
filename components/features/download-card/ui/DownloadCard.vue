<script lang="ts" setup>
import { computed } from 'vue'

import { DownloadArrowIcon } from '@/components/shared/icons'

type Props = {
  fileLink?: string
  fileSize?: string
  title?: string
  description?: string
  excerpt?: string
  filledCard?: boolean
  designType?: 'default' | 'white'
}

const props = withDefaults(defineProps<Props>(), {
  fileLink: '',
  fileSize: '0 КБ',
  title: '',
  description: '',
  excerpt: '',
  designType: 'default'
})

const designTypeStyles = computed(() =>
  props.designType === 'default'
    ? 'download-card_default'
    : 'download-card_white'
)
const isDownloadIconHovered = computed(() => props.designType === 'white')
</script>

<template>
  <article
    class="group relative min-h-[420px] overflow-hidden rounded-[20px] p-20 transition-all lg:min-h-[320px]"
    :class="designTypeStyles"
  >
    <div class="relative z-[1] flex h-full flex-col">
      <div>
        <h3
          class="download-card__title mb-8 leading-normal transition-all text-20 lg:text-18"
        >
          {{ props.title }}
        </h3>
        <p class="leading-normal text-16 md:text-14">{{ props.excerpt }}</p>
      </div>
      <div class="mt-auto flex cursor-pointer items-center gap-x-10">
        <a href="/plug-pdf.pdf" download class="flex items-center gap-x-10">
          <span class="inline-flex items-center justify-center">
            <DownloadArrowIcon
              :svg-classes="`block transition-all${
                isDownloadIconHovered ? ' group-hover:text-blue' : ''
              }`"
            />
          </span>
          <span
            class="download-card__file inline-flex text-20 lg:text-18 md:text-16"
          >
            PDF
          </span>
        </a>
        <div
          class="download-card__size text-dark/40 transition-all text-18 lg:text-16 md:text-14"
        >
          {{ props.fileSize }}
        </div>
      </div>
    </div>
    <div
      v-if="props.filledCard"
      class="absolute left-0 right-0 top-0 z-[2] h-full rounded-[20px] bg-blue p-30 text-white transition-all"
    >
      <img
        class="pointer-events-none absolute bottom-0 left-0 z-[1] block select-none"
        src="@/assets/img/icons/home/downloads-card-bg-pattern.svg"
      />
      <div class="z-2 relative">
        <p class="mb-15 text-20 lg:text-18">Download the files</p>
        <div class="max-w-[300px]">
          <p class="text-16 md:text-14">{{ props.description }}</p>
        </div>
      </div>
      <a
        href="/plug-pdf.pdf"
        download
        class="absolute inset-0 z-[3] select-none text-transparent"
      >
        download the file
      </a>
    </div>
  </article>
</template>

<style lang="scss">
.download-card {
  &_default {
    @apply border border-transparent bg-gray-light;
  }
  &_white {
    @apply border border-white bg-white hover:border-blue;

    &:hover {
      .download-card__title {
        @apply text-blue;
      }
      .download-card__file {
        @apply text-blue;
      }
      .download-card__size {
        @apply text-dark;
      }
    }
  }
}
</style>
