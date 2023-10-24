<script lang="ts" setup>
type Props = {
  fileLink?: string
  fileSize?: string
  title?: string
  description?: string
  excerpt?: string
  filledCard?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  fileLink: '',
  fileSize: '0 КБ',
  title: '',
  description: '',
  excerpt: ''
})
</script>

<template>
  <article
    class="group relative min-h-[420px] overflow-hidden rounded-[20px] bg-gray-light p-20"
  >
    <div class="relative z-[1] flex h-full flex-col">
      <div>
        <h3 class="mb-8 leading-normal text-20">{{ props.title }}</h3>
        <p class="leading-normal text-16">{{ props.excerpt }}</p>
      </div>
      <div class="mt-auto flex cursor-pointer items-center gap-x-10">
        <a href="/plug-pdf.pdf" download class="flex items-center gap-x-10">
          <span class="inline-flex items-center justify-center">
            <img
              src="@/assets/img/icons/download-icon.svg"
              class="block"
              alt=""
            />
          </span>
          <span class="inline-flex text-20">PDF</span>
        </a>
        <div class="text-dark/40 text-18">{{ props.fileSize }}</div>
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
        <p class="mb-15 text-20">Download the files</p>
        <div class="max-w-[300px]">
          <p class="text-16">
            Lorem ipsum dolor sit amet consectetur. Nunc mauris scelerisque
            sapien magna blandit nulla vitae.
            <br />
            <br />
            Eleifend malesuada parturient pellentesque euismod proin ut.
            Tincidunt netus ultricies feugiat fusce. Arcu at purus et morbi
            vitae quisque amet id.
          </p>
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
