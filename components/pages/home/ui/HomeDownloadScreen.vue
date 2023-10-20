<script lang="ts" setup>
import { DownloadCard } from '@/components/features/download-card'
</script>

<template>
  <section class="border-b border-dark/20 pb-[140px] pt-70">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">Downloads</h2>
      </div>
      <div class="grid grid-cols-3 gap-x-20 md:grid-cols-1 md:gap-10">
        <DownloadCard
          title="Booklet"
          excerpt="Dignissim aliquet ne."
          description="
            Lorem ipsum dolor sit amet consectetur. Nunc mauris scelerisque sapien magna blandit nulla vitae. <br/><br/>
            Eleifend malesuada parturient pellentesque euismod proin ut. Tincidunt netus ultricies feugiat fusce. Arcu at purus et morbi vitae quisque amet id.
          "
          file-size="162 KB"
        />
        <DownloadCard
          title="Booklet"
          excerpt="Dignissim aliquet ne."
          description="
            Lorem ipsum dolor sit amet consectetur. Nunc mauris scelerisque sapien magna blandit nulla vitae. <br/><br/>
            Eleifend malesuada parturient pellentesque euismod proin ut. Tincidunt netus ultricies feugiat fusce. Arcu at purus et morbi vitae quisque amet id.
          "
          file-size="162 KB"
        />
        <DownloadCard
          title="Booklet"
          excerpt="Dignissim aliquet ne."
          description="
            Lorem ipsum dolor sit amet consectetur. Nunc mauris scelerisque sapien magna blandit nulla vitae. <br/><br/>
            Eleifend malesuada parturient pellentesque euismod proin ut. Tincidunt netus ultricies feugiat fusce. Arcu at purus et morbi vitae quisque amet id.
          "
          file-size="162 KB"
        />
      </div>
    </div>
  </section>
</template>
