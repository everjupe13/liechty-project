<script lang="ts" setup>
import AboutContactsArticle from './AboutContactsArticle.vue'
import AboutContactsMap from './AboutContactsMap.vue'
</script>

<template>
  <section class="py-[140px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div
        class="grid grid-cols-3 gap-x-60 lg:grid-cols-2 lg:gap-30 md:mb-40 md:grid-cols-1 md:gap-0"
      >
        <div class="lg:col-span-2 md:col-span-1 md:mb-10">
          <h2 class="section-title md:mb-30">Contacts</h2>
        </div>
        <div class="mb-85 flex flex-col gap-y-40 md:mb-20 md:gap-y-20">
          <AboutContactsArticle>
            <template #title>Central office</template>
            <template #content>+ 1 204-800-1014</template>
          </AboutContactsArticle>
          <AboutContactsArticle>
            <template #title>Contact mail</template>
            <template #content>info@liechty-humidity.com</template>
          </AboutContactsArticle>
        </div>
        <div class="flex flex-col gap-y-40 md:gap-y-20">
          <AboutContactsArticle>
            <template #title>Office</template>
            <template #content>
              1260 Clarence Avenue, Winnipeg, Manitoba R3T 1T2
            </template>
          </AboutContactsArticle>
          <AboutContactsArticle>
            <template #title>Work schedule</template>
            <template #content>9am to 5pm</template>
          </AboutContactsArticle>
        </div>
      </div>

      <AboutContactsMap></AboutContactsMap>
    </div>
  </section>
</template>
